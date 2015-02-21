var User = require("../models/users");

function create(name, pass){
  var user = new User({
    name : name,
    password : pass
  });

  user.save();
}

function validate(name, pass){
  var promise = User.find({name : name, password : pass}).exec();
  return promise;
};

module.exports = {
  create : create,
  validate : validate,
}



