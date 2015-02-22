var
    app = require("express")(),
    http = require("http").Server(app),
    io = require("socket.io")(http),
    Question = require("./controllers/question.js"),
    User = require("./controllers/user.js"),
    mongoose = require("mongoose");

io.on("connection", function(socket){
  console.log("connected");

  socket.on("question", function(data){
       Question.create(data.author, data.question, function(){
          console.log("before refresh");
          socket.emit("new_question",{});
       });
  });

  socket.on("login", function(data){
    User.validate(data.name, data.password, function(result){
      if (result.name !== undefined){
        socket.emit("validate", "successful");
      }
      else {
        socket.emit("validate", "unsuccessful");
      }
    });
  });

  socket.on("register", function(data){
    User.create(data.name, data.password, function(result){
      socket.emit("reg_complete", result);
    });
  });

  socket.on("show_all", function(data){
    Question.populate(function(questions){
      socket.emit("all_questions", questions);
    });
  });

});



http.listen(8000, function(){
    console.log('listening on localhost:8000');
  });
