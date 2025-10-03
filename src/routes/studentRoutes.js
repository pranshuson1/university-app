const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");

// Create student
router.post("/", studentController.createStudent);

// Get all students
router.get("/", studentController.getAllStudents);

// Get student by ID
router.get("/:id", studentController.getStudentById);

// Enroll student to a course
router.post("/:id/enroll", studentController.enrollInCourse);

module.exports = router;
