"use strict"
var Question = require("../models/questions"),
    mongoose = require("mongoose"),
    url = "mongodb://localhost/forum"

function create(author, question){
  var q = new Question({
    author : author,
    body : question
  });
  mongoose.connect(url);
  var db = mongoose.connection;
    db.once('open', function (callback) {

    q.save(function(err,saved){
      if (err) {
        console.log("Error saving question! " + err);
      }
      db.close();
    })
  });
  console.log("New question asked!");
}


function populate(cb){
  mongoose.connect(url);
  var db = mongoose.connection;
  db.once('open', function (callback) {

    Question.find({}, function(err, questions){
      cb(questions);
      db.close();

    });
  })

}

module.exports = {
  create : create,
  populate : populate,
}
