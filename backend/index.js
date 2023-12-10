console.log('Hola Mundo !!! ')
const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors());

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/ping', (req, res) => {
  res.status(200).json( 
      {
          message: 'pong'
      }
  )
})

app.listen(3000)