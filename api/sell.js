const { put, del } = require('@vercel/blob');
const nodemailer   = require('nodemailer');
const multiparty   = require('multiparty');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const form = new multiparty.Form();

  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(500).json({ ok: false, error: err.message });
    }

    try {
      const username = fields.username?.[0] || '';
      const phone    = fields.phone?.[0]    || '';
      const car_make = fields.car_make?.[0] || '';
      const category = fields.category?.[0] || '';
      const mileage  = fields.mileage?.[0]  || '';

      // Collect all uploaded images
      const imageFiles = [];
      for (let i = 1; i <= 10; i++) {
        const f = files['filename' + i]?.[0];
        if (f) imageFiles.push(f);
      }

      // Upload to Vercel Blob and fetch back as buffer
      const attachments = [];
      const blobUrls    = [];

      for (const file of imageFiles) {
        const fs     = require('fs');
        const buffer = fs.readFileSync(file.path);
        const blob   = await put(
          `sell-submissions/${Date.now()}-${file.originalFilename}`,
          buffer,
          { access: 'public', contentType: file.headers['content-type'] }
        );
        blobUrls.push(blob.url);

        const fetched   = await fetch(blob.url);
        const imgBuffer = Buffer.from(await fetched.arrayBuffer());
        attachments.push({
          filename:    file.originalFilename,
          content:     imgBuffer,
          contentType: file.headers['content-type'],
        });
      }

      const recipients = [
        process.env.RECIPIENT_EMAIL_1,
        process.env.RECIPIENT_EMAIL_2,
        process.env.RECIPIENT_EMAIL_3,
      ].filter(Boolean).join(', ');

      await transporter.sendMail({
        from:    process.env.SMTP_USER,
        to:      recipients,
        replyTo: phone,
        subject: `🚗 New Sell Request — ${car_make} ${category}`,
        html: `
          <div style="font-family:sans-serif;max-width:620px;margin:auto">
            <div style="background:#0a1628;padding:24px 32px;border-radius:8px 8px 0 0">
              <span style="color:#fff;font-size:20px;font-weight:700">CarConnect.lk</span>
              <span style="color:rgba(255,255,255,0.4);font-size:13px;margin-left:12px">New Vehicle Submission</span>
            </div>
            <div style="border:1px solid #e5e7eb;border-top:none;padding:32px;border-radius:0 0 8px 8px">
              <h2 style="margin:0 0 6px;color:#0a1628">New Sell Request</h2>
              <p style="margin:0 0 24px;color:#6b7280;font-size:14px">Submitted via carconnect.lk</p>
              <table style="width:100%;border-collapse:collapse;font-size:14px">
                <tr style="background:#f3f4f6">
                  <td style="padding:11px 16px;font-weight:600;width:38%">Name</td>
                  <td style="padding:11px 16px">${username}</td>
                </tr>
                <tr>
                  <td style="padding:11px 16px;font-weight:600">Phone</td>
                  <td style="padding:11px 16px"><a href="tel:${phone}" style="color:#0a1628">${phone}</a></td>
                </tr>
                <tr style="background:#f3f4f6">
                  <td style="padding:11px 16px;font-weight:600">Make &amp; Model</td>
                  <td style="padding:11px 16px">${car_make} ${category}</td>
                </tr>
                <tr>
                  <td style="padding:11px 16px;font-weight:600">Mileage</td>
                  <td style="padding:11px 16px">${Number(mileage).toLocaleString()} km</td>
                </tr>
                <tr style="background:#f3f4f6">
                  <td style="padding:11px 16px;font-weight:600">Photos</td>
                  <td style="padding:11px 16px">${attachments.length} image(s) attached</td>
                </tr>
              </table>
              <div style="margin-top:28px;padding:20px;background:#f9fafb;border-radius:8px;text-align:center">
                <a href="tel:${phone}" style="display:inline-block;background:#0a1628;color:#fff;padding:10px 24px;border-radius:6px;text-decoration:none;font-size:14px;font-weight:600;margin-right:10px">
                  📞 Call ${username}
                </a>
                <a href="https://wa.me/${phone.replace(/\D/g,'')}" style="display:inline-block;background:#25d366;color:#fff;padding:10px 24px;border-radius:6px;text-decoration:none;font-size:14px;font-weight:600">
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </div>
        `,
        attachments,
      });

      await Promise.all(blobUrls.map(url => del(url)));

      res.json({ ok: true });

    } catch (err) {
      console.error('Sell form error:', err);
      res.status(500).json({ ok: false, error: err.message });
    }
  });
};
