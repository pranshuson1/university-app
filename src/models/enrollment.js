const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
return sequelize.define('Enrollment', {
id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
studentId: { type: DataTypes.INTEGER, allowNull: false },
courseId: { type: DataTypes.INTEGER, allowNull: false }
}, { tableName: 'enrollments', indexes: [{ unique: true, fields: ['studentId','courseId'] }] });
};