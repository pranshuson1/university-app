const { Student, Course, Enrollment } = require("../models");

// Create a new student
exports.createStudent = async (req, res) => {
  try {
    const { name, email, dob } = req.body;

    const student = await Student.create({ name, email, dob });
    res.json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all students
exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.findAll({
      include: [{ model: Course, through: { attributes: [] } }]
    });
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get student by ID
exports.getStudentById = async (req, res) => {
  try {
    const { id } = req.params;

    const student = await Student.findByPk(id, {
      include: [{ model: Course, through: { attributes: [] } }]
    });

    if (!student) return res.status(404).json({ error: "Student not found" });

    res.json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Enroll student into a course
exports.enrollInCourse = async (req, res) => {
  try {
    const { id } = req.params; // studentId
    const { courseId } = req.body;

    const student = await Student.findByPk(id);
    if (!student) return res.status(404).json({ error: "Student not found" });

    const course = await Course.findByPk(courseId);
    if (!course) return res.status(404).json({ error: "Course not found" });

    // Create enrollment
    const enrollment = await Enrollment.create({ studentId: id, courseId });

    res.json({ message: "Enrollment successful", enrollment });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
