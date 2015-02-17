var mongoose = require("mongoose"),
    Schema = mongoose.Schema,

    userSchema = new Schema({
      email : String,
      password : String
    });


exports.user = mongoose.model("user", userSchema);

