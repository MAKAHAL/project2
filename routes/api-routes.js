var db= require("../models");
var passport= require("../config/passport");

module.exports = function(app){
    //if he enters wrong info he will be sent to the members page
    app.post("/api/login", passport.authenticate("local"), function(req, res){

res.json("/members");
    });
    

//this is for signing up the user if he was successful then he'll be logged in otherwise he'll have an error




app.post("/api/signup", function(req, res){
    console.log(req.body);
    db.user.create({
        email:req.body.email,
        password:req.body.password
    }).then(function(){
        res.redirect(307, "/api/login");
    }).catch(function(error){

        console.log(error);
        res.json(error);
    });
});
//now this is for loggin out the user

app.get("logout", function(req, res){

    req.logout();
    res.redirect("/");
});
//this is for the client side
app.get("/api/user_data", function(req,res){
    if (!req.user){
        //send back empty obj if not logged in
        res.json({});
    }
    else{
        //sending back a password, even a hashed password, isn't a good idea
        res.json({
            email:req.user.email,
            id:req.user.id
        });
    }

});
};
