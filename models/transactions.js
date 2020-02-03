module.exports = function(sequelize, Sequelize){
    const Transaction = sequelize.define('transaction', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        username: {
            type: Sequelize.STRING, 
            notEmpty: true
        }, 
        contactName: {
            type: Sequelize.STRING, 
            notEmpty: true
        }, 
        date: {
            type: Sequelize.DATE
        }, 
        amount: {
            type: Sequelize.DECIMAL(10,2)
        }, 
        type: {
            type: Sequelize.STRING
        }, 
        message: {
            type: Sequelize.STRING
        }, 
        accountBalance: {
            type: Sequelize.DECIMAL(10,2)
        }
    });

    return Transaction;
}
