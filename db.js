var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('data.db');

db.serialize(function () {
    const animal = 'burro'
    db.run("INSERT INTO Products (animal) VALUES ('" + animal + "')")
    db.each("SELECT * FROM Products", function (err, row) {
        console.log(row);
    });
});

db.close();