var express = require("express");
var router  = express.Router({mergeParams: true});
var Campground = require("../models/campground");
var Comment = require("../models/comment");
var Booking = require("../models/booking");
var middleware = require("../middleware");

//NEW- create new booking
router.post("/",middleware.isLoggedIn,function(req, res){
  Campground.findById(req.params.id, function(err, campground){
      if(err){
          console.log(err);
          res.redirect("/campgrounds");
      } else {
        var newBooking = {};
       Booking.create(newBooking, function(err, booking){
          if(err){
              req.flash("error", "Something went wrong");
              console.log(err);
          } else {
              //add username and id to comment
              booking.author.id = req.user._id;
              booking.author.username = req.user.username;
              booking.author.name = req.user.name;
              booking.author.mobilenumber = req.user.mobilenumber;
              booking.author.cnicnumber = req.user.cnicnumber;
              booking.author.homeaddress = req.user.homeaddress;
              //save comment
              booking.save();
              campground.bookings.push(booking);
              console.log("pushed into campground")
              campground.save();
              console.log(booking);
              req.flash("success", "Success! Please bring this ID at departure: "+ booking._id);
              res.redirect('/campgrounds/' + campground._id);
          }
       });
      }
  });
});

//Retrieving bookings for dashboard
router.get("/", middleware.checkCampgroundOwnership, function(req, res){
    Campground.findById(req.params.id).populate("bookings").exec(function(err, foundCampground){
        res.render("campgrounds/bookings", {campground: foundCampground});
    });
});

module.exports = router;
