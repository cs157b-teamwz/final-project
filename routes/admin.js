var express = require('express');
var router = express.Router();
var conn = require("./db");

router.get('/addCourse', function (req, res, next) {
    res.render('newCourse');
})

router.get('/addStudent', function (req, res, next) {
    res.render('newStudent');
})

router.get('/addProfessor', function (req, res, next) {
    res.render('newProfessor');
})

module.exports = router;