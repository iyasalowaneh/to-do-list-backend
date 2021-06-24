const {
  taskCreat,
  toDoTask,
  taskUpdate,
  taskDelete,
  fetchTask,
} = require("../controllers/tasksController");
const express = require("express");

const router = express.Router();

router.param("taskId", async (req, res, next, taskId) => {
  const task = await fetchTask(taskId, next);
  if (task) {
    req.task = task;

    next();
  } else {
    const err = new Error("task not found");
    err.status = 404;
    next(err);
  }
});

router.get("/", toDoTask);

router.post("/", taskCreat);

router.delete("/:taskId", taskDelete);
router.put("/:taskId", taskUpdate);

module.exports = router;
