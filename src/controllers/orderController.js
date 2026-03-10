const db = require("../data/db")

exports.createOrder = (req,res)=>{
    const order = {
        id:Date.now(),
        user:req.user.id,
        product:req.body.product,
        qty:req.body.qty
    }

    db.orders.push(order)

    res.status(201).json(order)
}

exports.getOrders = (req,res)=>{
    res.json(db.orders)
}
