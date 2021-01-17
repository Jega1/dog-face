const AppointmentServices = require("./service");


exports.getAppointmentByUser = (req, res) => {
    AppointmentServices.getAppointmentByUser(req, result => {
      result.success ? res.status(200).send(result) : res.status(404).send(result)
    })
  };


  exports.confirm = async (req, res) => {
    AppointmentServices.confirm(req.body).then(result =>
      res.status(result.status).send(result.payload)
    );
  };

  exports.cancel = (req, res) => {
        AppointmentServices.cancel(req, result => {
            result.success ? res.status(200).send(result) : res.status(404).send(result)
        })
    };


    exports.getAppointByVet = (req, res) => {
		AppointmentServices.getAppointsByVet(req, (result) => {
			result.success
				? res.status(200).send(result)
				: res.status(404).send(result);
		});
  };

  exports.getAppointsByUser = (req, res) => {
		AppointmentServices.getAppointsByUser(req, (result) => {
			result.success
				? res.status(200).send(result)
				: res.status(404).send(result);
		});
  };


