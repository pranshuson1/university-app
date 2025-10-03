const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/paymentController");
const { authenticate, authorize } = require("../middileware/authMiddileware");

// Pay fees for a student
router.post("/pay",authenticate, authorize("student"), paymentController.payFees);

module.exports = router;
