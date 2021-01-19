const db = require( "../../setup/database");


exports.getUser =  (param, successCallback, failureCallback) => {
    let sqlQuery = `SELECT * FROM users WHERE id_user=${param.params.id}`;
  db.query(sqlQuery, (err, rows) => {
    if (err) {
      return failureCallback(err);
    }
    if (rows.length > 0) {
      return successCallback(rows);
    } else {
      return successCallback("No matching user");
    }
  })
};



  //AUTHENTICATION
    ///authentication (for checking user existence)
    exports.getByEmail = async (email) => {
      let sqlQuery
      try{
         sqlQuery = await `SELECT * FROM users WHERE email="${email}"`;
      }catch(err){

      }


            return new Promise((resolve, reject) => {
         try{
          db.query(sqlQuery, (err, res) => {
            if (err) reject(err);

            resolve(res);
         });
         }catch(err){

         }

    });
    };

  //Authentication  (comparing actual email and password)
 exports.authenticate = async (user, successCallback, failureCallback) => {

  let sqlQuery
  try{
     sqlQuery =  `SELECT * FROM users WHERE email="${user.email}" AND password="${user.password}"`;
  }catch(err){

  }

     db.query(sqlQuery, (err, rows) => {
        if (err) {

          return failureCallback(err);
        }
        if (rows.length > 0) {

          return successCallback(rows[0]);
        } else {
          return successCallback("Incorrect username or password combinaison");
        }

  });

  };

///Register checking (for checking user existence)
exports.getByUserEmail = async (email) => {
  let sqlQuery
try{
   sqlQuery = await `SELECT * FROM users WHERE email="${email}"`;
}catch(err){

}


		return new Promise( (resolve, reject) => {
try{
  db.query(sqlQuery, (err, rows) => {
    if (err) reject(err);
    resolve(rows[0]);
  });



}catch(err){

}
});
  };

//A VOIR

 exports.register =  (users) => {
  users.is_veterinary = +users.is_veterinary
  let sqlQuery
  try{
     sqlQuery =   `INSERT INTO users (id_user, username, email, password,telephone,is_veterinary,address,role,code_postal,ville,longitude,latitude) VALUES (NULL,"${users.username}","${users.email}","${users.hashedPassword}","${users.telephone}", "${users.is_veterinary}", "${users.address}","user","${users.code_postal}","${users.ville}","${users.longitude}","${users.latitude}")`;
  }catch(err){

  }


    return new Promise((resolve, reject) => {
      try{
    db.query(sqlQuery, (err, res) => {
      if (err) {
        return reject(err);
      } else {
        return resolve(res);
      }
    });

  }catch(err){

  }

  });

  };

  exports.editUser = (param) => {
  let sqlQuery = `UPDATE users SET  username="${param.body.username}", email ="${param.body.email}",telephone="${param.body.telephone}",address="${param.body.address}", code_postal ="${param.body.code_postal}", ville ="${param.body.ville}",longitude ="${param.body.longitude}",latitude ="${param.body.latitude}" WHERE id_user=${param.params.id}`;
    console.log(sqlQuery);
    db.query(sqlQuery, (err, rows) => {
      if (err) {
        return "Error Occured";
      } else {
        return rows;
      }
    })
};


exports.getUserVet = async (param, successCallback, failureCallback) => {
  let sqlQuery = await `SELECT * FROM users u INNER JOIN veterinary v ON v.id_user = u.id_user WHERE u.id_user=${param.params.id}`;
  db.query(sqlQuery, (err, rows) => {
    if (err) {
      return failureCallback(err);
    }
    if (rows.length > 0) {
      return successCallback(rows);
    } else {
      return successCallback("No matching user");
    }
  })
};

exports.delete = (id, successCallback, failureCallback) => {
      let sqlQuery = `SELECT * FROM dogs where id_user=${id}`
    db.query(sqlQuery, (err, rows) => {
      if (err) {
        return failureCallback(err);
      }
      if (rows.length > 0)
      {
    let sqlQuery1 = `DELETE FROM dog_has_trainning WHERE id_dog= ${rows[0].id_dog}`
    db.query(sqlQuery1, (err, rows) => {

      if (err) {
        return failureCallback(err);
      }

      if (rows.length > 0) {
        let sqlQuery2 = `DELETE FROM appointments  WHERE id_user= ${id}`
        db.query(sqlQuery2, (err, rows) => {
          if (err) {
            return failureCallback(err);
          }
           let sqlQuery3 = `DELETE FROM dogs  WHERE id_user= ${id}`
        db.query(sqlQuery3, (err, rows) => {
          if (err) {
            return failureCallback(err);
          }
               let sqlQuery4 = `DELETE FROM users  WHERE id_user= ${id}`
        db.query(sqlQuery4, (err, rows) => {
          if (err) {
            return failureCallback(err);

          }
             return successCallback(rows);
        })

        })

        })
      } else {

        let sqlQuery2 = `DELETE FROM appointments  WHERE id_user= ${id}`
        db.query(sqlQuery2, (err, rows) => {
          if (err) {
            return failureCallback(err);

          }
           let sqlQuery3 = `DELETE FROM dogs  WHERE id_user= ${id}`
        db.query(sqlQuery3, (err, rows) => {
          if (err) {
            return failureCallback(err);

          }
               let sqlQuery4 = `DELETE FROM users  WHERE id_user= ${id}`
        db.query(sqlQuery4, (err, rows) => {
          if (err) {
            return failureCallback(err);

          }
          //sqlquery5
             return successCallback(rows);
        })
            //  return successCallback(rows);
        })
              //  return successCallback(rows);
        })
        // return successCallback("No movie with this id");
      }
    });

      }
      else {
        return successCallback(rows);
      }
    })

  };

