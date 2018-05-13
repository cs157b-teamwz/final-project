
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

module.exports.addStudent = function (req, res) {
  const studentID = req.body.sId;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const name = firstName + " " + lastName;
  const email  = req.body.email;
  const major  = req.body.major;
  const startDate = req.body.startDate;

  const sqlInsert = 'INSERT INTO StudentDimention (StudentKey, StudentID, Name, Major, Email, StartDate) VALUE(?, ?, ?, ?, ?, ?);';
  const insertValue = [studentID, studentID, name, major, email, startDate];

  conn.query(sqlInsert, insertValue, function (err, calResult) {
    if (err) {
      return res.render('error', {message: "Insert error", error: err});
    }
    const msg = "Success";
    return res.render('newStudent', {message: msg});
  })
}

module.exports.addProfessor = function (req, res) {
  const pId = req.body.pId;
  const name = req.body.name;
  const email  = req.body.email;

  const sqlInsert = 'INSERT INTO ProfessorDimention (ProfessorKey, ProfID, ProfName, ProfEmail) VALUE(?, ?, ?, ?);';
  const insertValue = [pId, pId, name, email];

  conn.query(sqlInsert, insertValue, function (err, calResult) {
    if (err) {
      return res.render('error', {message: "Insert error", error: err});
    }
    const msg = "Success";
    return res.render('newProfessor', {message: msg});
  })
}

module.exports.addCourse = function (req, res) {
  const cId = req.body.cId;
  const pId = req.body.pId;
  const crId = req.body.crId;
  const cTitle = req.body.courseTitle;
  const secNum = req.body.sectionNum;
  const cap  = req.body.cap;

  const sqlInsert = 'INSERT INTO CoursesDimention (CoursesKey, ClassroomID, CourseTitle, `Section#`, ProfID, Capacity) VALUE(?, ?, ?, ?, ?, ?);';
  const insertValue = [cId, crId, cTitle, secNum, pId, cap];

  conn.query(sqlInsert, insertValue, function (err, calResult) {
    if (err) {
      return res.render('error', {message: "Insert error", error: err});
    }
    const msg = "Success";
    return res.render('newCourse', {message: msg});
  })
}

module.exports.analyze = function (req, res) {
    res.render('analyzeEnrollment');
}

