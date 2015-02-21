var
    app = require("express")(),
    http = require("http").Server(app),
    io = require("socket.io")(http),
    Question = require("./controllers/question.js"),
    User = require("./controllers/user.js"),
    all_questions = [];

io.on("connection", function(socket){
  console.log("connected");

Question.populate();

socket.on("question", function(data){
     Question.create(data.author, data.question);
});

socket.on("login", function(data){
  var validate = User.validate(data.name, data.password);
  validate.then(function(result){
    console.log(result);
    socket.emit("validate", validate);
  });
});

socket.on("register", function(data){
  User.create(data.name, data.password);
});



})
http.listen(3000, function(){
  console.log('listening on localhost:3000');
});

