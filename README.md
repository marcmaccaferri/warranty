This project allows you to keep track of product warranties for machines. 


1. Run npm install to install all dependencies 
2. Make a copy of .env.example and rename it to .env
3. run adonis key:generate to generate the secret key
4. Change the following information in .env:
DB_CONNECTION=mysql
DB_PORT=8889
DB_USER=root
DB_PASSWORD=root
DB_DATABASE=devices
5. Run adonis migration:run to setup the database
6. Run adonis serve --dev