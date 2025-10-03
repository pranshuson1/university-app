const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User, Student, Faculty } = require("../models");

const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";

// Register user (student or faculty)
exports.register = async (req, res) => {
  try {
    const { email, password, role, studentId, facultyId } = req.body;

    if (!["student", "faculty"].includes(role)) {
      return res.status(400).json({ error: "Invalid role" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      email,
      password: hashedPassword,
      role,
      studentId: role === "student" ? studentId : null,
      facultyId: role === "faculty" ? facultyId : null
    });

    res.json({ message: "User registered", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(404).json({ error: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

    const token = jwt.sign(
      { id: user.id, role: user.role },
      JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({ message: "Login successful", token, role: user.role });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
