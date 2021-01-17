const VaccinServices = require ("./service");


exports.registerMedical = (req, res) => {
        VaccinServices.registerMedical(req, result => {
            result.success
                ? res.status(201).send(result)
                : res.status(404).send(result)
        })
    };




    exports.getAllVaccinsByDog = (req, res) => {
		VaccinServices.getAllVaccinsByDog(req, (result) => {
			result.success
				? res.status(200).send(result)
				: res.status(404).send(result);
		});
    };

    exports.editMedical = (req, res) => {
      VaccinServices.editMedical(req, (result) => {
        result.success
          ? res.status(200).send(result)
        : res.status(404).send(result);
    });
  };
