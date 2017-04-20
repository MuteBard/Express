//Query Parameters

const express = require('express')
const app = express()


///year?age=32
app.get('/year' , (req, res) => {
  var year = 2017 - (req.query.age || 40)
  res.send(`you were born in ${year}`)
})

app.listen(3000, () => {
  console.log("listening at port 3000")
})
