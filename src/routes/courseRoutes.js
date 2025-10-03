const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courseController");
const { authenticate, authorize } = require("../middileware/authMiddileware");

// Create a new course
router.post("/", authenticate, authorize("faculty"), courseController.createCourse);

// Get all courses
router.get("/",authenticate,courseController.getAllCourses);

// Get course by ID
router.get("/:id",authenticate, courseController.getCourseById);


module.exports = router;
