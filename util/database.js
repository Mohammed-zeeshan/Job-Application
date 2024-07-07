const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('jobapplication', 'root', 'redmi4', {
    dialect: "mysql",
    host: 'localhost',
});

module.exports = sequelize;