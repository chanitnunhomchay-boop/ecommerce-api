const express = require("express")
const router = express.Router()

const productController = require("../controllers/productController")

// ดึงรายการสินค้าทั้งหมด
router.get("/", productController.getProducts)

// สร้างสินค้าใหม่
router.post("/", productController.createProduct)

module.exports = router
