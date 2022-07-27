var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "Snisken",
    password: "123456789Jd!",

});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});