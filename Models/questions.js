var mongoose = require("mongoose"),
    Schema = mongoose.Schema,

    questionSchema = new Schema({
      author : String,
      body : String,
      idNumber : Number
    });

exports.question = mongoose.model("question", questionSchema);
