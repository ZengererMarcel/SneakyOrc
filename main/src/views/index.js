function getList(employee) {

    return `<!DOCTYPE html>
    <html lang="de">
        <head>
            <title>Overview Mitarbeiter</title>
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1">

                <link rel="stylesheet" type="text/css" href="/css/stylesheet.css">

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


            <nav class="navbar">

                <img class="logo"
                     src="https://www.fh-joanneum.at/content/themes/fhjoanneum/assets/images/logo_fh_2_color.svg"
                     alt="FH JOANNEUM Logo" title="FH JOANNEUM Logo">
                    <ul class="nav-first-floor">

                        <li class="navmenu">
                            <a href="/">Overview</a>
                        </li>

                        <li class="navmenu">
                            <a href="/addData" class="">
                                Mitarbeiter hinzufügen
                            </a>

                        </li>
                    </ul>
            </nav>


            <div class="breadcrumbbar">

                <p>FH JOANNEUM > Overview</p>


            </div>


            <div id="content">


                <div class="heading">
                    <h1>Mitarbeiterliste</h1>
                </div>
                <br>
                    <div class="over">
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
    if(d.getDate().toString().length<2){
        day = "0";
    }

    var month = "";
    if((d.getMonth() + 1).toString().length<2){
        month = "0";
    }
    var date =  day + d.getDate() + "-" + month + (d.getMonth()+1) + "-" + d.getFullYear();

    var phoneNumber = "0316 50040-" + employee.phone_number;

    var todo = (employee.toDo_name != null) ? employee.toDo_name : "";

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