const express = require('express')
const app = express()


app.set('view engine', 'hbs')

var animalArray = [
  { name: 'cats', favorite: true },
  { name: 'dogs', favorite: true },
  { name: 'tree frogs', favorite: true },
  { name: 'earth worms', favorite: false },
  { name: 'guinea pigs', favorite: true },
];

app.get('/fav_animals', (req, res) => {
  res.render('animals.hbs', {
    animalKey : animalArray
  })
})

app.listen(3000, () => {
  console.log('listening at port 3000')
})
