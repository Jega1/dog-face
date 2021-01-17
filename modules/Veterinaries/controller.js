const VetServices = require("./service");




exports.getVet = (req, res) => {
    VetServices.getVet(req, result => {
      result.success ? res.status(200).send(result) : res.status(404).send(result)
    })
  };
  exports.authenticate = (req, res) => {
    VetServices.authenticate(req.body).then(result =>
      res.status(result.status).send(result.payload)
    );
  };

  exports.register = async (req, res) => {
    VetServices.register(req.body).then(result =>
      res.status(result.status).send(result.payload)
    );
  };

  exports.delete = (req, res) => {
        VetServices.delete(req, result => {
            result.success ? res.status(200).send(result) : res.status(404).send(result)
        })
    };

    exports.editVet= (req, res) => {

    VetServices.editVet(req, (result) => {
      result.success
        ? res.status(200).send(result)
        : res.status(404).send(result);
    });
  };
  exports.getAllVet = (req, res) => {
    VetServices.getAllVet(req, result => {
      result.success ? res.status(200).send(result)
        : res.status(404).send(result);
    })
  };

	exports.getHoursByVet = (req, res) => {
		VetServices.getHoursByVet(req, (result) => {
			result.success
				? res.status(200).send(result)
				: res.status(404).send(result);
		});
	};

  exports.takeAppointment = (req, res) => {
    VetServices.takeAppointment(req, (result) => {
      result.success
        ? res.status(200).send(result)
        : res.status(404).send(result);
    });
  };

  exports.cancelAppointment = (req, res) => {
    VetServices.cancelAppointment(req, (result) => {
      result.success
        ? res.status(200).send(result)
        : res.status(404).send(result);
    });
  };


