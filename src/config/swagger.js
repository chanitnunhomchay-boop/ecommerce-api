const swaggerJsDoc = require("swagger-jsdoc")

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Ecommerce API",
      version: "1.0.0",
      description: "REST API for Ecommerce"
    },
    servers: [
      {
        url: "http://localhost:3000"
      }
    ]
  },
  apis: ["./src/**/*.js"]
}

const swaggerSpec = swaggerJsDoc(options)

module.exports = swaggerSpec
