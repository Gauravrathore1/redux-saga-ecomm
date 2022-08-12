
const express = require('express')
const app = express()
const port = 3000

app.post('/about', (req, res) => {
  res.send('gaurav')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
