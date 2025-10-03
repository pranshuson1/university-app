const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
return sequelize.define('Role', {
id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
name: { type: DataTypes.STRING, unique: true }
}, { tableName: 'roles', timestamps: false });
};