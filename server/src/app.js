import express, { json, urlencoded } from 'express';
import cors from 'cors';

import { CORS_ORIGIN } from './constants/cors.js';
import {
  API_CURRENT_VERSION,
  DB_REFRESH_PATH
} from './constants/apiVersion.js';

import MediaRoutes from '../src/routes/media.routes.js';
import MediaRefresh from '../src/routes/refresh.routes.js';

const app = express();

// ----- Middleware -----
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors(CORS_ORIGIN));

// ----- Routes -----
app.use(API_CURRENT_VERSION, MediaRoutes);
app.use(`${DB_REFRESH_PATH}`, MediaRefresh);

app.get('/', (req, res) => {
  res.json({ data: 'working!' });
});

export default app;
