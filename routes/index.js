const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'TEAM-EZ' });
});

router.get('/admin', function(req, res, next) {
    res.render('admin');
});

router.get('/student', function(req, res, next) {
    res.render('student');
});


module.exports = router;