// model purpose : Defines data models or schemas for database integration
const mongoose = require("mongoose"); // import mongoose
const schema = mongoose.Schema; // shortcut to access mongoose schema

// Define the schema for task based UI
const taskSchema = new schema({
  title: String, // title of the task
  description: String, // Description of the task
  tags: String, // tag associated with the task "urgent" or "important"
});

module.exports = mongoose.model("task", taskSchema); // Export the model to be used for request operations in the controller
