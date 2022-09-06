var mysql = require('mysql');
// Database connection

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password: '',
    database: 'angular_db',
    port: 3306,
});

// check database connection

db.connect(err=>{
    if(err) {console.log(err,'dberr');}
    console.log('database connected');
    return db;
})

module.exports = db;