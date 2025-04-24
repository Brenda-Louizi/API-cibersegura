import express from 'express';
import crypto from 'crypto';

const router = express.Router();

router.get('/', (req, res) => {
  const text = req.query.text;
  if (!text) return res.status(400).json({ error: 'Texto não informado' });

  const sha256 = crypto.createHash('sha256').update(text).digest('hex');
  const base64 = Buffer.from(text).toString('base64');

  res.json({ original: text, sha256, base64 });
});

export default router;
