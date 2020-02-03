'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'tickers',
    [
      {
        tickerSymbol: 'SNAP', 
        price: 18.38, 
        status: 'Bullish', 
        ratio: 'P/E Ratio 45', 
        createdAt: new Date(), 
        updatedAt: new Date()
      }, 
      {
        tickerSymbol: 'AMZN', 
        price: 2008.72, 
        status: 'Bullish', 
        ratio: 'P/E Ratio 13', 
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        tickerSymbol: 'MSFT', 
        price: 170.23, 
        status: 'Bearish', 
        ratio: 'P/E Ratio 31', 
        createdAt: new Date(), 
        updatedAt: new Date()
      },
    ],
    {},
  ),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('tickers', null, {})

};
