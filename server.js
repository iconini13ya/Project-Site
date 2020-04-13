
var express = require('express');
var mysql = require('mysql2');

var app = express();
app.use(express.static('Main_folder'));
///
///	Create connection to MySQL database server.
/// 
function getMySQLConnection() {
	return mysql.createConnection({
	  host: "localhost",
    user: "root",
    database: "test",
    password: "VjSa1Der"
	});
}

///
/// Use pug as templating engine. Pug is renamed jade.
///
app.set('view engine', 'pug');

///
/// HTTP Method	: GET
/// Endpoint 	: /person
/// 
/// To get collection of person saved in MySQL database.
///
app.get('/', function(req, res) {
  
	// Connect to MySQL database.
	var connection = getMySQLConnection();
	connection.connect();
	// Do the query to get data.
	connection.query('SELECT * FROM test.posts;', function(error, result, fields){
            if (error){console.log(error);}
            else {
              // const image=result
              // // var bufferBase64 = new Buffer( image[0].img, 'binary' ).toString('base64');
              // // var imgsrc="data:image/jpeg;" + bufferBase64;
              // // console.log(imgsrc);
              res.render("index", {toRenderPosts:result}); 
            }
    
          });
  // res.render("index", {})       
	// Close the MySQL connection
	connection.end();
});
//
app.listen(3000, function () {
  console.log('listening on port', 3000);
});
// var express= require("express");
// var app= express();
// app.use(express.static('Main_folder'));
// const mysql = require("mysql2");
// // var MongoClient=require("mongodb").MongoClient;
// // var db;
// const connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     database: "test",
//     password: "VjSa1Der"
//   });
//   app.get('/',function(req,res){
//    res.sendfile('Main_folder/index.html');
// });

//   connection.connect(function(err){
//     if (err) {
//       return console.error("Ошибка: " + err.message);
//     }
//     else{
//       console.log("Подключение к серверу MySQL успешно установлено");
//       connection.query('SELECT img FROM pd.posts where idposts=1;', function(error, result, fields){
//         console.log(result)
       
//       });
//     }
//  });


// app.listen(3000,function(){console.log("Server is Started")});

 // URL.createObjectURL(result);
        // var Myimg= new Blob(result,{type: 'text/plain'});
        // console.log(Myimg);
        // let reader = new FileReader();
        // reader.readAsDataURL(Myimg);
        // reader.onload = function() {
        //   console.log(document.getElementById("imagge").href) = reader.result; // url с данными
        // };
        // document.getElementById("imagge").href=Myimg;
        // var url = window.URL || window.webkitURL;
        // var imageSrc = url.createObjectURL(result);
        // console.log(imageSrc);
        // document.getElementById("imagge").src=imageSrc;

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