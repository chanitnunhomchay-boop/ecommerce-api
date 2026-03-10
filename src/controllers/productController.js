let products = []

exports.getProducts = (req, res) => {
  res.json(products)
}

exports.createProduct = (req, res) => {

  const product = {
    id: Date.now(),
    name: req.body.name,
    price: req.body.price
  }

  products.push(product)

  res.status(201).json(product)

}
