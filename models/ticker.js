module.exports = function(sequelize, Sequelize){
    const Ticker = sequelize.define('ticker', {
        id: {
            autoIncrement: true, 
            primaryKey: true, 
            type: Sequelize.INTEGER
        }, 
        tickerSymbol: {
            type: Sequelize.STRING
        }, 
        price: {
            type: Sequelize.DECIMAL(10,2)
        }, 
        status: {
            type: Sequelize.STRING
        }, 
        ratio: {
            type: Sequelize.STRING
        }
    });
    return Ticker;
  }
  
  