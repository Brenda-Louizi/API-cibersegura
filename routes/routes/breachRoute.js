import express from 'express';
import breaches from '../data/breaches.json' assert { type: "json" };

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ breaches });
});

export default router;
