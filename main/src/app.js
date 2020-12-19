//HTTP module allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).
const http = require("http");

// initialize model object
let model = require("./model"); // will export several functions, in this case a complete database model

// init helper module with some useful functions
const helper = require("./helper");
const send = helper.send;
const sendFile = helper.sendFile;
const redirect = helper.redirect;

// creates Overview List with HTML
const getList = require("./views/index");
const getAddData = require("./views/adddata");

// load additional module formidable, A Node.js module for parsing form data
// more details at https://www.npmjs.com/package/formidable
const formidable = require("formidable");

// entry point for each Request to create matching response
//Any node web server application will at some point have to create a web server object. This is done by using [createServer]
const server = http.createServer((request, response) => {
    const parts = request.url.split("/");

    if (request.url === "/css/stylesheet.css") {
        sendFile(response, request, "utf8");
    }
    else if(request.url === "/js/AddToDo.js"){
        sendFile(response, request, "utf8");
    }
    else if(request.url === "/JSON/OverviewList.json"){
        sendFile(response, request, "utf8");
    }
    else if(parts.includes("addData")) {
        send(response, getAddData());
    }
    else if(request.url.includes("index")){
        model.save(request.url.split("?")[1]).then(
            (a) => {
                model.getAll().then(
                    (employee) => {
                        send(response, getList(employee));
                    },
                    //(error) => send(response, error)
                    (error) => {
                        send(response, getError(error));
                    }
                )
                    .catch((error) => {
                        console.error("error ", error);
                    });
            },
            (error) => {
                console.log(error);
            }
    )
    }
    else
    {
        model
            .getAll()
            .then(
                (employee) => {
                    send(response, getList(employee));
                },
                //(error) => send(response, error)
                (error) => {
                    send(response, getError(error));
                }
            )
            .catch((error) => {
                console.error("error ", error);
            });
    }
});

server.listen(8080, () =>
    console.log(
        "Server and OverviewList is listening to http://localhost:8080"
    )
);