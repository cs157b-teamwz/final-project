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
