const express = require("express")
const router = express.Router()

const controller = require("../controllers/orderController")
const auth = require("../middleware/authMiddleware")

router.get("/",auth,controller.getOrders)
router.post("/",auth,controller.createOrder)

module.exports = router
