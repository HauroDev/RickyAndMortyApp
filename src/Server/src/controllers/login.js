const { User } = require('../db/DB_connection.js')

const login = async (req, res) => {
  try {
    const { email, password } = req.query

    if (!email.length || !password.length)
      return res.status(400).json({ message: 'Faltan datos' })

    const user = await User.findOne({ where: { email } })

    if (!user)
      return res.status(404).json({ message: 'Usuario no encontrado' })

    if (user.password !== password)
      return res.status(403).json('Contraseña incorrecta')
    
    res.json({ access: true })
  } catch (error) {
    const { message } = error
    res.status(500).json({ message })
  }
}

module.exports = login
