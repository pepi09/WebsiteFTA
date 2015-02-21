var mongoose = require("mongoose"),
    Schema = mongoose.Schema,

    questionSchema = new Schema({
      author : String,
      body : String,
    }),

    Question = mongoose.model("question", questionSchema);

module.exports = Question
