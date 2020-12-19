# Employee - Management Tool

Website that helps manage employees, made for FH JOANNEUM. Web pages include:

## Overview List
> lists all employees<br>
> basic information such as name, birthdate, phone number, department, etc.<br>

##### Additional features [not implemented yet]:

- [ ] Search fields and filters to easily comb through a lot of data<br>
- [ ] Use of bookmarks for regularly used searches<br>
- [ ] Sorting feature


## Add Employee
> form for adding a new employee to the database

## Detail view [not implemented yet]
> more detailed information about an employee

## How to start the website
> Start your Apache server and MySQL on Xampp<br>
> Install MySQL and Formidable for Node.js in the terminal:<br>
>> `npm install mysql`<br>
>> `npm install formidable`<br>

Database:
> Open `localhost/phpmyadmin/` in your browser<br>
> Create new database: name `dbd_webtech` with UTF8 encoding<br>
> import `SneakyOrc\backend\dbd-scripts\dbd_webtech.sql` to your newly created database<br>
> you should be able to see some datasets

> Switch to src folder in the terminal: `cd main/src`<br>
> To start the website: `node app.js`<br>
> Open `localhost:8080` in your browser to access the website<br>

If you get the error: `cb() never called` then go to this website:
>https://reactgo.com/npm-err-cb-never-called/S


## Known issues
Only implemented user stories #1 Overview List and #4 Add Data
- no actual input validation
- formatting not ideal
- need to create database manually


## Developers
 Antonino Darlene<br>
 Bogner Nina<br>
 Graschl Sarah<br>
 Nowotny Tiberiu-Arthur<br>
 Schlocker Viola<br>
 Zengerer Marcel
