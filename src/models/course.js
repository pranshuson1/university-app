const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
return sequelize.define('Course', {
id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
code: { type: DataTypes.STRING, allowNull: false, unique: true },
name: { type: DataTypes.STRING, allowNull: false }
}, { tableName: 'courses' });
};