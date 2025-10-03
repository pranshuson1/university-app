const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("mysql:root:password@localhost:3306/university", {
  dialect: "mysql",
  logging: false,
});

const Student = require("./student")(sequelize);
const Course = require("./course")(sequelize);
const Enrollment = require("./enrollment")(sequelize);
const Exam = require("./exam")(sequelize);
const Result = require("./result")(sequelize);
const FeePayment = require("./feePayment")(sequelize);
const User = require("./user")(sequelize);
const Role = require("./role")(sequelize);

// Associations
Course.hasMany(Exam, { foreignKey: "courseId" });
Exam.belongsTo(Course, { foreignKey: "courseId" });

Student.belongsToMany(Course, { through: Enrollment, foreignKey: "studentId" });
Course.belongsToMany(Student, { through: Enrollment, foreignKey: "courseId" });

Enrollment.hasMany(Result, { foreignKey: "enrollmentId" });
Result.belongsTo(Enrollment, { foreignKey: "enrollmentId" });

Student.hasMany(FeePayment, { foreignKey: "studentId" });
FeePayment.belongsTo(Student, { foreignKey: "studentId" });

Student.hasMany(Enrollment, { foreignKey: "studentId" });
Course.hasMany(Enrollment, { foreignKey: "courseId" });

// Simple RBAC: User - Role
Role.hasMany(User, { foreignKey: "roleId" });
User.belongsTo(Role, { foreignKey: "roleId" });

module.exports = {
  sequelize,
  Student,
  Course,
  Enrollment,
  Exam,
  Result,
  FeePayment,
  User,
  Role,
};
