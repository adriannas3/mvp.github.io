
$(document).ready(function(){
  $(".call").click(function(){
    alert("Dial 800-799-7233");
  });
})


$(".sms").click(function(){
  alert("Text START to 88788");
});

let response ="domestic violence";
let response2="signs of abuse";
let response3="receive help";
let response4="plan for safety";
let response5="support others";

$(".searchbutton").click(function(){
  let input = $(".userinput").val();
  if (input === response) {
    $('html, body').animate({
        scrollTop: '+=800'
     }, 2000);
  } else if (input === response2){
    window.open("id.html");
  } else if (input === response3){
    window.open("help.html");
  } else if (input === response4){
    window.open("plan.html");
  } else if (input === response5){
    window.open("https://www.rainn.org/news/how-support-someone-who-experiencing-d");
}
});

$(".source").click(function(){
  window.open("https://ncadv.org/get-help");
});

$(".source2").click(function(){
  window.open("https://www.helpguide.org/articles/abuse/domestic-violence-and-abuse.htm");
});

$(".source3").click(function(){
  window.open("https://www.thehotline.org/support-others/help-for-abusive-behaviors/");
});

$(".source4").click(function(){
  window.open("https://www.benefits.gov/news/article/472");
});

var list = [];
let num;


$(".addNew").click(function() {
    var todo = $(".steps").val();
    list.push(todo);
    $(".planlist").append("<li>" + todo + "</li>");
    $(".numSteps").text(list.length);
    $(".steps").val("");
});

num=0;
$(".clear").click(function() {
  num=num-1;
    $("li:last").remove();
    $(".numSteps").text(list.length+num);
});

$(".support").click(function(){
  window.open("https://www.rainn.org/news/how-support-someone-who-experiencing-domestic-violence");
});





