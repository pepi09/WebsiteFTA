"use strict"
var Question = require("../models/questions").question;


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
//    var all_questions;

//   all_questions = Question.populate(all_questions,{path : "question"},function (err, user) {
//   console.log(user);
// });
//   console.log("allQ " + all_questions[0]);
//   return all_questions;
 //console.log("pop");
  // Question.find().populate("question").exec(function(err,results){
  //   console.log(results);
  // });
// var query = Question.find({name : "pepa"},null,function (err, docs) {
//   console.log("kjsdlk");
//   console.log(docs);
// });
// query.exec();
};

module.exports = {
  create : create,
  populate : populate,
}
