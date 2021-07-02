import express, { json, urlencoded } from 'express';
import cors from 'cors';

import CORS_CONFIG from './cors.config';
import { API_CURRENT_VERSION, DB_REFRESH_PATH } from '../constants';
import {
  CategoryRoutes,
  RefreshRoutes,
  SearchRoutes,
  SeasonRoutes,
  RecommendationRoutes
} from '../routes';

const app = express();

app.use(cors(CORS_CONFIG));

app.use(json());
app.use(urlencoded({ extended: true }));

// ----- Routes -----
app.use(API_CURRENT_VERSION, CategoryRoutes);
app.use(API_CURRENT_VERSION, SearchRoutes);
app.use(API_CURRENT_VERSION, SeasonRoutes);
app.use(API_CURRENT_VERSION, RecommendationRoutes);

// Below routes are for development purposes only.
app.use(`${DB_REFRESH_PATH}`, RefreshRoutes);

app.get('/', (req, res) => {
  res.json({ data: 'working!' });
});

export default app;
