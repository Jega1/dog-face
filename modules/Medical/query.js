const db = require("../../setup/database");



exports.registerMedical = (param, successCallback, failureCallback) => {

		param.body.id_dog = +param.body.id_dog;
		param.body.type_medical = +param.body.type_medical;
		console.log(param.body.id_dog);

			let sqlQuery = `INSERT INTO medical (id_medical,id_dog,name,first_date,next_date,treatment,observation,type_medical) VALUES (NULL,"${param.body.id_dog}","${param.body.name}","${param.body.first_date}","${param.body.next_date}","${param.body.treatment}","${param.body.observation}","${param.body.type_medical}")`;

		db.query(sqlQuery, (err) => {
        if (err) {
          return failureCallback(err);
        } else {
			return successCallback("Vaccin registed");
        }
      });
  };


  exports.getAllVaccinsByDog = (req, successCallback, failureCallback) => {

		let sqlQuery =
			`SELECT * FROM medical WHERE type_medical=1 AND id_dog=${req.params.id_dog}`
			db.query(sqlQuery, (err, rows) => {
			if (err) {
				return failureCallback(err);
			}
			if (rows.length > 0) {
				return successCallback(rows);
			} else {
				return successCallback([]);

			}
		});
	};

  exports.getAllSicksByDog = (req, successCallback, failureCallback) => {

		let sqlQuery =
			`SELECT * FROM medical WHERE type_medical=0 AND id_dog=${req.params.id_dog}`
			db.query(sqlQuery, (err, rows) => {
			if (err) {
				return failureCallback(err);
			}
			if (rows.length > 0) {
				return successCallback(rows);
			} else {
				return successCallback([]);
			}
		});
	};






  exports.editMedical= (param, successCallback, failureCallback) => {
	 param.body.is_sick = +param.body.is_sick;
	 param.params.id_medical = +param.params.id_medical;
     let sqlQuery = `UPDATE medical SET name="${param.body.name}", next_date ="${param.body.first_date}",next_date ="${param.body.next_date}",treatment ="${param.body.treatment}",observation ="${param.body.observation}",type_medical ="${param.body.type_medical}" WHERE id_medical=${param.params.id_medical}`;
    console.log(sqlQuery);
    db.query(sqlQuery, (err, rows) => {
      if (err) {
        return failureCallback(err);
      } else {


        return successCallback("Profil modifier");
      }
    });
  };

