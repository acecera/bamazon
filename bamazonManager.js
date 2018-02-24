const mysql = require('mysql');
const inquirer = require('inquirer');
const Table = require('cli-table');

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
        throw error;
    }
    managerStart();
});

function displayTable(result) {
    var table = new Table({
        head: ['Item ID', 'Product Name', 'Department', 'Price', 'Stock']
        , colWidths: [12, 20, 20, 10, 5]
    });
    for (var i = 0; i < result.length; i++) {
        table.push([result[i].item_id, result[i].product_name, result[i].department_name, result[i].price, result[i].stock_quantity]);
    }
    console.log(table.toString());
}

function managerStart() {
    connection.query('SELECT * FROM products', function(error, result) {
        displayTable(result);
        var choiceArray = [];
        for (var i = 0; i < result.length; i++) {
            choiceArray.push(result[i].product_name);
        }
        in