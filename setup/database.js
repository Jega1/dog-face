const mysql = require("mysql2");
const databaseConfig = require("../config/keys");

const connection = mysql.createPool({
	host: databaseConfig.host,
	user: databaseConfig.user,
	password: databaseConfig.password,
	database: databaseConfig.database,
	port: databaseConfig.port,
	socketPath: databaseConfig.socketPath
});

//  connection.getConnection((err) => {
//  	if (err) {
//  		console.error("error connecting: " + err.stack);
// 		return;
//  	}

//    console.log("connected as id " + connection.threadId);

 //});

module.exports = connection;
