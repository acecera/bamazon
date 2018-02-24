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
    start();
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

function start() {
    connection.query('SELECT * FROM products', function(error, result) {
        displayTable(result);
        var choiceArray = [];
        for (var i = 0; i < result.length; i++) {
            choiceArray.push(result[i].product_name);
        }
        inquirer.prompt([{
            name: 'item',
            type: 'input',
            message: 'Which is the item id of the product you would like to purchase?'
        },
        {
            name: 'quantity',
            type: 'input',
            message: 'How many you would like to purchase?'
        }]).then(function(answer) {
            console.log(answer);
            var item_id = parseInt(answer.item)
            console.log(item_id);
            var choiceItem = function () {
                for (var i = 0; i < result.length; i++) {
                    if (result[i].item_id === item_id) {
                        return result[i];
                    }
                }
            } 
            var itemChoice = result[item_id];
            var item = choiceItem();
            var stock_quantity = parseInt(answer.quantity);   
            var newStock = parseInt(item.stock_quantity) - parseInt(answer.quantity);
            console.log(newStock);
            if (newStock >= 0) {
                connection.query('UPDATE products SET ? WHERE item_id = ?', [{stock_quantity: newStock}, item_id]);
                start();
            } else {
                console.log('There are not enough in stock to fulfill your order.');
                start();
            }
        })
    })
}    