var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "localhost",
    user: "team_ez",
    password: "sesame",
    database: 'ez_star'
});
var db;

function connectDatabase() {
    if (!db) {
        db = mysql.createConnection(connection);

        db.connect(function(err){
            if(!err) {
                console.log('Database is connected!');
            } else {
                console.log('Error connecting database!');
            }
        });
    }
    return db;
}

module.exports = connectDatabase();