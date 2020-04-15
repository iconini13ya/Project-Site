
var express = require('express');
var mysql = require('mysql2');
var fs = require('fs');
var app = express();
var Auth=true;
var badLogin=true;
var usersMass;
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
            let buff = new Buffer.from(result[0].img, 'base64');
                          
                          

                          // console.log('Base64 image data converted to file: stack-abuse-logo-out.png');
              // var blob = new Blob([result[0].img])
              // let buffer = Buffer.from(result[0].img);
              // let arraybuffer = Uint8Array.from(buffer).buffer;
              // Mycanvas = new Canvas
              // console.log(imgsrc);
              // let MyUrl = new URL.createObjectURL(arraybuffer);
              // console.log(MyUrl);
              // var imageBuffer = result.file.buffer;
              // var imageName = 'public/images/map.png';

              // fs.createWriteStream(imageName).write(imageBuffer);
              // console.log(imageUrl);
              // const image=result
            //   let base64Image = result[0].img.split(';base64,').pop();
            //   fs.writeFile('image.png', base64Image, {encoding: 'base64'}, function(err) {
            //     console.log('File created');
            // });
            // var base64Data = result[0].img.replace(/^data:image\/png;base64,/, "");

            // require("fs").writeFile("out.png", base64Data, 'base64', function(err) {
            // console.log(err);
            // });
                // var bufferBase64 = new Buffer.from( result[0].img, 'binary' ).toString('base64');
                // require("fs").writeFile("out.png", bufferBase64, "binary", function(err) {
                //   console.log(err); // writes out file without error, but it's not a valid image
                // });
              // console.log(imgsrc);
              res.render("index", {toRenderPosts:result, Myimg64:buff, Auth}); 
            }
    
          });
  // res.render("index", {})       
	// Close the MySQL connection
	connection.end();
});
//

app.get("/Enter",function(req,res){
  res.render("enter",{badLogin})
})

app.get("/loginin",function(req,res){
  var connection = getMySQLConnection();
	connection.connect();
  connection.query("SELECT * FROM test.users WHERE login = "+`"`+req.query.login.toString()+`"`+" AND password = "+`"`+ req.query.password.toString()+`"`+";", function(error, result, fields){
    usersMass=result;
  if (result[0]==null){
      badLogin=false;
      res.render("enter",{badLogin})
    }
  });

connection.end();
var connection2 = getMySQLConnection();
connection2.connect();
Auth=false;
connection2.query('SELECT * FROM test.posts;', function(error, resultposts, fields){
if (error){console.log(error);}
else {
    res.render("loggined",{toRenderPosts:resultposts, Auth, User:usersMass});
    }
    
      });
      connection2.end();
});

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