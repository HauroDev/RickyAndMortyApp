const app = require('../src/app')
const session = require('supertest')
const users = require('../src/utils/users')
const agent = session(app)

const chars = [
  { id: '1', name: 'rick' },
  { id: '2', name: 'morty' },
  { id: '3', name: 'sumer' },
  { id: '4', name: 'beth' }
]

describe('Test de RUTAS', () => {
  describe('GET /rickandmorty/character/:id', () => {
    it('Responde con status: 200', async () => {
      await agent.get('/rickandmorty/character/1').expect(200)
    })
    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {

      const { body } = await agent.get('/rickandmorty/character/1')

      const props = ["id", "name", "species", "gender", "status", "origin", "image"]

      for (const property of props) {
        expect(body).toHaveProperty(property)
      }
    })

    it('Si hay un error responde con status: 500', async () => {
      await agent.get('/rickandmorty/character/10a').expect(500)
    })
  })

  describe('GET /rickandmorty/login', () => {
    const { email, password } = users[0]
    it('Validacion de credenciales: acceso aceptado', async () => {
      const { body: data } = await agent.get(`/rickandmorty/login?email=${email}&password=${password}`)

      expect(data).toHaveProperty('access', true)
    })
    it('Validacion de credenciales: acceso denegado', async () => {
      const { body: data } = await agent.get(`/rickandmorty/login?email=${email}&password=soyfelixia`)

      expect(data).toHaveProperty('access', false)
    })
  })

  describe('POST /rickandmorty/fav', () => {
    it('Devuelve un array con el personaje agregado', async () => {
      const { body } = await agent.post('/rickandmorty/fav').send(chars[0])
      expect(Array.isArray(body)).toBeTruthy()
      expect(body).toEqual([chars[0]])
    })

    it('Devuelve un array con los personajes agregados anteriormente', async () => {
      await agent.post('/rickandmorty/fav').send(chars[1])
      const { body } = await agent.post('/rickandmorty/fav').send(chars[2])
      expect(body).toEqual([chars[0],chars[1], chars[2]])
    })
  })
  describe('DELETE /rickandmorty/fav/:id', () => {
    it('EL ID no es encontrado', async () => {
      const response = await agent.delete('/rickandmorty/fav/4')
      expect(response.statusCode).toBe(200)
      expect(response.body).toEqual([chars[0],chars[1], chars[2]])
    })
    it('EL ID es encontrado', async () => {
      const response = await agent.delete('/rickandmorty/fav/1')
      expect(response.statusCode).toBe(200)
      expect(response.body).toEqual([chars[1], chars[2]])
    })
  })
})