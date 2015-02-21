"use strict"
$(function(){

  var socket = new io("http://localhost:3000");

$("#question-btn").on("click",function(){
  var author = $("#author").val(),
      question = $("#question").val();
if (author !== "" && question !== ""){
  socket.emit("question", {
    author : author,
    question : question
  })
  $("#question-field").append(author + ":  " + question);
  $("#author").val("");
  $("#question").val("");
}
else {
  $("#question-field").append("Please fill all fields!");
}
});

$("#enter").on("click",function(){
  $("#homeImg").hide();
  $("#log_in").show();
});

$("#logbtn").on("click",function(){
  var username = $("#username").val(),
      password = $("#password").val();
  if(username !== "" && password !==""){
    var shaObj = new jsSHA(password, "TEXT"),
        hashedPass = shaObj.getHash("SHA-1", "HEX");

    socket.emit("login",{
      name : username,
      password : hashedPass
    })

    $("#log_in").hide();
    //put image
  }
  else{
    $("#log_in").append("Type username and password!");
  }
});

socket.on("validate",function(data){
  $("log_in").append("Login successful!");
});

$("#register").on("click", function(){
  $("#homeImg").hide();
  $("#reg").show();
});

$("#regbtn").on("click", function(){
  var username = $("#username").val(),
      password = $("#password").val();
  if(username !== "" && password !==""){
    var shaObj = new jsSHA(password, "TEXT"),
        hashedPass = shaObj.getHash("SHA-1", "HEX");

  socket.emit("register",{
    name : username,
    password : password
  });
}
});


});

