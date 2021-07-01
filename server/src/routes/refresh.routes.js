import { Router } from 'express';
import { mediaDeleteAll, mediaCreateBulk } from '../controllers';

const router = Router();

router.get('/delete/:mediaType/:genre', mediaDeleteAll);
router.get('/delete/:genre', mediaDeleteAll);
router.get('/create/:mediaType/:genre', mediaCreateBulk);
router.get('/create/:genre', mediaCreateBulk);

export default router;
