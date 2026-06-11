const { put } = require('@vercel/blob');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const filename = req.query.filename || 'upload';
    const blob = await put(
      `sell-submissions/${Date.now()}-${filename}`,
      req,
      { access: 'public' }
    );
    res.json({ url: blob.url });
  } catch (err) {
    console.error('Upload error:', err);
    res.status(500).json({ error: err.message });
  }
};
