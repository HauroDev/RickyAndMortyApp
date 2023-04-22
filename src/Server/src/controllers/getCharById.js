const axios = require("axios")

const URL = 'https://rickandmortyapi.com/api/character/'

const getCharById = (req, res) => {
  const { id } = req.params
  if (id)
    axios.get(`${URL}${id}`)
      .then(({ data }, error) => {
        if (error)
          res.status(404).send(error)
        const char = {
          id: id,
          name: data.name,
          gender: data.gender,
          species: data.species,
          origin: data.origin,
          image: data.image,
          status: data.status
        }
        res.json(char)
      }).catch((error) => {
        res.status(500).send(error.message)
      })

}

module.exports = getCharById