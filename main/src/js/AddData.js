// load mysql module to operate with MySQL database
const mysql = require("mysql");
const http = require("http");

// first we will need a connection, use app-*.sql files to create database and table, and to insert first demo data
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test',
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");

});

const server = http.createServer((request, response));

server.listen(8080, () =>
    console.log(
        "Server and Milestones Overview is listening to http://localhost:8080"
    )
);




