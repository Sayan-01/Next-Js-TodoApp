import { Schema, model, models } from "mongoose";

const taskSchema = new Schema({
  task: {
    type: String,
    required: [true, "name is required."],
  },
  description: {
    type: String,
    required: [true, "topic is required."],
  },
});

const Task = models.Task || model("Task", taskSchema);

export default Task;
