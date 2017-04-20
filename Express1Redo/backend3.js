//Route Parameters

const express = require('express')
const app = express()

app.get('/', (req,res) => {
  var uwu = "uwu"
  res.render('homepage2.hbs', {
    uwuKey : uwu
  })
})

app.get('/hello', (req,res) => {
  var hello = "henlo"
  res.render('hello1.hbs' , {
    helloKey : hello
  })
})

//http://localhost:3000/hello/carl
//mispell params and it will serve as your string instead x.x
app.get('/hello/:name', (req, res) => {
  var name = req.params.name || 'world'
  res.render('helloName.hbs', {
    hiyaPerson : `Hello ${name}! How are you?`
  })
})

app.listen(3000, () => {
  console.log('listening at port 3000')
})

var name = false || 'world'
console.log(name)
var name = 'Hello' || 'world'
console.log(name)
var name = 'Hello' && 'world'
console.log(name)
var name = 1 || 2 || 3
console.log(name)
var name = undefined || 2 || 3
console.log(name)
var name = null || 2 || 3
console.log(name)
/*
world
Hello
world
1
2
2
*/
