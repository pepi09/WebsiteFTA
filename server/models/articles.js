var mongoose = require("mongoose"),
    Schema = mongoose.Schema,

    articleSchema = new Schema({
      title : String,
      body : String,
      author : {
        type : Schema.ObjectID,
        ref : "users"
      }
    });

exports.article = mongoose.model("article", articleSchema);
