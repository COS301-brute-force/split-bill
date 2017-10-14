$(function(){

    var scriptElement = document.createElement("script");
    scriptElement.src = "https://www.youtube.com/iframe_api";
    var firstScriptElement = document.getElementsByTagName("script")[0];
    firstScriptElement.parentNode.insertBefore(scriptElement,firstScriptElement);
    
    player = null;
    apiReady = false;
    isPaused = true;

    $(".video-button").on("click", function() {
        playPromoHandler();
    });

    $(".video-button-container").on("click", function() {
        pausePromoHandler();
    });

    function onYouTubeIframeAPIReady() {
        apiReady = true;
        player = new YT.Player('player', {
            height: '1280',
            width: '720',
            videoId: 'SYeJnMEnclk',
            events: {
                'onReady': alert,
                'onStateChange': onPlayerStateChange
            }
        });

    }

    function alert() {
        console.log("READY");
    }

    function onPlayerStateChange(event) {
        
            if((YT.PlayerState.ENDED || event.data == YT.PlayerState.PAUSED ) && !isPaused) {
                pausePromoHandler();
            } else if(YT.PlayerState.PLAYING && isPaused) {
                playPromoHandler();
            }
        
        }
        
        function playPromoHandler() {
            if (apiReady && (player.getPlayerState() == -1 || player.getPlayerState() == 2 || player.getPlayerState() == 0)) {
                isPaused = false;
                $(".video-button-container").animate({
                    opacity: 0
                }, { duration: 1000, queue: false });
        
                $(".logo-container").animate({
                    marginTop: "0%",
                    opacity: 0
                }, { duration: 1000, queue: false, complete: function(){
                    if(!isPaused)
                        playPromo();
                }});
            }
            // if ($("#promo-video")[0].paused) {
            //     isPaused = false;
            //     $(".video-button-container").animate({
            //         opacity: 0
            //     }, { duration: 1000, queue: false });
        
            //     $(".logo-container").animate({
            //         marginTop: "0%",
            //         opacity: 0
            //     }, { duration: 1000, queue: false, complete: function(){
            //         if(!isPaused)
            //             togglePromoPlay();
            //     }});
            // }
        }
        
        function pausePromoHandler() {
            if (apiReady && (player.getPlayerState() == 1 || player.getPlayerState() == 3)) {
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
                        pausePromo();
                    }
                }});
            }
            // if (!$("#promo-video")[0].paused) {
            //     isPaused = true;
            //     $(".video-button").show();
            //     $(".video-button-container").animate({
            //         opacity: 1
            //     }, { duration: 1000, queue: false });
        
            //     $(".logo-container").animate({
            //         marginTop: "10%",
            //         opacity: 1
            //     }, { duration: 1000, queue: false, complete: function(){
            //         if(isPaused) {
            //             $(".video-button").show();
            //             togglePromoPlay();
            //         }
            //     }});
            // }
        }
        
        function playPromo() {
            if (player.getPlayerState() == -1 || player.getPlayerState() == 2 || player.getPlayerState() == 0) {
                $(".video-button").hide();
                player.playVideo();
                // $("#promo-video")[0].play();
            }
        }
        
        function pausePromo() {
            if (player.getPlayerState() == 1) {
                player.pauseVideo();
                // $("#promo-video")[0].pause();
            }
        }

});

