var mongoose = require("mongoose"),
    Schema = mongoose.Schema,

    questionSchema = new Schema({
      author : String,
      body : String,
    });

exports.question = mongoose.model("question", questionSchema);
