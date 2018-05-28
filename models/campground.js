var mongoose = require("mongoose");

var campgroundSchema = new mongoose.Schema({
   name: String,
   image: String,
   description: String,
   price: String,
   author: {
      id: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User"
      },
      username: String,
      name: String,
      mobilenumber: String,
      homeaddress: String
   },
   comments: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Comment"
      }
   ],
   bookings: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Booking"
      }
   ]
});

module.exports = mongoose.model("Campground", campgroundSchema);
