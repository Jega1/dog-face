const RefServices = require ("./service");


exports.getAllMotif = (req, res) => {
    RefServices.getAllMotif(req, result => {
      result.success ? res.status(200).send(result) : res.status(404).send(result)
    })
  };

  exports.getAllVaccin = (req, res) => {
    RefServices.getAllVaccin(req, result => {
      result.success ? res.status(200).send(result) : res.status(404).send(result)
    })
  };




