import express from 'express';
import passwordRoute from './routes/passwordRoute.js';
import encryptRoute from './routes/encryptRoute.js';
import breachRoute from './routes/breachRoute.js';
import decodeRoute from './routes/decodeRoute.js';

const app = express();
const PORT = 3000;

app.use('/generate-password', passwordRoute);
app.use('/encrypt-text', encryptRoute);
app.use('/data-breach-alerts', breachRoute);
app.use('/decode-base64', decodeRoute);

app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`);
});
