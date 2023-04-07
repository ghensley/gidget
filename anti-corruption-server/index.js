const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
const port = 3003

app.get('/pv-data', (req, res) => {
  res.send({
    pvValue: "pv value from anti-corruption"
  })
})

app.listen(port, () => {
  console.log(`Anti Corruption Server listening on port ${port}`)
})
