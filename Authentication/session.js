/*
Session

Write an express application - start one from scratch - that uses express-session.
There are two pages: /ask, and /greet. The ask page asks the user to put in a name,
and the greet page displays the greeting showing their name. You'll need to:

Create an ask page that displays a form which submits to a submit handler, say /submit_name.
The /submit_name handler will retrieve the name and save it into the session as a session variable.
The greet page will display a greeting to the user's name as fetched from the session.
User Authentication

Implement user authentication for the restaurant reviewer application. To do this:

Create a password column in your reviewer table - you will store
plain passwords - for now, give each existing reviewer a password.
Create a login page (containing username and password fields) and render
the form at the /login URL.
Create a handler to handl/Users/Banette/Desktop/FSWD/DigitalCrafts/Week9/Day43er that matches the submitted username and then verify
the password. If the username and password both match, it will
create a session variable to remember the fact that a user has logged in.
redirect to the home page.
In the top right hand corner of each page, display a greeting to the current logged in user.
Create a custom authentication middleware to only allow logged in users to submit
reviews and create restaurants in the database. Do this by:
installing the authentication middleware before the route handler for submitting
reviews.
*/

/*
npm install bluebird
npm install express
npm install express-sessions
npm install body-parser
*/

const promise = require('bluebird')
const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')

const app = express()




app.use(session({
  secret: 'jkdfhkdljsfhhfhkhjfdghkjfsdgkhj',
  cookie: {
    maxAge: 6000000000000000
  }
}));

//#1
app.use(function(req, resp, next){
  resp.locals.session = req.session;
  next();
})




app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));


//#2
app.get('/', function(req, resp){
  resp.render('ask.hbs', {
    name: req.session.name
  })
});

app.post('/ask', function(req, resp){
    let name = req.body.askedTerm;
    req.session.name = name;
    resp.redirect('/');
});

//#3
app.use(function authentication(req,resp,next){
  console.log(req.session.name)
  if((req.session.name).toLowerCase() == 'carl'){
    next();
  }else{
    console.log('rejected')
    resp.render('reject.hbs')
  }
});

//#4
app.get('/greet', function(req, resp){
  let term  = req.session.name;
  resp.render('greet.hbs',{
    name: term
  })
});




app.listen(3000,function(){
  console.log('Listening at port 3000!')
});
