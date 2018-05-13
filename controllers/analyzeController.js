var conn = require("../routes/db");

module.exports.byCourses = function (req, res) {
    var query = 'SELECT CourseTitle, COUNT(EnrollmentFactTable.StudentKey) AS EnrolledStudents FROM EnrollmentFactTable, CalendarDimention, CoursesDimention, StudentDimention WHERE CoursesDimention.CoursesKey = EnrollmentFactTable.CoursesKey\n' +
        'AND StudentDimention.StudentKey = EnrollmentFactTable.StudentKey\n' +
        'AND CalendarDimention.CalendarKey = EnrollmentFactTable.CalendarKey GROUP BY CourseTitle\n' +
        'ORDER BY CourseTitle, CourseTitle'
    conn.query(query, function (err, rows) {
        if(err) throw err;
        res.render('analyzeResult', {results: rows, title: 'by Course'});
    })
}

module.exports.byDept = function (req, res) {
    var query = 'SELECT DeptName, COUNT(EnrollmentFactTable.StudentKey) AS EnrolledStudents FROM EnrollmentFactTable, CalendarDimention, DepartmentDimention, StudentDimention WHERE\n' +
        'DepartmentDimention.DepartmentKey = EnrollmentFactTable.DepartmentKey AND StudentDimention.StudentKey = EnrollmentFactTable.StudentKey AND CalendarDimention.CalendarKey = EnrollmentFactTable.CalendarKey\n' +
        'GROUP BY DeptName ORDER BY DeptName';
    conn.query(query, function (err, rows) {
        if(err) throw err;
        res.render('analyzeResult', {results: rows, title: 'by Department'});
    })
}

module.exports.bySemester = function (req, res) {
    var query = 'SELECT\n' +
        'Semester, YEAR, COUNT(StudentKey) as Number_of_Student\n' +
        'FROM EnrollmentFactTable, CalendarDimention\n' +
        'WHERE\n' +
        'CalendarDimention.CalendarKey = EnrollmentFactTable.CalendarKey\n' +
        'GROUP BY Semester, YEAR, ProfessorKey\n' +
        'ORDER BY YEAR,\n' +
        'Semester;';
    conn.query(query, function (err, rows) {
        if(err) throw err;
        res.render('analyzeResult', {results: rows, title: 'by Semester'});
    })
}

module.exports.byProf = function (req, res) {
    var query = 'SELECT ProfessorDimention.ProfessorKey, ProfessorDimention.ProfName, Semester, YEAR,\n' +
        'COUNT(StudentKey)\n' +
        'FROM EnrollmentFactTable, CalendarDimention, ProfessorDimention\n' +
        'WHERE\n' +
        'CalendarDimention.CalendarKey = EnrollmentFactTable.CalendarKey\n' +
        'GROUP BY Semester, YEAR, ProfessorKey\n' +
        'ORDER BY YEAR,\n' +
        'Semester;';
    conn.query(query, function (err, rows) {
        if(err) throw err;
        res.render('analyzeResult', {results: rows, title: 'by Professor'});
    })
}