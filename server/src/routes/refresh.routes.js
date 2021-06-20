import { Router } from 'express';
import { mediaDeleteAll, mediaCreateBulk } from '../controllers';

const router = Router();

router.get('/delete', mediaDeleteAll);
router.get('/create', mediaCreateBulk);

export default router;
