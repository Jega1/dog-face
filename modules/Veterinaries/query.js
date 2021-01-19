const db = require("../../setup/database");




	exports.getAllVet = (req, successCallback, failureCallback) => {

    let sqlQuery =
      // `SELECT * FROM users INNER JOIN veterinary v ON users.id_user=v.id_user WHERE users.is_veterinay = 1`
        `SELECT * FROM users WHERE is_veterinary = 1`
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


  exports.getHoursByVet = (req, successCallback, failureCallback) => {
		console.log(req.params);
    let sqlQuery =
          `SELECT * FROM vet_available WHERE  available = 1 AND  id_user=${req.params.id}`
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

  exports.createAppoint = async (appointData) => {
     console.log("Appoint Data : ", appointData);
     appointData.id_user = +appointData.id_user;
     appointData.id_available = +appointData.id_available;
     appointData.id_dog = +appointData.id_dog;
     appointData.id_vet = +appointData.id_vet;
           return new Promise((resolve, reject) => {
      let sqlQuery = `INSERT INTO appointments (id_appointment,id_user, id_dog,id_available, motif,id_vet) VALUES (NULL,"${appointData.id_user}", "${appointData.id_dog}", "${appointData.id_available}", "${appointData.motif}", "${appointData.id_vet}")`;
       db.query(sqlQuery, (err, res) => {
         if (err) reject(err);
        //  console.log("ID_USER :", res.insertId);
         resolve(res);
      });
    });
  };




  exports.takeAppointment = (param, successCallback, failureCallback) => {
    console.log(param);
    param.id_available = +param.id_available;
      let sqlQuery = `UPDATE vet_available SET available=0 WHERE id_available=${param.id_available}`;
    console.log(sqlQuery);
    db.query(sqlQuery, (err, rows) => {
      if (err) {
        return failureCallback(err);
      } else {
  exports.createAppoint(param);
        return successCallback("Created Appointment");
      }
    });
    };




    exports.deleteAppoint = async (appointData) => {
    // console.log("Appoint Data : ",appointData);
     appointData.id_appointment = +appointData.id_appointment;
    return new Promise((resolve, reject) => {
      let sqlQuery = `DELETE FROM appointments WHERE id_appointment=${appointData.id_appointment}`;
       db.query(sqlQuery, (err, res) => {
         if (err) reject(err);
               resolve(res);
      });
    });
  };

  // var a = new Date(year, month, day, hours, minutes, seconds, milliseconds)


  exports.cancelAppointment = (param, successCallback, failureCallback) => {
      console.log(param);
      param.id_appointment = +param.id_appointment;

      let sqlQuery = `SELECT * FROM appointments WHERE id_appointment=${param.id_appointment}`;
       db.query(sqlQuery, (err, rows) => {
      if (err) {
        return failureCallback(err);
      } else {
        console.log(rows[0].id_available);     //   [{}]

                let sqlQuery1 = `UPDATE vet_available SET available=1 WHERE id_available=${rows[0].id_available}`;
            //  console.log(sqlQuery);
            db.query(sqlQuery1, (err, rows) => {
              if (err) {
                           return failureCallback(err);
              } else {
                        exports.deleteAppoint(param);
                        return successCallback("Appointment Cancelled");
              }
            });
      }
    });


  };





