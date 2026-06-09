import { put, del } from '@vercel/blob';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request) {
  try {
    const formData = await request.formData();

    // ── Text fields ──────────────────────────────────────────
    const name        = formData.get('username') || '';
    const phone       = formData.get('phone')    || '';
    const make        = formData.get('car_make') || '';
    const model       = formData.get('category') || '';
    const mileage     = formData.get('mileage')  || '';
    const year        = formData.get('yom')      || 'Not provided';
    const askingPrice = formData.get('price')    || 'Not provided';
    const location    = formData.get('location') || 'Not provided';
    const notes       = formData.get('notes')    || '';

    // ── Collect image files (filename1 … filename10) ─────────
    const imageFiles = [];
    for (let i = 1; i <= 10; i++) {
      const file = formData.get('filename' + i);
      if (file && file.size > 0) imageFiles.push(file);
    }

    // ── Upload each image to Vercel Blob, fetch back as buffer ─
    const attachments = [];
    const blobUrls    = [];

    for (const file of imageFiles) {
      const blob = await put(
        `sell-submissions/${Date.now()}-${file.name}`,
        file,
        { access: 'public' }
      );
      blobUrls.push(blob.url);

      const res    = await fetch(blob.url);
      const buffer = Buffer.from(await res.arrayBuffer());
      attachments.push({
        filename:    file.name,
        content:     buffer,
        contentType: file.type,
      });
    }

    // ── Send email ────────────────────────────────────────────
    await transporter.sendMail({
      from:    process.env.SMTP_USER,
      to:      process.env.RECIPIENT_EMAIL,
      replyTo: phone,
      subject: `🚗 New Sell Request — ${make} ${model} (${year})`,
      html: `
        <div style="font-family:sans-serif;max-width:620px;margin:auto;background:#ffffff">

          <!-- Header -->
          <div style="background:#0a1628;padding:24px 32px;border-radius:8px 8px 0 0">
            <span style="color:#ffffff;font-size:20px;font-weight:700;letter-spacing:1px">CarConnect.lk</span>
            <span style="color:rgba(255,255,255,0.4);font-size:13px;margin-left:12px">New Vehicle Submission</span>
          </div>

          <!-- Body -->
          <div style="border:1px solid #e5e7eb;border-top:none;padding:32px;border-radius:0 0 8px 8px">
            <h2 style="margin:0 0 6px;color:#0a1628;font-size:20px">New Sell Request</h2>
            <p style="margin:0 0 24px;color:#6b7280;font-size:14px">Submitted via carconnect.lk — respond within 2 hours</p>

            <!-- Details table -->
            <table style="width:100%;border-collapse:collapse;font-size:14px;border-radius:6px;overflow:hidden">
              <tr style="background:#f3f4f6">
                <td style="padding:11px 16px;font-weight:600;color:#374151;width:38%">Name</td>
                <td style="padding:11px 16px;color:#111827">${name}</td>
              </tr>
              <tr>
                <td style="padding:11px 16px;font-weight:600;color:#374151">Phone</td>
                <td style="padding:11px 16px;color:#111827">
                  <a href="tel:${phone}" style="color:#0a1628;text-decoration:none">${phone}</a>
                </td>
              </tr>
              <tr style="background:#f3f4f6">
                <td style="padding:11px 16px;font-weight:600;color:#374151">Make &amp; Model</td>
                <td style="padding:11px 16px;color:#111827">${make} ${model}</td>
              </tr>
              <tr>
                <td style="padding:11px 16px;font-weight:600;color:#374151">Year of Manufacture</td>
                <td style="padding:11px 16px;color:#111827">${year}</td>
              </tr>
              <tr style="background:#f3f4f6">
                <td style="padding:11px 16px;font-weight:600;color:#374151">Mileage</td>
                <td style="padding:11px 16px;color:#111827">${Number(mileage).toLocaleString()} km</td>
              </tr>
              <tr>
                <td style="padding:11px 16px;font-weight:600;color:#374151">Asking Price</td>
                <td style="padding:11px 16px;color:#111827">${askingPrice}</td>
              </tr>
              <tr style="background:#f3f4f6">
                <td style="padding:11px 16px;font-weight:600;color:#374151">Location</td>
                <td style="padding:11px 16px;color:#111827">${location}</td>
              </tr>
              ${notes ? `
              <tr>
                <td style="padding:11px 16px;font-weight:600;color:#374151">Notes</td>
                <td style="padding:11px 16px;color:#111827">${notes}</td>
              </tr>` : ''}
              <tr style="background:#f3f4f6">
                <td style="padding:11px 16px;font-weight:600;color:#374151">Photos</td>
                <td style="padding:11px 16px;color:#111827">${attachments.length} image(s) attached</td>
              </tr>
            </table>

            <!-- CTA -->
            <div style="margin-top:28px;padding:20px;background:#f9fafb;border-radius:8px;text-align:center">
              <p style="margin:0 0 14px;font-size:13px;color:#6b7280">Quick actions</p>
              <a href="tel:${phone}"
                style="display:inline-block;background:#0a1628;color:#fff;padding:10px 24px;border-radius:6px;text-decoration:none;font-size:14px;font-weight:600;margin-right:10px">
                📞 Call ${name}
              </a>
              <a href="https://wa.me/${phone.replace(/\D/g,'')}"
                style="display:inline-block;background:#25d366;color:#fff;padding:10px 24px;border-radius:6px;text-decoration:none;font-size:14px;font-weight:600">
                💬 WhatsApp
              </a>
            </div>

          </div>

          <!-- Footer -->
          <p style="text-align:center;font-size:12px;color:#9ca3af;margin-top:16px">
            CarConnect.lk · Level 08, Cinnamon Grand Hotel, Galle Road, Colombo 03
          </p>
        </div>
      `,
      attachments,
    });

    // ── Clean up Blob storage after email is sent ─────────────
    await Promise.all(blobUrls.map((url) => del(url)));

    return Response.json({ ok: true });

  } catch (err) {
    console.error('Sell form error:', err);
    return Response.json({ ok: false, error: err.message }, { status: 500 });
  }
}
