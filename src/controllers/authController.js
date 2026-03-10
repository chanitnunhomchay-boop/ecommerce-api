const jwt = require("jsonwebtoken")

exports.login = (req, res) => {

  const user = {
    id: 1,
    username: req.body.username,
    role: "user"
  }

  const token = jwt.sign(user, "secretkey")

  res.json({ token })

}
