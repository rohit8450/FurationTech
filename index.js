
//These lines imports the various modules
const db = require("./config/mongoose");
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 8000;
dotenv.config();
const app = express();

//These lines configure the Express application to parse JSON and URL-encoded data from requests. 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//This line mounts the router defined in the "./routes" file at the root path ("/") of the application. 
//It handles all the API routes.
app.use("/", require("./routes"));

//This code starts the Express server, listening on the specified PORT.
// It logs a message to the console when the server starts successfully.
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
