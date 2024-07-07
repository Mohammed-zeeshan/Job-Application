const { Sequelize } = require('sequelize');

const sequelize = require('../util/database');

const Profile = sequelize.define('profile', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    fname: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type:Sequelize.STRING,
        allowNull:false,
        unique: true,
    },
    skills: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    degree: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    branch: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    percentage: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
}, {tableName: 'profile'});

module.exports = Profile;