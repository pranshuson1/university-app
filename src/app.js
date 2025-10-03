const express = require("express");
const bodyParser = require("body-parser");
const { sequelize } = require("./models");

const authRoutes = require("./routes/authRoutes");
const studentRoutes = require("./routes/studentRoutes");
const courseRoutes = require("./routes/courseRoutes");
const examRoutes = require("./routes/examRoutes");
const paymentRoutes = require("./routes/paymentRoutes");

require('dotenv').config();
const app = express();

// Middlewares
app.use(bodyParser.json());

// Routes
app.use("/api/auth", authRoutes)
app.use("/api/students", studentRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/exams", examRoutes);
app.use("/api/payments", paymentRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("University ERP API is running 🚀");
});

// Sync DB and start server
const PORT = process.env.PORT || 5000;
sequelize.sync({ force: true }).then(() => {
  console.log("✅ Database synced");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
