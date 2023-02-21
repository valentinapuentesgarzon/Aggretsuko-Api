const express = require('express')
const app = express()
const port = 3020

app.get('/', (req, res) => {
  res.send('Hola Val')
})

app.listen(port, ()=> {
  console.log('Mi puerto es'+ port)
})

