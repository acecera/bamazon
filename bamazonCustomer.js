const mysql = require('mysql');
const inquirer = require('inquirer');

const DATABASE = 'bamazon_db';
const TABLE = 'products';

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,

    user: 'root',
    password: 'Iamking1269!',
    database: DATABASE,
});

connection.connect(function(error) {
    if (error) {
        console.log(error);
    }

    console.log(`Connect as id ${connection.threadId}`);
});