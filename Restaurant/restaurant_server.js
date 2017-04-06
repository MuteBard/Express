const express = require('express');
const Promise = require('bluebird');
const pgp = require('pg-promise')({
  promiseLib: Promise
});
const bodyParser = require('body-parser');
const dbConfig = require('./db-config')
const db = pgp(dbConfig);
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'))

//HOME
app.get('/',function(req,resp){
  resp.render('search.hbs');
});

//SEARCH
app.get('/search', function(req, resp) {
  let term = req.query.searchTerm;
  console.log('Term:',term);
  db.any(
    `select * from restaurant
    where restaurant.name ilike '%${term}%'
    `)
    .then(function(resultsArray) {
      console.log('results', resultsArray)
      resp.render('results.hbs', {
        results: resultsArray
      });
    })
    .catch(next){
    });
});
//RESTAURANT
app.get('/restaurant/:id', function(req, resp, next){
  let id = req.params.id;
  db.any(`
    select * from restuarant
    `)

  console.log("this is my id"+id)
  resp.render('restaurant.hbs'){
    id :
  }
})

//currently, my web page takes in a parameter and displays the restuarant that has a similar content to its name
//then it shows you the restaurant information

app.listen(3000, function() {
  console.log('Listening on port 3000.');
});
