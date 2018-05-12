var conn = require("../routes/db");

module.exports.search = function (req, res) {
    const title = req.body.courseTitle;
    console.log(title);
    const sql = title == '' ? 'SELECT * FROM CoursesDimention;' : 'SELECT * FROM CoursesDimention WHERE CourseTitle = ?';
    const queryValues = [title];
    conn.query(sql, queryValues, function (err, rows) {
        if (err) {
          return res.render('error', {message: "Database error", error: err});
        }

        console.log("Result");
        console.log(rows);
        const msg = rows.length == 0 ? "No result found" : "Result";

        res.render('searchCourse', {message: msg, res: rows});
    })
}

module.exports.enroll = function (req, res) {
    const title = req.body.courseTitle;
    const secNum = req.body.sectionNum;
    const sId = req.body.sId;

    const sqlCourse = 'SELECT * FROM CoursesDimention WHERE CourseTitle = ? and `Section#` = ?';
    const queryValuesCourse = [title, secNum];
    // check if courseTitle and section num are valid
    conn.query(sqlCourse, queryValuesCourse, function (err, courseResult) {
        if (err) {
          return res.render('error', {message: "Database error", error: err});
        }
        console.log(courseResult);
        if (courseResult.length != 1) {
          const msg = courseResult.length == 0 ? "No course found" : "Multiple courses found";
          return res.render('enrollCourse', {message: msg});
        }
        const courseId = courseResult[0].CoursesKey;
        // Insert
        const sqlInsert = 'INSERT INTO EnrollmentDimention (studentID, courseKey) VALUE(?, ?);';
        const insertValue = [sId, courseId];
        console.log(sId)
        console.log(courseId)

        conn.query(sqlInsert, insertValue, function (err, calResult) {
          if (err) {
            return res.render('error', {message: "Insert error", error: err});
          }
          const msg = "Success";
          return res.render('enrollCourse', {message: msg});
        })

    })
}
