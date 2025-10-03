const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
module.exports = (sequelize) => {
return sequelize.define('FeePayment', {
id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
studentId: { type: DataTypes.INTEGER, allowNull: false },
amount: { type: DataTypes.FLOAT, allowNull: false },
status: { type: DataTypes.ENUM('PENDING','SUCCESS','FAILED'), defaultValue: 'PENDING' },
gatewayRef: { type: DataTypes.STRING }
}, { tableName: 'fee_payments' });
};