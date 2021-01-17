const db =require ("../../setup/database");



exports.getAllPack = (param, successCallback, failureCallback) => {
    let sqlQuery = `SELECT * FROM packages`;
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


  exports.getAllLessByIdPack = (param, successCallback, failureCallback) => {
    let sqlQuery = `SELECT * FROM lessons WHERE id_package=${param.params.id}`;
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





