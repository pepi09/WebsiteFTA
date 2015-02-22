var User = require("../models/users"),
    mongoose = require("mongoose"),
    url = "mongodb://localhost/forum";

function create(name, pass, cb){
      var user = new User({
      name : name,
      password : pass
    });

  mongoose.connect(url);
  var db = mongoose.connection;
    db.once('open', function (callback) {
      User.find({name : name, password : pass}, function(err, result){
        if (result.length !== 0){
          cb("Username taken");
          db.close();
        }
        else{
            user.save(function(err,saved){
              if (err) {
                console.log("Error " + err);
              }
              console.log("New user! ");
              cb("Registration successful");
              db.close();
            });
          }
      });
    });
}



function validate(name, pass, cb){
  mongoose.connect(url);
  var db = mongoose.connection;
    db.once('open', function (callback) {
    User.find({name : name, password : pass}, function(err, user){
      cb(user);
      db.close();
    });
  });
};

module.exports = {
  create : create,
  validate : validate,
}



