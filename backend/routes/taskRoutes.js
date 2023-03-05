const express = require("express");
const Task = require("../models/taskModel");
const router = express.Router();
const {
  createTask,
  getTask,
  getATask,
  deleteTask,
  updateTask,
} = require("../controllers/taskController");

router.post("/", createTask);
router.get("/", getTask);
router.get("/:id", getATask);
router.delete("/:id", deleteTask);
router.put("/:id", updateTask);

//alternate methode of calling the routes(refactoring)
// router.route("/").get(getTask).post(createTask);
// router.route("/:id").get(getATask).delete(deleteTask).put(updateTask);

module.exports = router;
