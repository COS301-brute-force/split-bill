$(window).on('load', function () {
    console.log("Loaded");
    $(".loader-container").fadeOut(1000);
    $("body").css("overflow", "auto");
    
});
$(function(){

    // Launch loader
    $(".loader").show();

    // Close loader on load
    
    $(".text-color-dot span").css("height", $(".text-color-dot span").css("width"));

    
});