const { User } = require('../db/DB_connection.js')

const postUser = async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email.length || !password.length)
      return res.status(404).json({ message: 'Faltan datos' })

    const [user, created] = User.findOrCreate({
      where: { email, password }
    })

    if (!created)
      return res.status(404).json({ message: 'El usuario ya se registro' })

    res.json(user)
  } catch (error) {
    const { message } = error
    res.status(500).json({ message })
  }
}
export default postUser
