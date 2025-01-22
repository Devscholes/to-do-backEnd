// ================ Server/host/house =======
// server : The backend runs on a server,Which is a computer or a cluster of a computer that host the website or application
//  It processes REQUESTS from clients and sends back responses

// Types of REQUESTS
// 1 GET REQUESTS E.g to search something on browser
// 2 POST REQUESTS E.g to input your infos on a platform
// 3 DELETE REQUESTS E.g to logout
// 4 PUT/PATCH REQUESTS E.g for put is to edit all info entirely/while patch is for editting some info
require("dotenv").config(); // imported after iinstallation

const express = require("express"); // imported express after installation // step 1 import framework : go to ur toggle write npm init -y and import in your code
const mongoose = require("mongoose"); // imported mongoose used for connecting the databse after installation
const cors = require("cors"); // imported cors after installation

const index = express(); // spining up the express server and give your computer an address number which is called PORT NUMBER

const port = 3000; // defined the port number for the server

// CORS (Cross-Origin-Resource sharing) it means when the fronEnd and backEnd are from the same different origins either by (domains,ports or protocols) and the backEnd hasn't been configured to accept requests from the frontEnd origin

//====== A Midddle Ware ========
// A middleware is like a middle man that processes a request before it reaches the database
index.use(cors());

const taskRouter = require("./routes/taskRouter");
index.use(express.json()); // middleware to parse incoming json requests,from postman allowing access to the body
index.use("/api/task/", taskRouter);

// to start up the server

// connecting mongodb mongoose to our server
const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("Database connected");
    // start the server and listen on the specified port
    index.listen(port, () => {
      console.log(`server is running on port ${port}`);
    });
  } catch (error) {
    //log the error if the database connection fails
    console.log(error);
    console.log("unable to connect");
  }
};
start();

// 1.Model

// jamesboyle171
// SVYyB4OXAQQthALa
// mongodb+srv://jamesboyle171:SVYyB4OXAQQthALa@cluster0.pyfe3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
