import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Package = sequelize.define('Package', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  trackingNumber: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM(
      'pending',
      'picked_up',
      'in_transit',
      'out_for_delivery',
      'delivered',
      'failed'
    ),
    defaultValue: 'pending'
  },
  origin: {
    type: DataTypes.STRING,
    allowNull: false
  },
  destination: {
    type: DataTypes.STRING,
    allowNull: false
  },
  weight: DataTypes.FLOAT,
  dimensions: DataTypes.JSON,
  estimatedDelivery: DataTypes.DATE,
  actualDelivery: DataTypes.DATE,
  notes: DataTypes.TEXT
});

export default Package;