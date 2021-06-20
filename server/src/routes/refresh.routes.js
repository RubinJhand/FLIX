import { Router } from 'express';
import {
  mediaDeleteAll,
  mediaCreateBulk
} from '../controllers/refreshDB.controller';

const router = Router();

router.get('/delete', mediaDeleteAll);
router.get('/createBulk', mediaCreateBulk);

export default router;
