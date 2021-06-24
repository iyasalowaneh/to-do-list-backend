const express = require("express");
const cors = require("cors");
const db = require("./db/models");
const tasksRoutes = require("./routes/tasksRoutes");
const app = express();
app.use(cors());

app.use(express.json());

app.use("/tasks", tasksRoutes);

db.sequelize.sync();
//db.sequelize.sync({ alter: true });
//db.sequelize.sync({ force: true });

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
  });
});

app.use((req, res, next) => {
  res.status(404).json({ message: "Path not found" });
});

app.listen(8000);
