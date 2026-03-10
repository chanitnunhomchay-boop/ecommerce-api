const express = require("express")
const router = express.Router()

const controller = require("../controllers/orderController")
const auth = require("../middleware/authMiddleware")
const idempotency = require("../middleware/idempotencyMiddleware")

/**
 * @swagger
 * /api/v1/orders:
 *   get:
 *     summary: Get user orders
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: List of orders
 */
router.get("/", auth, controller.getOrders)

/**
 * @swagger
 * /api/v1/orders:
 *   post:
 *     summary: Create new order
 *     tags: [Orders]
 *     responses:
 *       201:
 *         description: Order created
 */
router.post("/", auth, idempotency, controller.createOrder)

module.exports = router
