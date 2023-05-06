const { isPropertys } = require('../utils/validate.js')

const { Favorite } = require('../db/DB_connection.js')

const postFav = async (req, res) => {
  try {
    const atributtes = [
      'name',
      'origin',
      'status',
      'image',
      'species',
      'gender'
    ]

    if (!isPropertys(atributtes, req.body))
      return res.status(401).json({ message: 'Faltan Datos' })

    await Favorite.create({ ...req.body }) // no se si es necesario usar un spreen operator

    const allFavs = await Favorite.findAll()

    res.json(allFavs)
  } catch (error) {
    const { message } = error
    res.status(500).json({ message })
  }
}
module.exports = postFav