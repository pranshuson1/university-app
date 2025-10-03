const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  const User = sequelize.define("User", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
username: { type: DataTypes.STRING, unique: true },
roleId: { type: DataTypes.INTEGER },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: { isEmail: true }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.ENUM("student", "faculty"),
      allowNull: false
    }
  } , { tableName: 'users', timestamps: false });

  User.associate = (models) => {
    User.belongsTo(models.Student, { foreignKey: "studentId" });
    User.belongsTo(models.Faculty, { foreignKey: "facultyId" });
  };

  return User;
};
