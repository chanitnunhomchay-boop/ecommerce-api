const jwt = require("jsonwebtoken")
const db = require("../data/db")

exports.register = (req,res)=>{
    const {username,password,role} = req.body

    const user = {id:Date.now(),username,password,role:role||"user"}

    db.users.push(user)

    res.status(201).json(user)
}

exports.login = (req,res)=>{
    const {username,password} = req.body

    const user = db.users.find(u=>u.username===username && u.password===password)

    if(!user) return res.status(401).json({message:"Invalid credentials"})

    const token = jwt.sign(
        {id:user.id,role:user.role},
        process.env.JWT_SECRET,
        {expiresIn:"1h"}
    )

    res.json({token})
}
