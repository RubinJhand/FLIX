import express, { json, urlencoded } from 'express';
import cors from 'cors';

import CORS_CONFIG from './cors.config';
import { API_CURRENT_VERSION, DB_REFRESH_PATH } from '../constants';
import { MediaRoutes, CategoryRoutes, RefreshRoutes } from '../routes';

const app = express();

app.use(cors(CORS_CONFIG));

app.use(json());
app.use(urlencoded({ extended: true }));

// ----- Routes -----
app.use(API_CURRENT_VERSION, MediaRoutes);
app.use(`${DB_REFRESH_PATH}`, RefreshRoutes);
app.use(API_CURRENT_VERSION, CategoryRoutes);

app.get('/', (req, res) => {
  res.json({ data: 'working!' });
});

export default app;
