//I know it is unsual to have multiple backend files as i do here but this is soley
//for the sake of readablilty. im not fusing all of these examples into one giant backend
//cause personally it looks bad and im not making a whole new set up for every program with nodemodules
//and new JSON file because my finders downloads page is already taking too long to scroll.


//Make an express program that eill display "Hello, world" at the root URL:/
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.render('hello.hbs', {
    helloKey : "Hello World"
  })
})

app.listen(3000, () => {
  console.log("listening at port 3000")
})
