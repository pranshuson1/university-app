const express = require("express");
const router = express.Router();
const examController = require("../controllers/examController");

// Create exam for a course
router.post("/", examController.createExam);

// Get all exams
router.get("/", examController.getAllExams);

// Add student result for an exam
router.post("/:examId/result", examController.addResult);

// Get results of a student
router.get("/student/:studentId", examController.getResultsByStudent);

module.exports = router;
