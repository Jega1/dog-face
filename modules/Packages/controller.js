const PackServices = require ("./service");



exports.getAllPack = (req, res) => {
    PackServices.getAllPack(req, result => {
      result.success ? res.status(200).send(result) : res.status(404).send(result)
    })
  };


  exports.getAllLessByIdPack = (req, res) => {
    PackServices.getAllLessByIdPack(req, result => {
      result.success ? res.status(200).send(result) : res.status(404).send(result)
    })
  };

