import { Router } from 'express';
import {
  mediaShowAll,
  mediaShowOne,
  mediaShowTv,
  mediaShowMovie
} from '../controllers/media.controller.js';

const router = Router();

router.get('/media', mediaShowAll);
router.get('/media/tv', mediaShowTv);
router.get('/media/movies', mediaShowMovie);
router.get('/media/:id', mediaShowOne);

// export default router;
