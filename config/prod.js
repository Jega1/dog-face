
require('dotenv').config();
 module.exports ={


   user : process.env.DB_USER,
  password: process.env.DB_PASSWORD,
   database: process.env.DB_NAME,
  host: process.env.HOST,
  port: process.env.DB_PORT,

   secret: process.env.SECRET,

   publicKey:process.env.PUBLIC_KEY_IMAGE,
   privateKey:process.env.PRIVATE_KEY_IMAGE,
   urlEndpoint:process.env.URL_END_POINT_IMAGE
 }
