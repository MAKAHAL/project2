// const exports = module.exports = {}
// Makah: I did that because exports was already declared and when changed from var to const it errors out 
 
module.exports.signup = function(req, res) {
    res.render('signup');
}
 
module.exports.signin = function(req, res) {
    res.render('signin');
}
 
 
module.exports.dashboard = function(req, res) {
    res.render('home');
}

module.exports.logout = function(req, res) {
  req.session.destroy(function(err) {
    res.redirect('/');
  });

}
