var express= require("express");
var app= express();
app.use(express.static('Main_folder'));
const mysql = require("mysql2");
// var MongoClient=require("mongodb").MongoClient;
// var db;
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "test",
    password: "VjSa1Der"
  });

  

  connection.connect(function(err){
    if (err) {
      return console.error("Ошибка: " + err.message);
    }
    else{
      console.log("Подключение к серверу MySQL успешно установлено");
      connection.query('SELECT * FROM users', function(error, result, fields){
        console.log(result);
        });
    }
 });

app.get('/',function(req,res){
    res.sendfile('Main_folder/index.html');
});

app.listen(3000,function(){console.log("Server is Started")});

// app.post("/WorkPercent",function(req,res){
//     console.log(req.body);
//     var Precent={
//         CurrentPercent:req.body 
//     };
//     db.collection("Precent").insertOne(Precent, function(err,result){
//         if (err){
//              console.log(err);
//              console.log(Percent);
//              return res.sendStatus(500);
//         }
//         res.send(Percent);
//     });
// });

// MongoClient.connect("mongodb://localhost:27017/PDSite", function(err,database){
//     if (err){
//        return console.log(err);
//     }
//     db=database;
//     app.listen(3000,function(){console.log("Server is Started")});
// });