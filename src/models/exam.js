const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
return sequelize.define('Exam', {
id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
courseId: { type: DataTypes.INTEGER, allowNull: false },
name: { type: DataTypes.STRING, allowNull: false },
date: { type: DataTypes.DATE }
}, { tableName: 'exams' });
};