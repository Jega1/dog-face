
// import bodyParser from "body-parser";
// import cookieParser from "cookie-parser";
// import morgan from "morgan";
// import router from "./router";

// const serverInitialisation = (server) => {
// 	console.info("SETUP - Loading modules...");
// 	//console.log(process.env)
// 	server.use(bodyParser.json());
// 	server.use(bodyParser.urlencoded({ extended: false }));

// 	// Request body cookie parser
// 	server.use(cookieParser());

// 	server.use(morgan("tiny"));
// 	// Enable CORS
// 	server.use(function (req, res, next) {
// 		res.header("Access-Control-Allow-Origin", "*");
// 		res.header(
// 			"Access-Control-Allow-Headers",
// 			"Origin, X-Requested-With, Content-Type, Accept"
// 		);
// 		res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
// 		res.setHeader("Access-Control-Allow-Credentials", true);
// 		next();
// 	});

// 	// server.use("/dist", express.static("src/dist"));

// 	// Initializing our routes
// 	router(server);
// };

// export default serverInitialisation;
