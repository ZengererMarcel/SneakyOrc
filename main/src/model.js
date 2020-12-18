// load mysql module to operate with MySQL database
const mysql = require("mysql");

// first we will need a connection, use app-*.sql files to create database and table, and to insert first demo data
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test",
});

// initially connect to database
connection.connect();

// we are using Promise object, because of asynchronous handling of node.js
// https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Promise
// if query was successful, .then() we will use the results for later operations, take a look where model.getAll() is used

// get all milestone
function getAll() {
  // createa new Promise object, which have to major status
  // resolve -> success -> we will get result set(s)
  // reject  -> error   -> we are currently log errors in console and reject this error
  return new Promise((resolve, reject) => {
    // create query

    const query = "SELECT * FROM employee_disp";
    // do query, and wait for resolve or reject
    connection.query(query, (error, results) => {
      if (error) {
        console.log(error);
        return reject(error);

        // there's usually no error, so we are able to use result (set)
      } else {
        resolve(results);
      }
    });
  });
}

// insert a new milestone
function insert(employee) {

      var getParams = function (url) {
        var params = {};
          var vars = url.split("&")
          for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');
            params[pair[0]] = decodeURIComponent(pair[1]);
          }
          return params;
      }

      var params = getParams(employee);

  return new Promise((resolve, reject) => {
    const query =
      "INSERT INTO employee (first_name, last_name, birth_date, phone_number, email, department_name) VALUES (?,?,?,?,?,?)";
    connection.query(
      query,
      [
        params["firstName"],
        params["lastName"],
        params["birthday"],
        params["phone_number"],
        params["email"],
        params["department"],
      ],
      (error, results) => {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          resolve(results);
        }
      }
    );
  });
}


module.exports = {
  getAll,

  save(url) {
      insert(url);
      getAll();
  },
};
