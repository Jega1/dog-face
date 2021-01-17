const db = require ("../../setup/database");



exports.registerTraining = (param, successCallback, failureCallback) => {

		param.body.id_dog = +param.body.id_dog;
		param.body.id_lesson = +param.body.id_lesson;
		var id_status = 1;

			let sqlQuery = `INSERT INTO dog_has_trainning (id_trainning,id_dog, id_lesson, id_status, periode, note) VALUES (NULL,"${param.body.id_dog}","${param.body.id_lesson}", "${id_status}", "${param.body.periode}", "${param.body.note}" )`;
      db.query(sqlQuery, (err) => {
        if (err) {
          return failureCallback(err);
        } else {
          return successCallback("Training registed")
        }
      });
  };


  exports.editTraining = (param) => {
		 param.body.id_status = +param.body.id_status;
		 param.params.id = +param.params.id;
     let sqlQuery = `UPDATE dog_has_trainning SET id_status="${param.body.id_status}", note ="${param.body.note}" WHERE id_trainning=${param.params.id}`;
    db.query(sqlQuery, (err, rows) => {
      if (err) {

		  return "Error Occured";
      } else {
        return rows;
      }
    })
  };


	exports.getAll = (req, successCallback, failureCallback) => {
		let sqlQuery =
		`SELECT * FROM dog_has_trainning`
		db.query(sqlQuery, (err, rows) => {
			if (err) {
				return failureCallback(err);
			}
			if (rows.length > 0) {
				return successCallback(rows);
			} else {
				return successCallback("There is no trainning.");
			}
		});
	};



