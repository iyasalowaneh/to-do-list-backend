const { Task } = require("../db/models");

exports.fetchTask = async (taskId, next) => {
  try {
    const task = await Task.findByPk(taskId);
    return task;
  } catch (error) {
    next(error);
  }
};

exports.taskCreat = async (req, res, next) => {
  try {
    const newTask = await Task.create(req.body);
    res.status(201).json(newTask);
  } catch (error) {
    next(error);
  }
};

exports.taskDelete = async (req, res, next) => {
  try {
    await req.task.destroy();
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.taskUpdate = async (req, res, next) => {
  try {
    await req.task.update(req.body);
    res.status(201).json(req.task);
  } catch (error) {
    next(error);
  }
};

exports.toDoTask = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (error) {
    next(error);
  }
};
