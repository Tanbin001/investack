$(document).ready(function()
{

    $("#purchase-btn").click(function(){
  
        $(".first-h1").slideToggle(500);
  
    });
    $("#explore-btn").click(function(){
  
        $(".first-h3").slideToggle(500);
  
    });
    $(".feature-text").hover(function()
    {
        $("#dash").addClass("con");}, 
        function(){
        $("#dash").removeClass("con");
    });
    // $("#dash, #dash1").css({
        //     "animation": "flip",
        //     "animation-duration": "4s",
        //     "font-size": "50px",
        //     "transition": "2s ease-in-out"
        // });

});