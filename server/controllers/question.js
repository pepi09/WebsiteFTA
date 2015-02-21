"use strict"
var Question = require("../models/questions");


function create(author, question){
  var q = new Question({
    author : author,
    body : question
  });
  q.save(function(err){
    if (err) {
      console.log("Error saving question! " + err);
    }
  })
  console.log("New question asked!");
}


function populate(){
  var query = Question.find().exec();
  query.then(function(res){
    console.log(res);
  })
}

module.exports = {
  create : create,
  populate : populate,
}
