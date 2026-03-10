let orders = []

// ดึงรายการคำสั่งซื้อทั้งหมด
exports.getOrders = (req, res) => {
  res.json(orders)
}

// สร้างคำสั่งซื้อใหม่
exports.createOrder = (req, res) => {

  const order = {
    id: Date.now(),
    userId: req.body.userId,
    products: req.body.products,
    totalPrice: req.body.totalPrice,
    status: "pending"
  }

  orders.push(order)

  res.status(201).json(order)
}
