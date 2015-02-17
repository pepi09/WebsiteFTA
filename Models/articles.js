var mongoose = require("mongoose"),
    Schema = mongoose.Schema,

    articleSchema = new Schema({
      author : String,
      title : String,
      body : String
    });

exports.article = mongoose.model("article", articleSchema);
