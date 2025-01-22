// ================ Server/host/house =======
// server : The backend runs on a server,Which is a computer or a cluster of a computer that host the website or application
//  It processes REQUESTS from clients and sends back responses

// Types of REQUESTS
// 1 GET REQUESTS E.g to search something on browser
// 2 POST REQUESTS E.g to input your infos on a platform
// 3 DELETE REQUESTS E.g to logout
// 4 PUT/PATCH REQUESTS E.g for put is to edit all info entirely/while patch is for editting some info

// purpose: it handles business logic and processes incoming requests
// Each controllers most have a request and response
//status code : is an HTTP status code there are standardized three digit numbers that indicates the results of a request, is like a communication between the client and the server

// 200 means the request is okay, means a successful request
// 201 Created : it works with a post request
// 404 PAGES NOT FUND: GET REQUEST, the user input a wrong info
// 500 INTERNAL SERVER ERROR :Means there's a problem with the backEnd

const Task = require("../models/taskModel"); //imported taskModel from model into controller

// ============= Controller To Get All Tasks ================
const getAllTask = async (req, res) => {
  const tasks = await Task.find({}); // Reyrieve all tasks from the database
  res.status(200).json({ tasks }); // send the retrieved tasks in a JSON response and a status code of success
};

// / ============= Controller To Create A New Tasks ================
const createTask = async (req, res) => {
  const { title, description, tags } = req.body; // destructure the post request required fields from the request.body of the website

  if (!title) {
    return res.status(400).json({
      message: "Please provide title",
    });
  }
  if (!description) {
    return res.status(400).json({
      message: "Please provide description",
    });
  }
  if (!tags) {
    return res.status(400).json({
      message: "Please choose a tag",
    });
  }
  const task = await Task.create(req.body); // create a new task with the request data
  res.status(201).json({ message: "Task created successfully", task });
};

// ============== Controller For Editting A Task ====================
const editTask = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findOneAndUpdate({ _id: id }, { ...req.body });

  res.status(201).json({ message: "Tasks Updated Successfully" });
};
// ================ Controller For Deleting =============
const deleteTask = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findOneAndDelete({ _id: id });
  res.status(204).json({ message: "Task sucessfully deleted" });
};

module.exports = { getAllTask, createTask, editTask, deleteTask }; // export the controller functions to be used in thhe router
