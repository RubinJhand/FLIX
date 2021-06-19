import express, { json, urlencoded } from 'express';
import cors from 'cors';

import { CORS_ORIGIN } from './constants/cors.js';
import MediaRoutes from '../src/routes/media.routes.js';

const app = express();

// ----- Middleware -----
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors(CORS_ORIGIN));

// ----- Routes -----
app.use('/api/v1', MediaRoutes);

app.get('/', (req, res) => {
  res.json({ data: 'working!' });
});

export default app;
