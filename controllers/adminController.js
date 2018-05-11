
var conn = require("../routes/db");

module.exports.login = function (req, res) {
    const usrname = req.body.username;
    const pwd = req.body.password;
    console.log(usrname + "  " + pwd);
    if(usrname == 'admin' && pwd == 'ezadmin'){
        console.log('Login Successful');
        res.render('admin');
    }
}


