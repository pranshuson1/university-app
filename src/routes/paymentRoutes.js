const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/paymentController");

// Pay fees for a student
router.post("/pay", paymentController.payFees);

module.exports = router;
