$(window).on('load', function () {
    console.log("Loaded");
    $(".loader-container").fadeOut(1000);
    $("body").css("overflow", "auto");
    
});
$(function(){

    isPaused = true;

    // Launch loader
    $(".loader").show();

    // Close loader on load
    
    $(".text-color-dot span").css("height", $(".text-color-dot span").css("width"));

    $(".video-button").on("click", function() {
        playPromoHandler();
    });

    $(".video-button-container").on("click", function() {
        pausePromoHandler();
    });
});

function playPromoHandler() {
    if ($("#promo-video")[0].paused) {
        isPaused = false;
        $(".video-button-container").animate({
            opacity: 0
        }, { duration: 1000, queue: false });

        $(".logo-container").animate({
            marginTop: "0%",
            opacity: 0
        }, { duration: 1000, queue: false, complete: function(){
            if(!isPaused)
                togglePromoPlay();
        }});
    }
}

function pausePromoHandler() {
    if (!$("#promo-video")[0].paused) {
        isPaused = true;
        $(".video-button").show();
        $(".video-button-container").animate({
            opacity: 1
        }, { duration: 1000, queue: false });

        $(".logo-container").animate({
            marginTop: "10%",
            opacity: 1
        }, { duration: 1000, queue: false, complete: function(){
            if(isPaused) {
                $(".video-button").show();
                togglePromoPlay();
            }
        }});
    }
}

function togglePromoPlay() {
    if ($("#promo-video")[0].paused) {
        $(".video-button").hide();
        $("#promo-video")[0].play();
    } else {
        $("#promo-video")[0].pause();
    }
}