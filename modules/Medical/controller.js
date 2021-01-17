const  MedicalServices = require("./service");


exports.registerMedical = (req, res) => {
        MedicalServices.registerMedical(req, result => {
            result.success
                ? res.status(201).send(result)
                : res.status(404).send(result)
        })
    };




    exports.getAllVaccinsByDog = (req, res) => {
		MedicalServices.getAllVaccinsByDog(req, (result) => {
			result.success
				? res.status(200).send(result)
				: res.status(404).send(result);
		});
  };

  exports.getAllSicksByDog = (req, res) => {
		MedicalServices.getAllSicksByDog(req, (result) => {
			result.success
				? res.status(200).send(result)
				: res.status(404).send(result);
		});
    };





    exports.editMedical = (req, res) => {
      MedicalServices.editMedical(req, (result) => {
        result.success
          ? res.status(200).send(result)
        : res.status(404).send(result);
    });
  };

