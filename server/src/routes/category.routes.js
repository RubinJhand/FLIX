import { Router } from 'express';
import {
  categoryShowAll,
  categoryShowAllTv,
  categoryShowAllMovies
} from '../controllers/category.controller';

const router = Router();

router.get('/category/:genre', categoryShowAll);
router.get('/category/tv/:genre', categoryShowAllTv);
router.get('/category/movies/:genre', categoryShowAllMovies);

export default router;
