"use strict"
$(function(){
var socket = new io("http://localhost:8000");

$("#enter").on("click",function(){
  hide();
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
  }
  else{
    $("#log_in").append("<p>Type username and password!<p>");
  }
});

$("#register").on("click", function(){
  hide();
  $("#reg").show();
});

$("#regbtn").on("click", function(){
  var username = $("#regName").val(),
      password = $("#regPass").val();

  if(username !== "" && password !==""){
    var shaObj = new jsSHA(password, "TEXT"),
        hashedPass = shaObj.getHash("SHA-1", "HEX");

  socket.emit("register",{
    name : username,
    password : password
  })
    $("#regName").val("");
    $("#regPass").val("");
  }
  else{
    $("#reg").append("<p>Type username and password!<p>");
  }
});

$("#contacts").on("click",function(){
  hide();
  $("#contactsImg").show();
})

$("#aboutus").on("click",function(){
  hide();
  $("#aboutusImg").show();
})

$("#forum").on("click",function(){
  hide();
  $("#forumBtns").show();
})

$("#newQ").on("click", function(){
  hide();
  $("#quest").show();
});

$("#send").on("click", function(){
  var author = $("#author").val(),
      question = $("#question").val();
  if (author !== "" && question !== ""){
    socket.emit("question", {
      author : author,
      question : question
    })
  }
  else{
    $("#quest").append("<p>Write a question!<p>");
  }
  $("#author").val("");
  $("#question").val("");
});

$("#allQ").on("click", function(){
  $(".img, .field").hide();
  socket.emit("show_all",{});
});

socket.on("all_questions",function(data){
  $("#qbody").text("");
  data.forEach(function(question){
    $("#qbody").append(question.author + " : " + question.body + "<br>");
  })
})

socket.on("validate",function(data){
  $(".msg").show();
  $(".msg").text("Login " + data + "!");
});

socket.on("reg_complete", function(data){
  $(".msg").show();
  $(".msg").text(data);
})

socket.on("new_question", function(data){
  console.log("must refresh");
  $("#allQ").trigger("click");
})

function hide(){
  $(".img, .field, .btn, .msg").hide();
}
});

