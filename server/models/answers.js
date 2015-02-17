var mongoose = require("mongoose"),
    Schema = mongoose.Schema,

    answerSchema  = new Schema({
      author : {
        type : Schema.ObjectID,
        ref : "users"
      },
      question: {
        type : Schema.ObjectID,
        ref : "questions"
      },
      body : String
    });

exports.answer = mongoose.model("answer", answerSchema);
