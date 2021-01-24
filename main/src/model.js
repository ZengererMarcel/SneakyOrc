// load mysql module to operate with MySQL database
const mysql = require("mysql");

// first we will need a connection, use app-*.sql files to create database and table, and to insert first demo data
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "dbd_webtech",
});

var toDos = [];
var toDONumber;
var departmentId;
var statusId;
var actualToDo;
var params;

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
function save(employee) {

    var getParams = function (url) {
        params = {};
        var vars = url.split("&")
        toDONumber = vars.length - 6;
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');
            params[pair[0]] = decodeURIComponent(pair[1]);
        }
        return params;
    }

    params = getParams(employee);

    filterString("firstName");
    filterString("lastName");

    var email = params["firstName"] + "." + params["lastName"] + "@web.com";
    email = email.toLowerCase();

    return new Promise((resolve, reject) => {

        getDepartmentId(params["department"]).then(
            (Id) => {
                departmentId = Id[0].department_id;
            },
            (error) => {
                console.log(error);
            }
        )

        getStatusId(params["status"]).then(
            (Id) => {
                statusId = Id[0].status_id;
                insertEmployee(params["firstName"],
                    params["lastName"],
                    params["birthday"],
                    params["phoneNumber"],
                    email,
                    departmentId,
                    statusId).then(
                    (abc) => {
                        makeToDo();
                        resolve(abc);
                    },
                    (error) => {
                        console.log(error);
                        reject(error);
                    }
                )
            },
            (error) => {
                console.log(error);
            }
        )
    });
}

function makeToDo() {

    for (let i = 0; i < toDONumber; i++) {
        toDos[i] = params["toDo" + (i + 1)];
    }

    if (toDos[0].length != 0) {
        insertToDo().then(
            (resolve) => {
            },
            (error) => {
                console.log(error);
            }
        )

        insertPersonToDo().then(
            (abc) => {

            },
            (error) => {
                console.log(error);
            }
        )
    }
}

function insertEmployee(first, last, birth, phone, email, depart, status) {
    return new Promise((resolve, reject) => {
        const query =
            "INSERT INTO employee (first_name, last_name, birth_date, phone_number, email, department_id, status_id) VALUES (?,?,?,?,?,?,?)";
        connection.query(
            query,
            [
                first, last, birth, phone, email, depart, status,
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

function insertPersonToDo() {
    return new Promise((resolve, reject) => {
        let query =
            "INSERT INTO persontodo(employee_id, toDo_id) SELECT MAX(a.employee_id) AS employee_id, b.toDo_id FROM employee a, todo b WHERE b.toDo_name = ?";

        for (let i = 1; i < toDONumber; i++) {
            query = query + " OR b.toDo_name = ?";
        }

        query = query + "GROUP BY b.toDo_id";

        connection.query(
            query,
            toDos,
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

function insertToDo() {
    return new Promise((resolve, reject) => {
        let query =
            "INSERT IGNORE INTO todo (toDo_name) VALUES (?)";

        for(var i = 1; i <= toDONumber; i++){
            filterString("toDo" + i);
            toDos[i-1] = params["toDo" + i];
            console.log(toDos[i-1]);
        }


        for (let i = 1; i < toDONumber; i++) {
            query = query + ",(?)";
        }
        connection.query(
            query,
            toDos,
            (error, results) => {
                if (error) {
                    //console.log(error);
                    reject(error);
                } else {
                    resolve(results);
                }
            }
        );
    });
}

function getDepartmentId(department) {
    return new Promise((resolve, reject) => {
        const query = "SELECT department_id FROM departments WHERE department_name = ?";
        connection.query(query, [department,], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        })
    });
}

function getStatusId(status) {
    return new Promise((resolve, reject) => {
        const query = "SELECT status_id FROM status WHERE status_description = ?";
        connection.query(query, [status,], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        })
    });
}

function filterString(columnName){
    var word = params[columnName];

    var copyToDO = "";
    for (var i = 0; i < word.length; i++) {
        if (word[i] == "+") {
            copyToDO = copyToDO + " ";
        } else {
            copyToDO = copyToDO + word[i];
        }
    }

    params[columnName] = copyToDO;
}

module.exports = {
    getAll,
    save(url) {
        return save(url);
    },
};
