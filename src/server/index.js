var express = require('express');

var path = require('path');

var app = new express();

app.use(express.static(path.join(__dirname, '../../public/')));

app.listen(3031,()=>{
   console.log("Listening at 3031");
});