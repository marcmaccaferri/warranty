This project allows you to keep track of product warranties for machines. 


1.  Run npm install to install all dependencies 
2.  Download and install MAMP from https://www.mamp.info/en/downloads/
3.  Open MAMP
4.  Go to MAMP prefrences 
5.  Select Ports
6.  Change MySQL port to 8889
7.  On Mac download and install Sequal Pro -> https://www.sequelpro.com
    On PC download and install HeidiSQL -> https://www.heidisql.com/download.php
8.  Create a new database titled "devices"
9.  Make a copy of .env.example and rename it to .env
10. Run adonis key:generate to generate the secret key
11. Change the following information in .env:
        DB_CONNECTION=mysql
        DB_PORT=8889
        DB_USER=root
        DB_PASSWORD=root
        DB_DATABASE=devices
12. Run adonis migration:run to setup the database
13. Run adonis serve --dev