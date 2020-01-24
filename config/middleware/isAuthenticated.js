
module.exports = function( req, res, next){
    //if the user logs in he contiunes
    if(req.user){
        return next();
    }
    //if he doesn't loggin, gonna redirect them to loggin
    return res.redirect("/");
