window.addEventListener("load", function() {
    function addNewEmployee() {
        if (window.location.href.includes("&")) {
            var getParams = function (url) {
                var params = {};
                var parser = document.createElement('a');
                parser.href = url;
                var query = parser.search.substring(1);
                if (query.includes('&')) {
                    var vars = query.split('&');
                    for (var i = 0; i < vars.length; i++) {
                        var pair = vars[i].split('=');
                        params[pair[0]] = decodeURIComponent(pair[1]);
                    }
                    return params;
                } else {

                    return null;
                }
            }
            var params = getParams(window.location.href);
            console.log(params["firstName"]);

        }
    }

    addNewEmployee();
});