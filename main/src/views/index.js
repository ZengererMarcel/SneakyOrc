function getList(employee) {

    return `<!DOCTYPE html>
    <html lang="de">
        <head id="head">
            <title>Overview Mitarbeiter</title>
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1">

            <script src="../js/print.js" defer></script>

                <link rel="stylesheet" type="text/css" href="/css/stylesheet.css">
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
                    integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    rel="stylesheet">

                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">



                <link rel="apple-touch-icon" sizes="57x57"
                    href="https://www.fh-joanneum.at/content/themes/fhjoanneum/assets/images/favicons/apple-touch-icon-57x57.png">
                <link rel="apple-touch-icon" sizes="60x60"
                    href="https://www.fh-joanneum.at/content/themes/fhjoanneum/assets/images/favicons/apple-touch-icon-60x60.png">
                <link rel="apple-touch-icon" sizes="72x72"
                    href="https://www.fh-joanneum.at/content/themes/fhjoanneum/assets/images/favicons/apple-touch-icon-72x72.png">
                <link rel="apple-touch-icon" sizes="76x76"
                    href="https://www.fh-joanneum.at/content/themes/fhjoanneum/assets/images/favicons/apple-touch-icon-76x76.png">
                <link rel="apple-touch-icon" sizes="114x114" 
                    href="https://www.fh-joanneum.at/content/themes/fhjoanneum/assets/images/favicons/apple-touch-icon-114x114.png">
                <link rel="apple-touch-icon" sizes="120x120" 
                    href="https://www.fh-joanneum.at/content/themes/fhjoanneum/assets/images/favicons/apple-touch-icon-120x120.png">
                <link rel="apple-touch-icon" sizes="144x144" 
                    href="https://www.fh-joanneum.at/content/themes/fhjoanneum/assets/images/favicons/apple-touch-icon-144x144.png">
                <link rel="apple-touch-icon" sizes="152x152" 
                    href="https://www.fh-joanneum.at/content/themes/fhjoanneum/assets/images/favicons/apple-touch-icon-152x152.png">
                <link rel="apple-touch-icon" sizes="180x180" 
                    href="https://www.fh-joanneum.at/content/themes/fhjoanneum/assets/images/favicons/apple-touch-icon-180x180.png">
                <link rel="icon" type="image/png" 
                    href="https://www.fh-joanneum.at/content/themes/fhjoanneum/assets/images/favicons/favicon-192x192.png" 
                    sizes="192x192">
                <link rel="icon" type="image/png" 
                    href="https://www.fh-joanneum.at/content/themes/fhjoanneum/assets/images/favicons/favicon-16x16.png" 
                    sizes="16x16">
                <link rel="icon" type="image/png" 
                    href="https://www.fh-joanneum.at/content/themes/fhjoanneum/assets/images/favicons/favicon-32x32.png" 
                    sizes="32x32">
                <link rel="icon" type="image/png" 
                    href="https://www.fh-joanneum.at/content/themes/fhjoanneum/assets/images/favicons/favicon-96x96.png" 
                    sizes="96x96">
                <link rel="icon" type="image/png" 
                    href="https://www.fh-joanneum.at/content/themes/fhjoanneum/assets/images/favicons/favicon-160x160.png" 
                    sizes="160x160">


        </head>

        <body>

    <div class="container">


        <nav class="navbar navbar-expand-md navbar-light">
                    <a href="/" class="navbar-brand">
                        <img class="logo" id="logo" src="https://www.fh-joanneum.at/content/themes/fhjoanneum/assets/images/logo_fh_2_color.svg" width="170" height="100" alt="Logo-Fh-Joanneum">
                    </a>
                    
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a href="/" class="nav-link">Mitarbeiterliste</a>
                            </li>
                            <li class="nav-item">
                                <a href="/addData" class="nav-link">Mitarbeiter hinzufügen</a>
                            </li>
                        </ul>
                </nav>
    </div>

    <div class="breadcrumb bg-dark">
        <div class="container">
            <ul>
                <li><a href="/">FH JOANNEUM</a></li>
                <li><a href="/">Mitarbeiterliste</a></li>
            </ul>
        </div>
    </div>


            <div id="content">


                <div class="heading" id="heading">
                    <h1>Mitarbeiterliste</h1>
                </div>
                <br>
                
                    <div id="over">
                    <a href="" onclick="printData()" class="btn btn-default"  id="print-button"><i class="fa fa-print fa-2x"></i></a>
                    <a href="" onclick="saveAsPdf()" class="btn btn-default"  id="export-button"><i class="fa fa-file-pdf-o fa-2x"></i></a>
                    <br>
                        <div style="overflow-x:auto;">
                            <table id="table">
                            
                            
                                <thead>
                                    <tr>
                                        <th class="tableHead">Vorname</th>
                                        <th class="tableHead">Nachname</th>
                                        <th class="tableHead">Geburtsdatum</th>
                                        <th class="tableHead">Telefonnummer</th>
                                        <th class="tableHead">E-Mail</th>
                                        <th class="tableHead">Abteilung</th>
                                        <th class="tableHead">Status</th>
                                        <th class="tableHead">ToDo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                        ${employee.map(createRow).join('')}
                                </tbody>
                            </table>
                        </div>

                        <noscript>
                            <br>
                                <p>Für diese Website benötigen Sie JavaScript.</p>
                        </noscript>
                        
                    </div>
            </div>
            
        </body>
    </html>`;
}

function createRow(employee) {

    var d = new Date(employee.birth_date);
    var day = "";
    if (d.getDate().toString().length < 2) {
        day = "0";
    }

    var month = "";
    if ((d.getMonth() + 1).toString().length < 2) {
        month = "0";
    }
    var date = day + d.getDate() + "-" + month + (d.getMonth() + 1) + "-" + d.getFullYear();

    var phoneNumber = "0316 50040-" + employee.phone_number;

    var todo = (employee.toDo_name !== null) ? employee.toDo_name : "";

    return `<tr>
        <td>${employee.first_name}</td>
        <td>${employee.last_name}</td>
        <td>${date}</td>
        <td>${phoneNumber}</td>
        <td>${employee.email}</td>
        <td>${employee.department_name}</td>
        <td>${employee.status_description}</td>
        <td>${todo}</td>
    </tr>`;
}

module.exports = getList;