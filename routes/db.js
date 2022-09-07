var mysql = require('mysql');
// Database connection

// const db = mysql.createConnection({
//     host:'mean-test1.cjibinp9bsxg.ap-south-1.rds.amazonaws.com',
//     user:'admindb',
//     password: 'Admin1202',
//     database: 'mean-test1',
//     port: 3306,
// });

const db = mysql.createConnection({
    host:'keabuilderdb.cjibinp9bsxg.ap-south-1.rds.amazonaws.com',
    user:'keaadmin',
    password: 'A^uUI09FeMe',
    database: 'angular_db',
    port: 3306,
});

// const db = mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password: '',
//     database: 'angular_db',
//     port: 3306,
// });

// check database connection

db.connect(err=>{
    if(err) {console.log(err,'dberr');}
    console.log('database connected');
    return db;
})

module.exports = db;