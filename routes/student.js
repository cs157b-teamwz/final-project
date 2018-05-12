var express = require('express');
var router = express.Router();
var conn = require("./db");
const studentCtr = require('../controllers/studentController');

router.get('/searchCourse', function (req, res, next) {
    res.render('searchCourse');
})

router.post('/searchCourse', studentCtr.search);

router.get('/enrollCourse', function (req, res, next) {
    res.render('enrollCourse');
})

router.post('/searchCourse', studentCtr.enroll);

module.exports = router;
