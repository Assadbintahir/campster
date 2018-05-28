var express = require("express");
var router  = express.Router();
var passport = require("passport");
var User = require("../models/user");

//root route
router.get("/", function(req, res){
    res.render("landing");
});

// show register form
router.get("/register", function(req, res){
   res.render("register");
});

//handle sign up logic
router.post("/register", function(req, res){
    var newUser = new User({username: req.body.username,
                            name: req.body.name,
                            mobilenumber: req.body.mobilenumber,
                            cnicnumber: req.body.cnicnumber,
                            homeaddress: req.body.homeaddress});
    console.log("In post register");
    console.log("Before registering ==>> "+req.body.name);
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            req.flash("error", err.message);
            return res.render("register");
        }
        passport.authenticate("local")(req, res, function(){
           req.flash("success", "Welcome to Campster " + user.name);
           res.redirect("/campgrounds");
        });
    });
});

//show login form
router.get("/login", function(req, res){
   res.render("login");
});

//handling login logic
router.post("/login", passport.authenticate("local",
    {
        successRedirect: "/campgrounds",
        failureRedirect: "/login"
    }), function(req, res){
      req.flash("success", "Successfully signed in :)");
});

// logout route
router.get("/logout", function(req, res){
   req.logout();
   res.redirect("/");
});



module.exports = router;
