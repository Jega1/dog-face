const db = require("../../setup/database");




	exports.getAppointsByVet = (req, successCallback, failureCallback) => {
        console.log(req.params);

// `SELECT * FROM appointments a INNER JOIN users u ON u.id_user=a.id_vet INNER JOIN dogs d ON a.id_dog=d.id_dog WHERE  u.is_veterinary=1 AND  a.id_vet=${req.params.id_vet}`
   // let sqlQuery =  `SELECT * FROM appointments a INNER JOIN users u ON u.id_user=id_user WHERE  u.is_veterinary=1 AND  a.id_vet=${req.params.id_vet}`
		let sqlQuery = `SELECT * FROM appointments a INNER JOIN users u ON u.id_user=a.id_vet INNER JOIN dogs d ON a.id_dog=d.id_dog WHERE  u.is_veterinary=1 AND  a.id_vet=${req.params.id_vet}`
		
		db.query(sqlQuery, (err, rows) => {
			if (err) {
				return failureCallback(err);
			}
			if (rows.length > 0) {
				return successCallback(rows);
			} else {
				return successCallback(rows);
			}
		});
	};


  exports.getAppointsByUser = (req, successCallback, failureCallback) => {

 //   let sqlQuery =  `SELECT * FROM appointments a INNER JOIN dogs d ON d.id_dog=a.id_dog INNER JOIN users u ON u.id_user=a.id_user WHERE u.is_veterinary=0 AND a.id_user=${req.params.id_user}`
	  let sqlQuery =    `SELECT a.*,d.firstname FROM appointments a INNER JOIN dogs d ON d.id_dog=a.id_dog INNER JOIN users u ON u.id_user=a.id_user WHERE u.is_veterinary=0 AND a.id_user=${req.params.id_user}`
    	db.query(sqlQuery, (err, rows) => {
			if (err) {
				return failureCallback(err);
			}
			if (rows.length > 0) {

				return successCallback(rows);
			} else {
				return successCallback(rows);
			}
		});
	};







