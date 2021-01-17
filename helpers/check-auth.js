const HttpError = require("../models/http-error");
const config = require("../config/keys");
const jwt = require('jsonwebtoken');


module.exports = (req, res, next) =>{

    if(req.method === 'GET'){
        return next();
    }

    try {
        const token = req.headers.Authorization.split(' ')[1];   //Authorization: 'Bearer TOKEN

        if(!token){
          console.log("aa"+token)
            throw new Error('Authentication failed');
        }
        const decodedToken = jwt.verify(token, config.secret);
        req.data = {id: decodedToken.id};
        console.log(req.data)
        console.log(req.userData)
        next();
    }
    catch(err){
        const error = new HttpError('Authentication failed', 403);
        next(error);
    }

}
