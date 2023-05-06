const server = require('./app.js')
const { conn } = require('./db/DB_connection.js')

const PORT = 3001

server.listen(PORT, async () => {
  try {
    await conn.sync()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }

  console.log('Server raised in port: ' + PORT)
})
