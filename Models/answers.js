var mongoose = require("mongoose"),
    Schema = mongoose.Schema,

    answerSchema  = new Schema({
      author : String,
      body : String,
      qNumber : Number
    });

exports.answer = mongoose.model("answer", answerSchema);
