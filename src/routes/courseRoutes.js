const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courseController");

// Create a new course
router.post("/", courseController.createCourse);

// Get all courses
router.get("/", courseController.getAllCourses);

// Get course by ID
router.get("/:id", courseController.getCourseById);

router.post("/exam", courseController.createExam);

module.exports = router;
