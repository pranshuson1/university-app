const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
return sequelize.define('User', {
id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
username: { type: DataTypes.STRING, unique: true },
roleId: { type: DataTypes.INTEGER }
}, { tableName: 'users', timestamps: false });
};