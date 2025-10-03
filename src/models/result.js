const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
return sequelize.define('Result', {
id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
enrollmentId: { type: DataTypes.INTEGER, allowNull: false },
examId: { type: DataTypes.INTEGER, allowNull: false },
marks: { type: DataTypes.FLOAT, allowNull: false },
grade: { type: DataTypes.STRING },
locked: { type: DataTypes.BOOLEAN, defaultValue: true } // locked until fees cleared
}, { tableName: 'results', indexes: [{ fields: ['enrollmentId','examId'] }] });
};