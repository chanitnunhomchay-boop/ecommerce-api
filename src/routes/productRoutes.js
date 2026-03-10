const express = require("express")
const router = express.Router()

const controller = require("../controllers/productController")
const auth = require("../middleware/authMiddleware")
const role = require("../middleware/roleMiddleware")
const cache = require("../middleware/cacheMiddleware")

/**
 * @swagger
 * /api/v1/products:
 *   get:
 *     summary: Get all products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: List of products
 */
router.get("/", cache, controller.getProducts)

/**
 * @swagger
 * /api/v1/products:
 *   post:
 *     summary: Create new product
 *     tags: [Products]
 *     responses:
 *       201:
 *         description: Product created
 */
router.post("/", auth, role("admin"), controller.createProduct)

module.exports = routerrouter
