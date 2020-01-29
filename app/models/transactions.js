const sequelize = require('../config/connection.js');
const Sequelize = require('sequelize')


module.exports = function(sequelize, DataTypes){
    var transaction= sequelize.define("transaction", {
        routeName: Sequelize.STRING, 
    // user: Sequelize.STRING,  should this be added to be able to join the user to further data?
        recipient: Sequelize.STRING, 
        date: Sequelize.DATE,
        amount: Sequelize.INTEGER, 
    })
    return transaction;
};