const db = require("../data/db")
const cache = require("../services/cacheService")

exports.getProducts = (req,res)=>{
    const cached = cache.get("products")
    if(cached) return res.json(cached)

    cache.set("products", db.products)

    res.json(db.products)
}

exports.createProduct = (req,res)=>{
    const product = {
        id:Date.now(),
        name:req.body.name,
        price:req.body.price
    }

    db.products.push(product)

    res.status(201).json(product)
}
