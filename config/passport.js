
//
//

var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");


// so we can login with the username/email and password

passport.use(new LocalStrategy(
    {
        usernameField:"email"
        //so the user is gonna use emial not username
    },
    function( email, password, done){
        db.user.FindOne({
            where:{
                //when the user signs is the will show up
                email:email
            }
        }).then(function(dbuser){
            //incorrect email if we can't find the email. 

            if(!dbuser){
                return done(null, false,{
                    message:"incorrect email. try again"
                });
            }
// if the user enters a wrong password but correct email
             else if(!dbuser.validPassword(password)){
                 return done(null, false,{
                     message:"incorrect password. try again"
                 });
             }

             //if non return the user
             return done(null, dbuser);
            });
        }


));

//this part so the above part can work "sequelize and http requests"

passport.serializeUser(function(use, cb){
    cb(null, user);

});

passport.deserializeUser(function(obj, cb){
    cb(null, obj);


});
        
        
    module.exports = passport;    
        
        

    
    
    


