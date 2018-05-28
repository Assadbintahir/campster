var mongoose = require("mongoose");

var bookingSchema = mongoose.Schema({
    date: {
      type: Date,
      default: Date.now
    },
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String,
        name: String,
        mobilenumber: String,
        cnicnumber: String,
        homeaddress: String
    }
});

module.exports = mongoose.model("Booking", bookingSchema);
