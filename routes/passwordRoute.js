import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  const length = parseInt(req.query.length) || 12;
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+';
  let password = '';
  for (let i = 0; i < length; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }
  res.json({ password });
});

export default router;
