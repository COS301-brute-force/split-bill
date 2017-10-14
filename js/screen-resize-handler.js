$(window).on('load', function () {
    if(apiReady)
        fitVideoToViewport();
});

$(function(){
        
    viewportWidth = $(window).width();
    viewportHeight = $(window).height();
    videoRatio = 1.777;

    $(window).resize(function() {
        viewportWidth = $(window).width();
        viewportHeight = $(window).height();
        fitVideoToViewport();
        $(window).scrollTop( currentSection.offset().top);
    });

});

function fitVideoToViewport() {
    var playerHeight  = (parseFloat(viewportWidth) / videoRatio);
    player.setSize(viewportWidth, playerHeight);
    if((parseFloat(viewportWidth) / viewportHeight) > videoRatio) {
        $("#promo-video").css({
            "width": "100vw",
            "height": "auto"
        });
        var topOffset = ($("#promo-video").height() - viewportHeight)/2 * -1;
        $("#promo-video").css({
            "margin-left": "auto",
            "margin-top": topOffset+"px"
        });
    } else {
        $("#promo-video").css({
            "width": "auto",
            "height": "100vh",
        });
        var leftOffset = ($("#promo-video").width() - viewportWidth)/2 * -1;
        $("#promo-video").css({
            "margin-top": "auto",
            "margin-left": leftOffset+"px"
        });
    }
}

