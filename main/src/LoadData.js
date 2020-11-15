// loads after window / page is fully loaded
window.addEventListener("load", function(){
    // we need a callback function, which will be loaded on ready state changes
    function ajaxCallback(){

        if(this.readyState == 4
            && this.status == 200
        ){
            var data = JSON.parse(this.responseText);
            const tableBody = document.querySelector("#table > tbody");

            for(var row in data.employees) {
                const tr = document.createElement("tr");

                for(var key in data.employees[row]){
                    const td = document.createElement("td");

                    if(key !== "toDo") {
                        td.textContent = data.employees[row][key];
                    }
                    else
                    {
                        var text = "";
                        if(data.employees[row][key] == null){
                            text = "-";
                        }
                        else {
                            for (var todo in data.employees[row][key]) {
                                if (todo != 0) {
                                    text += ", ";
                                }
                                text += data.employees[row][key][todo];
                            }
                        }
                        td.textContent = text;
                    }

                    if(row % 2 == 1){
                        td.className = "tableRowGrey";
                    }

                    tr.appendChild(td);
                }
                tableBody.appendChild(tr);
            }

        }


        if(this.readyState == 4
            && this.status == 404
        ){
            alert("File konnte nicht geladen werden oder ist ungültig");
        }
    }

    // load function to create first AJAX Request
    function loadData(){
        var ajaxObject = new XMLHttpRequest();
        var ajaxURL = "JSON/OverviewList.json";

        // trigger function on every change of readystate
        ajaxObject.onreadystatechange = ajaxCallback;

        // set true to load asynchronous
        ajaxObject.open("GET", ajaxURL, true);
        ajaxObject.send();
    }

    // this function will be called at the end of complete HTML and Script are parsed
    loadData();

});