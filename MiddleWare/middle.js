/*
Logging middleware

Write an express middleware that will print (console.log) out the request method and the
request path of all requests in the app, and delegate to the regular route handler.

Logging middleware 2

Write an express middleware that will log the same information as above, but in a
log file. Log the information using fs or fs-promise.
*/

const promise = require('bluebird');
const express = require('express');
const bodyParser = require('body-parser');
const fsp = require('fs-promise')
const app = express()
let fileName = 'log.txt';

//middleware executed for any request, stealthily giving updates on background
app.use(function myMiddleWare(req, resp, next){
  console.log("method: "+req.method, "path:"+req.path);
  next();
});

app.use(function myMiddleWare(req, resp, next){
  let md = req.method
  let pt = req.path
  let content = `the method is ${md}\nthe path is ${pt}\n\n`
  fsp.appendFile(fileName, content)
  next();
})

app.use(express.static('public'));
app.use(bodyParser.json())

app.get('/',function(req,resp){
  resp.render('page1.hbs')
  console.log('page 1')
})

app.listen(3000,function(){
  console.log("listening at port 3000.");
})
