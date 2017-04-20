

const express = require('express')
const app = express();


app.get('/', (req, res) => {
  var string = "HOME"
  res.render('homepage1.hbs', {
    homeKey : string
  })
})

app.get('/inkling_girl', (req,res) => {
  var string = "woomy"
  res.render('woomy.hbs', {
    woomyKey : string
  })
})

app.get('/inkling_boy', (req,res) => {
  var string = "Ngyes"
  res.render('ngyes.hbs', {
    ngyesKey : string
  })
})

app.get('/splatoon2',(req, res) => {
  var string = "releasing in July!!!"
  res.render('release.hbs', {
    julyKey : string
  })
})

app.listen(3000, () => {
  console.log("listening at port 3000")
})

//Cannot GET /Splatoon
/*Whenever this happens this means that the browser sends a request to your
backend2.js and tries to find the route handler that contains the path : Splatoon
but it doesnt exist as one of your paths out of your routh handlers.
*/
