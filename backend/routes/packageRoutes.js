import { Router } from 'express';
import { createPackage, getPackage, updatePackageStatus } from '../controllers/packageController.js';
import { authenticate, authorize } from '../middleware/auth.js';

const router = Router();

router.post('/', authenticate, authorize(['admin']), createPackage);
router.get('/:trackingNumber', getPackage);
router.patch('/:trackingNumber/status', authenticate, authorize(['admin', 'driver']), updatePackageStatus);

export default router;