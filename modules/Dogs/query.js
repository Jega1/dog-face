const db = require("../../setup/database");
var ImageKit = require("imagekit");
const config = require('../../config/keys');  //a voir


 var imagekit = new ImageKit({
     publicKey : config.publicKey,
     privateKey : config.privateKey,
     urlEndpoint :config.urlEndpoint
 });


exports.registerDog = (param, successCallback, failureCallback) => {
		console.log(param);
			let sqlQuery = `INSERT INTO dogs (id_dog, id_user, firstname, lastname, sex, race, puce_nu, birth_date, birth_certificate_nu, passport_nu) VALUES (NULL,"${param.body.id_user}","${param.body.firstname}", "${param.body.lastname}", "${param.body.sex}","${param.body.race}", "${param.body.puce_nu}","${param.body.birth_date}", "${param.body. birth_certificate_nu}", "${param.body.passport_nu}" )`;
      db.query(sqlQuery, (err) => {
        if (err) {
          return failureCallback(err);
        } else {
          return successCallback("Dog registed")
        }
      });
  };


	exports.addDogImage = (param, successCallback, failureCallback) => {
		// console.log("File buffer : ", param.file.buffer);
		param.body.id_dog = +param.body.id_dog;
		    var base64Img = param.file.buffer;
         imagekit.upload({
                        file : base64Img, //required
                        fileName : "dogImg.jpg"   //required  (present in URL)

         }, function (error, result) {
           if (error) { console.log(error); }
           else {
			   console.log(result.url);
				//  let sqlQuery = `UPDATE dogs SET dog_image='${result.url}' WHERE id_dog=${param.body.id_dog}`;
			   	let sqlQuery = `INSERT INTO dog_images (id_image,id_dog,dog_image,title) VALUES (NULL,"${param.body.id_dog}","${result.url}", "${param.body.title}" )`;
		    db.query(sqlQuery, (err) => {
        if (err) {
          return failureCallback(err);
        } else {
          return successCallback("Dog Image Added")
        }
      });
           }
		 })

  };


  exports.addDogImage1 = (param, successCallback, failureCallback) => {
	let allImages = [];
	param.files.forEach(file => {
		// console.log(file.buffer);
		 var base64Img = file.buffer;
		imagekit.upload({
			file: base64Img, //required
			fileName: "dogImg.jpg"   //required  (present in URL)

		}, function (error, result) {
			if (error) { console.log(error); }
			else {
				console.log(result.url);
				allImages.push(result.url);
				 	let sqlQuery = `INSERT INTO dog_images (id_image,id_dog,dog_image,title) VALUES (NULL,"${param.body.id_dog}","${result.url}", "${param.body.title}" )`;
				db.query(sqlQuery, (err) => {

						if (err) {
								// return failureCallback(err);
								} else {
								// return successCallback("Dog Image Added")
								}

	if (allImages.length == param.files.length)
	{
		 return successCallback("Dog Image Added")
		}

				 },

			)}
		})

	})



  };









	exports.deleteDogImage = (param, successCallback, failureCallback) => {
		param.params.id_image = +param.params.id_image;
		let sqlQuery = `DELETE FROM dog_images WHERE id_image=${param.params.id_image}`
			  db.query(sqlQuery, (err) => {
        if (err) {
          return failureCallback(err);
        } else {
          return successCallback("Dog image deleted")
        }
      });
	};



  exports.getAllDogImages = (req, successCallback, failureCallback) => {
		let sqlQuery =
			`SELECT * FROM dog_images WHERE id_dog=${req.params.id_dog}`
			db.query(sqlQuery, (err, rows) => {
			if (err) {
				return failureCallback(err);
			}
			if (rows.length > 0) {
				return successCallback(rows);
			} else {
				return successCallback("The dog has no images");
			}
		});
	};



	exports.getAllDogsByUser = async (req, successCallback, failureCallback) => {

    let sqlQuery = await	`SELECT * FROM dogs WHERE id_user=${req.params.id}`

			db.query(sqlQuery, (err, rows) => {
			if (err) {
				return failureCallback(err);
			}
			else {

		  	 return successCallback(rows);
			}
		});
	};

	exports.getDogById = (req, successCallback, failureCallback) => {
		// console.log(req.params);
    let dog_images = [];
		let sqlQuery = `SELECT * FROM dogs WHERE id_dog=${req.params.id}`
			db.query(sqlQuery, (err, rows) => {
			if (err) {
				return failureCallback(err);
			}
				if (rows.length > 0) {

					// console.log(rows[0].id_dog)
					let sqlQuery1 = `SELECT * FROM dog_images WHERE id_dog=${req.params.id}`
					db.query(sqlQuery1, (err, rows1) => {
						if (err)
						{
								return failureCallback(err);
						}
						else {
							var newData = [{...rows[0],images:rows1}];
							 return successCallback(newData);
						}
					})

					//var a = {title:abc,age:2}¨
					//var b = {...a,name:samarth};   => {title:abc,age:2,name:...}

				// return successCallback(rows);
			} else {
				 return successCallback([]);
				//return [];
			}
		});
	};





  exports.editDog = (param) => {
    console.log("Dog data : ",param.body.firstname,param.params.id);
     let sqlQuery = `UPDATE dogs SET firstname="${param.body.firstname}", lastname ="${param.body.lastname}", sex ="${param.body.sex}", race ="${param.body.race}", puce_nu ="${param.body.puce_nu}", birth_date ="${param.body.birth_date}", birth_certificate_nu ="${param.body.birth_certificate_nu}", passport_nu ="${param.body.passport_nu}" WHERE id_dog=${param.params.id}`;
    console.log(sqlQuery);
    db.query(sqlQuery, (err, rows) => {
      if (err) {
		// return failureCallback(err);
		  return "Error Occured";
      } else {
        return rows;
      }
    })
  };
