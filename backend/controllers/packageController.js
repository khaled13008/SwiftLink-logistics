import Package from '../models/Package.js';
import { validatePackage } from '../validators/packageValidator.js';
import logger from '../utils/logger.js';

export const createPackage = async (req, res) => {
  try {
    const { error } = validatePackage(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const package = await Package.create(req.body);
    res.status(201).json(package);
  } catch (error) {
    logger.error('Create package error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getPackage = async (req, res) => {
  try {
    const { trackingNumber } = req.params;
    const package = await Package.findOne({ where: { trackingNumber } });
    
    if (!package) {
      return res.status(404).json({ error: 'Package not found' });
    }
    
    res.json(package);
  } catch (error) {
    logger.error('Get package error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const updatePackageStatus = async (req, res) => {
  try {
    const { trackingNumber } = req.params;
    const { status } = req.body;

    const package = await Package.findOne({ where: { trackingNumber } });
    if (!package) {
      return res.status(404).json({ error: 'Package not found' });
    }

    await package.update({ status });
    res.json(package);
  } catch (error) {
    logger.error('Update package status error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};