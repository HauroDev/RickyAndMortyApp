const axios = require('axios')

// eslint-disable-next-line no-unused-vars
const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
// eslint-disable-next-line no-unused-vars
const API_KEY = '1cfff7d1d18d.0db22fcc014bfd364d71';

const getCharById = async (req, res) => {
  try {
    const { id } = req.params

    const { data } = await axios(`${URL_BASE}/${id}?key=${API_KEY}`)

    const char = {
      id: id,
      name: data.name,
      gender: data.gender,
      species: data.species,
      origin: data.origin,
      image: data.image,
      status: data.status
    }

    res.status(200).json(char)
  } catch (error) {
    const { error: message } = error.response.data
    error.response.status === 404
      ? res.status(404)
      : res.status(500)

    res.send(message)
  }
}

module.exports = getCharById