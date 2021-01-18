const UserServices = require("./service");




exports.authenticate = (req, res) => {
  UserServices.authenticate(req.body).then(result =>
    res.status(result.status).send(result.payload)

  );

};



exports.getUser= (req, res) => {
    UserServices.getUser(req,  result => {
      result.success ? res.status(200).send(result) : res.status(404).send(result)
    })
  };

  exports.getUserVet= (req, res) => {
    UserServices.getUserVet(req, result => {
      result.success ? res.status(200).send(result) : res.status(404).send(result)
    })
  };


  exports.register =  (req, res) => {
    UserServices.register(req.body).then((result) =>
      res.status(result.status).send(result.payload)
    );
  };





  exports.delete = (req, res) => {
        UserServices.delete(req, result => {
            result.success ? res.status(200).send(result) : res.status(404).send(result)
        })
    };

    exports.editUser=(req, res) => {
      UserServices.editUser(req, (result) => {
        result.success
          ? res.status(200).send(result)
        : res.status(404).send(result);
    });
  };





