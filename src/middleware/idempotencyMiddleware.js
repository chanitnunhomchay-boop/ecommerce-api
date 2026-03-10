const store = new Map()

const idempotency = (req,res,next)=>{
    const key = req.headers["idempotency-key"]

    if(!key){
        return next()
    }

    if(store.has(key)){
        return res.status(409).json({
            message:"Duplicate request"
        })
    }

    store.set(key,true)
    next()
}

module.exports = idempotency
