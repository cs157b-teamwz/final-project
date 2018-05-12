const express = require('express');
const adminCtr = require('../controllers/adminController');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'TEAM-EZ' });
});

router.get('/admin', function(req, res, next) {
   res.render('adminLogin');
});

router.get('/student', function(req, res, next) {
    res.render('student');
});

router.post("/admin", adminCtr.login);

module.exports = router;
