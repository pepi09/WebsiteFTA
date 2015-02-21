var
    app = require("express")(),
    http = require("http").Server(app),
    io = require("socket.io")(http),
    Question = require("./controllers/question.js"),
    all_questions = [];

io.on("connection", function(socket){
  console.log("connected");

//Question.populate();

socket.on("question", function(data){
    console.log(data.author + ":  " + data.question);
     Question.create(data.author, data.question);

  })
})

http.listen(3000, function(){
  console.log('listening on localhost:3000');
});

