var toDoNumber = 1;

function addToDo(){
    if(toDoNumber != 5) {
        toDoNumber += 1;
        var divToDo = document.getElementById("divToDo");

        var label = document.createElement("label");
        label.className = "control-label col-sm-2";
        label.htmlFor = `toDo${toDoNumber}`;
        divToDo.appendChild(label);

        var div = document.createElement("div");
        div.className = "col-sm-10";

        var input = document.createElement("input");
        input.className = "form-control";
        input.id = `toDo${toDoNumber}`;
        input.placeholder = "Was muss gemacht werden?"
        input.name = `toDo${toDoNumber}`;
        div.appendChild(input);

        divToDo.appendChild(div);
    }
    else{
        alert("Maximale Anzahl an ToDos erreicht.\nEs sind nur 5 ToDos erlaubt.");
    }
}

function setEmail(){
    var email = document.getElementById("firstName").value + "." + document.getElementById("lastName").value + "@web.com";
    document.getElementById("email").value = email;
    console.log(email)
}