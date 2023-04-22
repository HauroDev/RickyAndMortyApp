const users = require('../utils/users')

const login = (req, res) => {
  const { email, password } = req.query
  const isUserFound = users.some(user => user.email === email && user.password === password)
  res.status(200).json({ access: isUserFound })
}


module.exports = login