var express = require('express');
var router = express.Router();
var conn = require("./db");

/* GET users listing. */
router.get('/', function(req, res, next) {
    conn.query('SELECT * from StudentDimention', function (err, rows, fields) {
        if (err) throw err

        console.log('The solution is: ', rows[0].name)
    })
    res.send('respond with a resource');
});

module.exports = router;
