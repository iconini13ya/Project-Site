var express= require("express");

var app= express();
app.use(express.static('Main_folder'));

app.get('/',function(req,res){
    res.sendfile('Main_folder/index.html');
});

app.listen(3000,function(){console.log("Start Server")});