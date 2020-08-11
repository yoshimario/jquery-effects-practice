$(document).ready(function() {
  $(".clickable").click(function() {
    $("#initially-showing").fadeOut();
    $("#initially-hidden").fadeIn();  
  });
});