const Sequelize = require('sequelize');

const sequelize = new Sequelize('banki', 'root', '', {
    host: 'localhost', 
    password: "JayPark0*", 
    port: 3306, 
    dialect: 'mysql', 
    pool: {
        max: 5, 
        min: 0, 
        idle: 10000
    }
});

module.exports= sequelize;