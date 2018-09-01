var express = require('express');
var app = express();


app.listen(3000, function(){
  console.log('server is listening on port 3000. Allons-y!')
})


app.get("/", function(req, res){
  res.send("Yay Node Girls!");
})

app.get("/node", function(req, res){
  res.send("hello?");
})

app.get("/girls", function(req, res){
  res.send("Who run the world?");
})
