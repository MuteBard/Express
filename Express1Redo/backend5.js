const express = require('express')
const app = express()

//this must be before all of your route handlers
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.send("redirecting you to the proper link")
})

// /greet/carl?age=24
app.get('/greet/:name', (req, res) => {
  year = 2017 - (req.query.age || 50)
  name = req.params.name

  res.render('home1.hbs', {
    year : year,
    name : name
  })
})

app.listen(3000, () => {
  console.log("listening at port 3000")
})
