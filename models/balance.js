module.exports = function(sequelize, Sequelize){
    const Balance = sequelize.define('balance', {
        id: {
            autoIncrement: true, 
            primaryKey: true, 
            type: Sequelize.INTEGER
        }, 
        name: {
            type: Sequelize.STRING
        }, 
        accountBalance: {
            type: Sequelize.DECIMAL(10,2)
        }
    });

    return Balance;
}