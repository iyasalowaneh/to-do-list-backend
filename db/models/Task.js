const SequelizeSlugify = require("sequelize-slugify");

module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define("Task", {
    name: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
    deadLine: { type: DataTypes.DATE },
    status: { type: DataTypes.BOOLEAN },
    priority: {
      type: DataTypes.STRING,
      defaultValue: "medium",
    },

    slug: {
      type: DataTypes.STRING,
      unique: true,
    },
  });
  SequelizeSlugify.slugifyModel(Task, { source: ["name"] });
  return Task;
};
