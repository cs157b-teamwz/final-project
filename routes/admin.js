var express = require('express');
var router = express.Router();
var conn = require("./db");
const adminCtr = require("../controllers/adminController");

router.get('/addCourse', function (req, res, next) {
    res.render('newCourse');
})
router.post('/addCourse', adminCtr.addCourse);

router.get('/addStudent', function (req, res, next) {
    res.render('newStudent');
})

router.post('/addStudent', adminCtr.addStudent);

router.get('/addProfessor', function (req, res, next) {
    res.render('newProfessor');
})

router.post('/addProfessor', adminCtr.addProfessor);

module.exports = router;
