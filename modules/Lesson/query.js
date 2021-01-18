const db = require ("../../setup/database");






exports.getAllStepsByIdLess = (param, successCallback, failureCallback) => {
    let sqlQuery = `SELECT * FROM steps WHERE id_lesson=${param.params.id}`;
    db.query(sqlQuery, (err, rows) => {
      if (err) {
        return failureCallback(err);
      }
      if (rows.length > 0) {
        return successCallback(rows);
      } else {
        return successCallback("No matching lesson");
      }
    })
  };

  exports.getAllLessons = (param, successCallback, failureCallback) => {
    let sqlQuery = `SELECT * FROM lessons`;
    db.query(sqlQuery, (err, rows) => {
      if (err) {
        return failureCallback(err);
      }
      if (rows.length > 0) {
        return successCallback(rows);
      } else {
        return successCallback("No matching lesson");
      }
    })
  };


