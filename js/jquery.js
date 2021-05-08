$(document).ready(function(){

    $("#purchase-btn").click(function(){
  
        $(".first-h1").slideToggle(500);
  
    });
    $("#explore-btn").click(function(){
  
        $(".first-h3").slideToggle(500);
  
    });
    $(".feature-text").hover(function(){

        $(".light").addClass("animate__animated animate__flipInX");
        $(".light").css("fontSize", "20px");

    });
  
  });