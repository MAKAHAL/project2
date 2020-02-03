const db = require('../models');

console.log(db);
module.exports = function (app) {

    console.log(db);
    console.log(db.Contact);

    app.get('/', function (req, res) {
        res.render('first');
    });

    app.get('/signin', function (req, res) {
        res.render('signin');
        // client.sms.message(callback, '+8329023510', 'Someone logged into your account', 'MKT');
    });

    app.get('/signup', function (req, res) {
        res.render('signup');
        // client.sms.message(callback, '+8329023510', 'Thank you for signing up', 'MKT');
    });

    app.get('/logout', function (req, res) {
        res.render('logout');
    });

    app.get('/chat', function (req, res) {
        res.render('chat');
    });


    app.get('/api/contact', function (req, res) {
        db.contact.findAll()
            .then(function (dbContact) {
                res.json(dbContact);
            });
    });

    app.get('/api/contact', function (callback) {
        db.contact.findAll()
            .success(function (contact) {
                callback(contact);
            }).error(function (err) {
                callback(null);
            });
    });

    app.get('/api/transaction', function (req, res) {
        db.transaction.findAll({})
            .then(function (dbTrans) {
                res.json(dbTrans);
            });
    });

    app.get('/api/transaction', function (callback) {
        db.transaction.findAll({})
            .success(function (trans) {
                callback(trans);
            }).error(function (err) {
                callback(null);
            });
    });

    app.get('/api/:ticker?', function (req, res) {
        if (req.params.ticker) {
            db.ticker.findOne({
                where: {
                    tickerSymbol: req.params.ticker
                }
            }).then(function (tick) {
                res.json(tick);
            });
        }
    });

    app.get('/api/balance', function(req, res){
        db.balance.findAll({})
        .then(function(dbBal){
            res.json(dbBal);
        });
    });

    app.get('/api/balance', function(req, res){
        db.balance.findAll({})
        .success(function (bal) {
            callback(bal);
        }).error(function (err) {
            callback(null);
        });
    });


    app.post('/api/contact', function (req, res) {
        db.contact.create({
            username: req.body.username,
            contactName: req.body.contactName,
            phoneNumber: req.body.phoneNumber,
            email: req.body.email
        });
    });

    app.post('/api/transaction', function (req, res) {
        db.transaction.create({
            username: req.body.username,
            contactName: req.body.contactName,
            amount: req.body.amount,
            type: req.body.type,
            message: req.body.message
        });
    });



    app.put('/api/balance', function(req, res){
        db.balance.update(
            { accountBalance: req.body.accountBalance},
            { where: {id: 1}}
            ).success (result =>
                handleResult(result))
                .error(err =>
                    handleError(err));
    });


};