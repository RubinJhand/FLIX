import { Router } from 'express';
import { mediaDeleteAll, mediaCreateBulk } from '../controllers';

const router = Router();

router.get('/delete/:genre', mediaDeleteAll);
router.get('/create/:genre', mediaCreateBulk);

export default router;
