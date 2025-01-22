// purpose : it maps HTTP routes to controller functions.
const express = require("express"); // imported express frame work
const {
  getAllTask,
  createTask,
  editTask,
  deleteTask,
} = require("../controller/taskController");

// every package you install both in frontEnd and backEnd are objects with keys and values

const router = express.Router(); // Created a new router instance

router.get("/get", getAllTask); // route to get all tasks, handled by getAlltask function in the controller
router.post("/create", createTask); // route to create a new task, handled by createTask function in the controller
router.patch("/:id", editTask);
router.delete("/:id", deleteTask);
module.exports = router; //export the router to be used in the main server file app.js
