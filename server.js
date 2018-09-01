var fs = require('fs');
var express = require('express');
var app = express();
var formidable = require('express-formidable');
//app.use(express.static("public"));

//app.use(formidable());
app.use(express.static("public"), formidable());

app.listen(3000, function(){
  console.log('server is listening on port 3000. Allons-y!')
})



app.post("/create-post", function(req, res){
  var blogText = req.fields
  readAndWrite(blogText)
})

function readAndWrite(blogText){
  fs.readFile(__dirname + '/data/posts.json', function(error, file){
    var parsedFile = JSON.parse(file)
    var timestamp = Date.now()
    parsedFile[timestamp] = blogText['blogpost']
    var textToWrite = JSON.stringify(parsedFile, null, 4)
    fs.writeFile(__dirname + '/data/posts.json', textToWrite, function(error){
      console.log(parsedFile);
    })
  });

}
// fs.readFile(__dirname + '/data/posts.json', function(error, file){
//   var parsedFile = JSON.parse(file)
//   console.log(parsedFile);
// });
