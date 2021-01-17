const db = require ("../../setup/database");



exports.getAllMotif = (req, successCallback, failureCallback) => {
    let sqlQuery =
       `SELECT * FROM motifs`
		db.query(sqlQuery, (err, rows) => {
			if (err) {
				return failureCallback(err);
			}
			if (rows.length > 0) {
				return successCallback(rows);
			} else {
				return successCallback();
			}
		});
	};


	exports.getAllVaccin = (req, successCallback, failureCallback) => {
		    let sqlQuery =
       `SELECT * FROM vaccins`
		db.query(sqlQuery, (err, rows) => {
			if (err) {
				return failureCallback(err);
			}
			if (rows.length > 0) {
				return successCallback(rows);
			} else {
				return successCallback();
			}
		});
	};



