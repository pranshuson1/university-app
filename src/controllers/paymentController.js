const { sequelize, FeePayment, Student, Result } = require("../models");

/**
 * Simulate a Payment Gateway
 * @returns {Promise<{status: string, transactionId: string}>}
 */
function simulatePaymentGateway() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: "success",
        transactionId: "TXN-" + Date.now()
      });
    }, 1000); // simulate 1s delay
  });
}

/**
 * Pay Fees API
 * - Prevents double entries via transaction & row locking
 * - Unlocks student's results when fees are paid
 */
exports.payFees = async (req, res) => {
  const { studentId, amount } = req.body;

  const t = await sequelize.transaction();

  try {
    // Lock the student row to avoid double updates
    const student = await Student.findByPk(studentId, {
      lock: t.LOCK.UPDATE,
      transaction: t
    });

    if (!student) {
      await t.rollback();
      return res.status(404).json({ error: "Student not found" });
    }

    // Call fake payment gateway
    const gatewayResponse = await simulatePaymentGateway();

    if (gatewayResponse.status !== "success") {
      await t.rollback();
      return res.status(400).json({ error: "Payment failed" });
    }

    // Record the payment
    const feePayment = await FeePayment.create(
      {
        studentId,
        amount,
        status: "paid",
        transactionId: gatewayResponse.transactionId
      },
      { transaction: t }
    );

    // Unlock results for the student
    await Result.update(
      { locked: false },
      { where: { studentId }, transaction: t }
    );

    await t.commit();
    res.json({ message: "Payment successful", payment: feePayment });
  } catch (err) {
    await t.rollback();
    res.status(500).json({ error: err.message });
  }
};
