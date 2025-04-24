import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  const text = req.query.text;
  if (!text) return res.status(400).json({ error: 'Texto não informado' });

  try {
    const decoded = Buffer.from(text, 'base64').toString('utf-8');
    res.json({ original: text, decoded });
  } catch (err) {
    res.status(400).json({ error: 'Texto Base64 inválido' });
  }
});

export default router;
