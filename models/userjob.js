const { Sequelize } = require('sequelize');

const sequelize = require('../util/database');

const Userjob = sequelize.define('userjob', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
}, {tableName: 'userjob'});

module.exports = Userjob;