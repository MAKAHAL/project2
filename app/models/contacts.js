const sequelize = require('../config/connection.js');
const Sequelize = require('sequelize')


module.exports = function(sequelize, DataTypes){
    var contact= sequelize.define("contact", {
        routeName: Sequelize.STRING, 
        name: Sequelize.STRING,
        phoneNumber: Sequelize.INTEGER,
        email: Sequelize.STRING
    })
    return contact;
};


