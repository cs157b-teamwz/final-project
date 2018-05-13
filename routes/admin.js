var express = require('express');
var router = express.Router();
const adminCtr = require("../controllers/adminController");
const analyzeCtr = require("../controllers/analyzeController");

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

router.get('/analyzeEnrollment', adminCtr.analyze);

router.get('/analyzeByCourses', analyzeCtr.byCourses);

router.get('/analyzeByDepartment', analyzeCtr.byDept);

router.get('/analyzeBySemester', analyzeCtr.bySemester);

router.get('/analyzeByProfessor', analyzeCtr.byProf);

module.exports = router;
