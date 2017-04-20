

const express = require('express')
const app = express();


app.get('/', (req, res) => {
  res.send("HOME")})

app.get('/inkling_girl', (req,res) => {
  res.send("Woomy!");
})

app.get('/inkling_boy', (req,res) => {
  res.send("Ngyes!");
})

app.get('/splatoon2',(req, res) => {
  res.send("releasing in July!!!")
})
app.listen(3000, () => {
  console.log("listening at port 3000")
})

//Cannot GET /Splatoon
/*Whenever this happens this means that the browser sends a request to your
backend2.js and tries to find the route handler that contains the path : Splatoon
but it doesnt exist as one of your paths out of your routh handlers.
*/
