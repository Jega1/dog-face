const TrainningServices = require ("./service");



exports.getAll = (req, res) => {
		TrainningServices.getAll(req, (result) => {
			result.success
				? res.status(200).send(result)
				: res.status(404).send(result);
		});
	};

  exports.registerTraining = (req, res) => {
        TrainningServices.registerTraining(req, result => {
            result.success
                ? res.status(201).send(result)
                : res.status(404).send(result)
        })
	};

  exports.editTraining = (req, res) => {
    TrainningServices.editTraining(req, (result) => {
         result.success
        ? res.status(200).send(result)
        : res.status(404).send(result);
    });
  };


