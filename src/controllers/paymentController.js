exports.createPayment = (req,res)=>{
    const {orderId, amount} = req.body

    res.status(201).json({
        message:"Payment successful",
        orderId,
        amount,
        status:"paid"
    })
}
