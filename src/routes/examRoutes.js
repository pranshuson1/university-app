const express = require("express");
const router = express.Router();
const examController = require("../controllers/examController");
const { authenticate, authorize } = require("../middileware/authMiddileware");

// Create exam for a course
router.post("/", authenticate, authorize("faculty"), examController.createExam);

// Get all exams
router.get("/", authenticate,examController.getAllExams);

// Add student result for an exam
router.post("/:examId/result",authenticate, authorize("faculty"), examController.addResult);

// Get results of a student
router.get("/student/:studentId",authenticate, examController.getResultsByStudent);

module.exports = router;
