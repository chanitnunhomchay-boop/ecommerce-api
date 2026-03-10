require("dotenv").config()

const express = require("express")
const cors = require("cors")
const helmet = require("helmet")
const morgan = require("morgan")

const swaggerUI = require("swagger-ui-express")
const swaggerSpec = require("./config/swagger")

const rateLimiter = require("./middleware/rateLimiter")
const errorMiddleware = require("./middleware/errorMiddleware")

const authRoutes = require("./routes/authRoutes")
const productRoutes = require("./routes/productRoutes")
const orderRoutes = require("./routes/orderRoutes")

const app = express()

app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(morgan("dev"))
app.use(rateLimiter)

app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/products", productRoutes)
app.use("/api/v1/orders", orderRoutes)

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec))

app.use(errorMiddleware)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
