var mysql = require('mysql');
var db;

function connectDatabase() {
    if (!db) {
        db = mysql.createConnection({
            host: "localhost",
            user: "team_ez",
            password: "sesame",
            database: 'ez_star'
        });

        db.connect(function(err){
            if(!err) {
                console.log('Database is connected!');
            } else {
                console.log('Error connecting database!');
            }
        });
    }
    
    db.query('Select name from StudentDimention', function (err, rows) {
        if (err) throw err;
        console.log('Result: ' + rows[0]);
    })
    return db;
}

module.exports = connectDatabase();