# E-Commerce RESTful API

Author: CHANITNAN HOMCHAI

Ecommerce REST API

RESTful API สำหรับระบบ Ecommerce พัฒนาด้วย Node.js + Express.js พร้อมระบบ Authentication และเอกสาร API ผ่าน Swagger

Features

User Authentication (Register / Login)

Product Management

Order Management

RESTful API Design

Swagger API Documentation

Security Middleware (Helmet, Rate Limiting)

Logging ด้วย Morgan

Tech Stack

Node.js

Express.js

Swagger (API Documentation)

JWT Authentication

Helmet

CORS

Morgan

Project Structure
src
├── config
 │   └── swagger.js
 │
 ├── controllers
 │   ├── authController.js
 │   ├── productController.js
 │   └── orderController.js
 │
 ├── middleware
 │   ├── authMiddleware.js
 │   ├── roleMiddleware.js
 │   ├── rateLimiter.js
 │   └── errorMiddleware.js
 │
 ├── routes
 │   ├── authRoutes.js
 │   ├── productRoutes.js
 │   └── orderRoutes.js
 │
 └── app.js
Installation

Clone project

git clone https://github.com/yourusername/ecommerce-api.git
cd ecommerce-api

ติดตั้ง dependencies

npm install

สร้างไฟล์ .env

PORT=3000
JWT_SECRET=your_secret_key
Run Server
npm start

Server จะทำงานที่

http://localhost:3000
API Documentation (Swagger)

เปิดดูเอกสาร API ได้ที่

http://localhost:3000/api-docs
API Endpoints
Authentication
POST /api/v1/auth/register
POST /api/v1/auth/login
Products
GET  /api/v1/products
POST /api/v1/products
Orders
GET  /api/v1/orders
POST /api/v1/orders
Security

ระบบมีการใช้

JWT Authentication

Role-based Authorization

Rate Limiting

Helmet Security Headers

CORS Protection

Author

Developed for REST API & Backend Development Practice
