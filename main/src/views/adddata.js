function getAddData() {


    return `<!DOCTYPE html>
<html lang="de">
<head>
    <title>Mitarbeiter hinzufügen</title>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">


    <link rel="stylesheet" type="text/css" href="../css/stylesheet.css">
    <script src="../js/AddToDo.js" defer></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet">

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
                <img class="logo" src="https://www.fh-joanneum.at/content/themes/fhjoanneum/assets/images/logo_fh_2_color.svg" width="170" height="100" alt="Logo-Fh-Joanneum">
            </a>
            
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a href="/" class="nav-link">Mitarbeiterliste</a>
                    </li>
                    <li class="nav-item active">
                        <a href="/addData" class="nav-link">Mitarbeiter hinzufügen</a>
                    </li>
                </ul>
        </nav>
    </div>

    <div class="breadcrumb bg-dark">
        <div class="container">
            <ul>
                <li><a href="/">FH JOANNEUM</a></li>
                <li><a href="/addData">Mitarbeiter hinzufügen</a></li>
            </ul>
        </div>
    </div>


<div id="content">
    <div class="heading">
        <h1>Neuen Mitarbeiter hinzufügen</h1>
    </div>
    <br>

    <div class="container">
        <form class="form-horizontal" action="index.js">

            <div class="form-group">
                <label class="control-label col-sm-12 col-12" for="firstName">Vorname</label>
                <div class="col-sm-12 col-12">
                    <input type="text" class="form-control" id="firstName" placeholder="Vorname eingeben"
                           name="firstName" onkeyup="setEmail()" required>
                </div>
            </div>

            <div class="form-group">
                <label class="control-label col-sm-12 col-12" for="lastName">Nachname</label>
                <div class="col-sm-12 col-12">
                    <input type="text" class="form-control" id="lastName" placeholder="Nachname eingeben"
                           name="lastName" onkeyup="setEmail()" required>
                </div>
            </div>


            <div class="form-group">
                <label class="control-label col-sm-12 col-12" for="birthday">Geburtsdatum</label>
                <div class="col-sm-12 col-12">
                    <input type="date" class="form-control" id="birthday" name="birthday" required>
                </div>
            </div>


            <div class="form-group">
                <label class="control-label col-sm-12 col-12" for="phoneNumber">Durchwahl</label>
                <div class="col-sm-12 col-12">
                    <div class="input-group">
                        <span class="input-group-addon col-sm-3 col-5">0316 50040-</span>
                        <input id="phoneNumber" type="number" class="form-control" name="phoneNumber"
                               placeholder="Durchwahl eingeben" required>
                    </div>
                </div>
            </div>

            <div class="form-group">
                <label class="control-label col-sm-12 col-12" for="email">Email</label>
                <div class="col-sm-12 col-12">
                    <input class="form-control" id="email" name="email" type="text" placeholder="Email wird automatisch generiert"
                           disabled>
                </div>
            </div>

            <div class="form-group">
                <label class="control-label col-sm-12 col-12" for="department">Abteilung</label>
                <div class="col-sm-12 col-12">

                    <select class="form-control" id="department" name="department" required>
                        <option value="" disabled selected>Abteilung auswählen</option>
                        <option value="Sekretariat">Sekretariat</option>
                        <option value="Einkauf">Einkauf</option>
                        <option value="Verkauf">Verkauf</option>
                        <option value="IT">IT</option>
                        <option value="CEO">CEO</option>
                    </select>
                </div>
            </div>


            <div class="form-group">
                <label class="control-label col-sm-12 col-12" >Status</label>
                <div class="col-sm-12 col-12">

                    <label class="radio-inline"><input type="radio" id="status-present" name="status" value="Anwesend" checked>  anwesend</label>
                    <label class="radio-inline"><input type="radio" id="status-homeoffice" name="status" value="Homeoffice" >  im Homeoffice</label>
                    <label class="radio-inline"><input type="radio" id="status-mother" name="status" value="Karenz">  in Karenz</label>
                    <label class="radio-inline"><input type="radio" id="status-holiday" name="status" value="Urlaub">  im Urlaub</label>
                    <label class="radio-inline"><input type="radio" id="status-sick" name="status" value="Krank">  im Krankenstand</label>
                    <label class="radio-inline"><input type="radio" id="status-gone" name="status" value="Ausgeschieden">  ausgeschieden</label>

                </div>
            </div>


            <div class="form-group" id="divToDo">
                <label class="control-label col-sm-12 col-12" for="toDo1">ToDo (max. 5)</label>
                <div class="col-sm-12 col-12">
                    <input type="text" class="form-control" id="toDo1" placeholder="Was muss gemacht werden?"
                           name="toDo1">
                </div>
            </div>


            <div class="form-group">
                <div class="col-sm-12 col-12">
                    <button type="button" onclick="addToDo()" class="btn btn-light active btn-sm">Zeile hinzufügen</button>
                </div>
            </div>


            <div class="form-group">
                <div class="col-sm-12 col-12">

                    <button type="submit" id="submit" class="btn btn-primary">Mitarbeiter hinzufügen</button>
                </div>
            </div>
        </form>
    </div>
</div>


<noscript><br>
    <p>Für diese Website benötigen Sie JavaScript.</p></noscript>

</body>
</html>`;
}

module.exports = getAddData;
