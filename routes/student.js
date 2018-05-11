var express = require('express');
var router = express.Router();
var conn = require("./db");

router.get('/searchCourse', function (req, res, next) {
    res.render('searchCourse');
})

router.get('/enrollCourse', function (req, res, next) {
    res.render('enrollCourse');
})

module.exports = router;