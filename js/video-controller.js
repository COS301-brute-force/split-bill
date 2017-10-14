$(function(){
    
    isPaused = true;

    $(".video-button").on("click", function() {
        playPromoHandler();
    });

    $(".video-button-container").on("click", function() {
        pausePromoHandler();
    });

});

function playPromoHandler() {

    if (isPaused) {
        
        $(".video-button-container").animate({
            opacity: 0
        }, { duration: 1000, queue: false });

        $(".logo-container").animate({
            marginTop: "0%",
            opacity: 0
        }, { duration: 1000, queue: false, complete: function(){
            if(isPaused) {
                isPaused = false;
                playPromo();
            }
        }});
    }
}

function pausePromoHandler() {

    if (!isPaused) {
        $(".video-button").show();
        $(".video-button-container").animate({
            opacity: 1
        }, { duration: 1000, queue: false });

        $(".logo-container").animate({
            marginTop: "10%",
            opacity: 1
        }, { duration: 1000, queue: false, complete: function(){
            if(!isPaused) {
                isPaused = true;
                $(".video-button").show();
                pausePromo();
            }
        }});
    }
}

function playPromo() {
    if(!isPaused) {
        $("iframe")[0].contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        $(".video-button").hide();
        // $("#promo-video")[0].play();
    }
}

function pausePromo() {
    if(isPaused) {
        $("iframe")[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        // $("#promo-video")[0].pause();
    }
}
