const { Exam, Course, Result, Student } = require("../models");

// Create a new exam for a course
exports.createExam = async (req, res) => {
  try {
    const { courseId, name, date } = req.body;

    const course = await Course.findByPk(courseId);
    if (!course) return res.status(404).json({ error: "Course not found" });

    const exam = await Exam.create({ courseId, name, date });
    res.json(exam);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all exams
exports.getAllExams = async (req, res) => {
  try {
    const exams = await Exam.findAll({
      include: [{ model: Course, attributes: ["id", "name"] }]
    });
    res.json(exams);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add result for a student in an exam
exports.addResult = async (req, res) => {
  try {
    const { examId } = req.params;
    console.log('examId :>> ', examId);
    const { studentId, marks, status ,enrollmentId} = req.body; // status = pass/fail

    const exam = await Exam.findByPk(examId);
    if (!exam) return res.status(404).json({ error: "Exam not found" });

    const student = await Student.findByPk(studentId);
    if (!student) return res.status(404).json({ error: "Student not found" });

    const result = await Result.create({
      examId,
      studentId,
      marks,
      status,
      enrollmentId,
      locked: true // results locked until fee payment
    });

    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all results of a student
exports.getResultsByStudent = async (req, res) => {
  try {
    const { studentId } = req.params;

    const results = await Result.findAll({
      where: { studentId },
      include: [
        {
          model: Exam,
          include: [{ model: Course, attributes: ["id", "name"] }]
        }
      ]
    });

    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
