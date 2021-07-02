import { Router } from 'express';

import { searchController } from '../controllers';

const router = Router();

router.get('/search/:search', searchController);

export default router;
