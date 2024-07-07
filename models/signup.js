const { Sequelize } = require('sequelize');

const sequelize = require('../util/database');

const SignUp = sequelize.define('signup', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: Sequelize.STRING,
    email: {
        type:Sequelize.STRING,
        allowNull:false,
        unique: true,
    },
    password: Sequelize.STRING,
}, {tableName: 'signup'});

module.exports = SignUp;