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

function managerStart() {
        inquirer.prompt({
            name: "menu",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "View Products for Sale",
                "View Low Inventory",
                "Add to Inventory",
                "Add New Product"
            ]
        }).then(function(answer) {
            switch (answer.action) {
                case "View Products for Sale":
                    displayTable(result);
                    break;

                case "View Low Inventory":
                    lowInventory(result);
                    break;
                    
                case "Add to Inventory":
                    addOn(result);
                    break; 
                
                case "Add New Inventory":
                    updateProducts(result);
                    break;
            }
        });
    }
    
function displayTable(result) {
    connection.query('SELECT * FROM products', function(error, result) {
        displayTable(result);
        var choiceArray = [];
        for (var i = 0; i < result.length; i++) {
            choiceArray.push(result[i].product_name);
        }
    var table = new Table({
        head: ['Item ID', 'Product Name', 'Department', 'Price', 'Stock']
        , colWidths: [12, 41, 20, 10, 5]
    });
    for (var i = 0; i < result.length; i++) {
        table.push([result[i].item_id, result[i].product_name, result[i].department_name, result[i].price, result[i].stock_quantity]);
    }
    console.log(table.toString());
},

function lowInventory(result) {
    var table = new Table({
        head: ['Item ID', 'Product Name', 'Department', 'Price', 'Stock']
        , colWidths: [12, 41, 20, 10, 5]
    });
    for (var i = 0; i < result.length; i++) {
        table.push([result[i].item_id, result[i].product_name, result[i].department_name, result[i].price, result[i].stock_quantity]);
    }
    var query = "SELECT product_name FROM products GROUP BY product_name HAVING stock_quantity count(*) < 5";
    connection.query(query, {product_name: product_name}, function(err, res){
        for (var i = 0; i < result.length; i++) {
            return res[i].product_name;
            console.log(table.toString());
        } if (error) {
            throw error;
            console.log("Error");
        }
        managerStart();
    });
},

function addOn(result) {
    var table = new Table({
        head: ['Item ID', 'Product Name', 'Department', 'Price', 'Stock']
        , colWidths: [12, 41, 20, 10, 5]
    });
    for (var i = 0; i < result.length; i++) {
        table.push([result[i].item_id, result[i].product_name, result[i].department_name, result[i].price, result[i].stock_quantity]);
    } 
    connection.query("UPDATE products SET ? WHERE ?", {stock_quantity: Stock}, function(err, res) {
        if (error) {
            throw err;
            console.log("Error");
        }
        managerStart();
    });

},

function updateProducts(result) {
    var table = new Table({
        head: ['Item ID', 'Product Name', 'Department', 'Price', 'Stock']
        , colWidths: [12, 41, 20, 10, 5]
    });
    for (var i = 0; i < result.length; i++) {
        table.push([result[i].item_id, result[i].product_name, result[i].department_name, result[i].price, result[i].stock_quantity]);
    } 
    connection.query("UPDATE products SET ? WHERE ?", 
    [{item_id: ItemID}, {product_name: ProductName}, {department_name: Department}, 
        {price: Price}, {stock_quantity: Stock}], function(err, res) {
        if (error) {
            throw err;
            console.log("Error");
        }
    });
});
};
    
    