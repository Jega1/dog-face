const UserQueries = require("./query");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../../config/keys");
const Queries = require("./query");
const HttpError = require('../../models/http-error');





exports.authenticate = async (body) => {
  let { email, password } = body;
  let user;
  if (typeof email !== "string" || typeof password !== "string") {
    return {
      status: 400,
      payload: {
        success: false,
        message: "All fields are required and must be a string type",
      },
    };
  }
  try{
     user = await UserQueries.getByEmail(email);

  if (user.length==0) {
    return {
      status: 403,
      payload: { success: false, message: "Username not found" },
    };
  }
}catch(err){

}
let passwordMatched;
try{
  passwordMatched = await bcrypt.compare(password,user[0].password);

}catch(err){

}


  if (passwordMatched) {
    let token;
    try{
      token =  jwt.sign(
        { id: user.id, role: user.user_role },
       config.secret,             //a voir
        {expiresIn: '1h'}
      );
    }catch(err){
      // const error=  new HttpError('Signing up failed please try again',500);
      // return next(error);
    }


    const { password, ...userWithoutPassword } = await user;
    return {
      status: 200,


      payload: {
        success: true,

        message: "User correctly authenticated",
        data: { token: token, user: userWithoutPassword, expiresIn: "3600", },
      },
    };
  }
  return {
    status: 403,
    payload: { success: false, message: "Username & password missmatch" },
  };
};

exports.getUser =    (req, callback) => {
  UserQueries.getUser(req,
      response => {
        return callback({ success: true, message: response });
      },
      error => {
        return callback({ success: false, message: error });
      });
  };


  exports.getUserVet = (req, callback) => {
    UserQueries.getUserVet(req,
      response => {
        return callback({ success: true, message: response });
      },
      error => {
        return callback({ success: false, message: error });
      });
  };





  exports.register = async (body) => {

    let { username, email, password,telephone,is_veterinary, address, code_postal,ville,longitude, latitude} = body;


    if (
      typeof username !== "string" ||
      typeof email !== "string" ||
      typeof password !== "string"

    ) {
      return {
        status: 400,
        payload: {
          success: false,
          message: "All fields are required and must be a string type",
        },
      };
    }
    try{
      const user = await Queries.getByUserEmail(email);



    if (user) {
      return {
        status: 403,
        payload: { success: false, message: "Username existe" },
      };
    }
  }catch(err){
    console.log(err)
  }
     return bcrypt
      .genSalt()
      .then((salt) => bcrypt.hash(password, salt))
      .then((hashedPassword) =>{
        UserQueries.register({ username,email,hashedPassword,telephone,is_veterinary,address,code_postal,ville,longitude,latitude })
      })


      // UserQueries.register({ username,email,hashedPassword,is_veterinay,address_cabinet,code_postal,ville,longitude,latitude }))

   .then((user) => ({

        status: 201,
        payload: { success: true, message: "User successfully registered" },

      }))
      .catch((err) => ({

        status: 400,
        payload: { success: false, message: err },
      }));
  };










  exports.delete = (req, callback) => {
    Queries.delete(
      req.params.id,
      (response) => {
        return callback({
          success: true,
          message: "user deleted",
          data: response,
        });
      },
      (error) => {
        return callback({ success: false, message: error });
      }
    );
  };

  exports.editUser1 = (req, callback) => {
      console.log(req.body.password);
   return bcrypt
      .genSalt()
  .then((salt) => bcrypt.hash(req.body.password, salt))
     .then((hashedPwd) => {
       req.body.password = hashedPwd;
         console.log("After hashed : ",req.body.password);
          Queries.editUserA(
      req,
      (response) => {
        return callback({ success: true, message: response });
      },
      (error) => {
        return callback({ success: false, message: error });
      }
    );
       })

  };



  exports.editUser = (req, response) => {
   const user = Queries.editUser(req);
     return response({ success: true, message: "USER  details updated" });
    };



