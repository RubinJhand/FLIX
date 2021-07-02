import { Router } from 'express';

import { recommendationController } from '../controllers';

const router = Router();

router.get('/recommend/:mediaType/:id', recommendationController);

export default router;
