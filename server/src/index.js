import express, { json, urlencoded } from 'express';
import { createServer } from 'http';
import cors from 'cors';

import { CORS_ORIGIN } from './constants/cors.js';
import { PORT } from './constants/port.js';

const app = express();
const server = createServer(app);

// ----- API setup -----
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors(CORS_ORIGIN));

// ----- Routes -----
app.get('/', (req, res) => {
  res.json({ data: 'working!' });
});

server.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
