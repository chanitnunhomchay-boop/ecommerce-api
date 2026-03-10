const express = require("express")
const router = express.Router()

const controller = require("../controllers/productController")
const auth = require("../middleware/authMiddleware")
const role = require("../middleware/roleMiddleware")

router.get("/",controller.getProducts)
router.post("/",auth,role("admin"),controller.createProduct)

module.exports = router
