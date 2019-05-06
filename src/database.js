const mysql = require("mysql");

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'vendimia',
    socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
    port: '8889'
})

mysqlConnection.connect(function (err){
    if(err){
        console.log(err);
        return;
    }else{
        console.log("La base de datos esta conectada")
    }
});

module.exports = mysqlConnection;