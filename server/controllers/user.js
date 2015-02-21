var User = require("../models/users").user;

var create = function(name, pass){
  var user = new User({
    name : name,
    password : pass
  });

  user.save();
}

module.exports = {
  create : create,
}



