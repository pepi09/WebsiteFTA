"use strict"
$(function(){
var socket = new io("http://localhost:8000");

$("#forum").on("click",function(){
  hide();
  $("#qbody").text("");
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
;

socket.on("new_question", function(data){
  console.log("new_question");
  $("#allQ").trigger("click");
  $.each(data,function(index){
            context = {
                name : data[index].name,
                input_id : data[index].nameId,
                button_id : data[index].nameId,
            }
            var html = template(context);
            $("#input").append(html);
        });
})

function hide(){
  $(".img, .field, .btn, .msg").hide();
}
});
