import { Router } from 'express';
import authRoutes from './authRoutes.js';
import packageRoutes from './packageRoutes.js';

const router = Router();

router.use('/auth', authRoutes);
router.use('/packages', packageRoutes);

export default router;