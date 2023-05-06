const { Favorite } = require('../db/DB_connection.js')

const deleteFav = async (req, res) => {
  try {
    const { id } = req.params
    if (!id) return res.json({ message: 'Falta datos' })

    const charFav = await Favorite.findByPk(id)
    await charFav.destroy()

    const charFavs = await Favorite.findAll()

    res.json(charFavs)
  } catch (error) {
    const { message } = error
    res.status(500).json({ message })
  }
}
module.exports = deleteFav
