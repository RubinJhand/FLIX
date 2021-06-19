import { Router } from 'express';
import {
  mediaIndex,
  mediaShow,
  mediaShowTv,
  mediaShowMovie
} from '../controllers/media.controller.js';

const router = Router();

router.get('/media', mediaIndex);
router.get('/media/tv', mediaShowTv);
router.get('/media/movies', mediaShowMovie);
router.get('/media/:id', mediaShow);

export default router;
