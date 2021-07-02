import { Router } from 'express';

import { seasonController } from '../controllers';

const router = Router();

router.get('/seasons/:season_num/:tv_id', seasonController);

export default router;
