const express = require("express")
const router = express.Router()

const orderController = require("../controllers/orderController")

// ดึงรายการคำสั่งซื้อทั้งหมด
router.get("/", orderController.getOrders)

// สร้างคำสั่งซื้อใหม่
router.post("/", orderController.createOrder)

module.exports = router
