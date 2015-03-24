"use strict"
$(function(){
var
  socket = new io("http://localhost:8000");
  // source = $("#template").html(),
  // template = Handlebars.compile(source),
  // context = {},
  // html;

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

// $("#forum").on("click",function(){
//   hide();
//   context = { main_body : };
//    html = template(context);
//   $("#main").append(html);
// })

socket.on("validate",function(data){
  $(".msg").show();
  $(".msg").text("Login " + data + "!");
});

socket.on("reg_complete", function(data){
  $(".msg").show();
  $(".msg").text(data);
})

function hide(){
  $(".img, .field, .btn, .msg").hide();
}
});

