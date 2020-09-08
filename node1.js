var name;
var mysql = require('mysql');  
var con = mysql.createConnection({  
host: "localhost",  
user: "root",  
password: "pass",  
database: "store"  
});  
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
 window.document.getElementById('bhanu').onsubmit = function() { 
  name=document.getElementById('uname').value;

}; 
  var sql = "INSERT INTO user  (username) VALUES ("+mysql.escape(name)+")";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});
