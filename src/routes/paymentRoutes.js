const express = require("express")
const router = express.Router()

const controller = require("../controllers/paymentController")
const auth = require("../middleware/authMiddleware")

/**
 * @swagger
 * /api/v1/payments:
 *   post:
 *     summary: Process payment
 *     tags: [Payments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               orderId:
 *                 type: string
 *               amount:
 *                 type: number
 *     responses:
 *       201:
 *         description: Payment successful
 */
router.post("/", auth, controller.createPayment)

module.exports = router
