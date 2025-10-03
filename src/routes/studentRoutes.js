const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");
const { authenticate, authorize } = require("../middileware/authMiddileware");

// Create student
router.post("/",authenticate, authorize("faculty"), studentController.createStudent);

// Get all students
router.get("/", authenticate, authorize("faculty"), studentController.getAllStudents);

// Get student by ID
router.get("/:id",authenticate, studentController.getStudentById);

// Enroll student to a course
router.post("/:id/enroll", authenticate, authorize("student"), studentController.enrollInCourse);

module.exports = router;
