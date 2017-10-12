$(function(){
        
    viewportWidth = $(window).width();
    viewportHeight = $(window).height();
    videoRatio = 1.777777777;

    fitVideoToViewport();

    $(window).resize(function() {
        viewportWidth = $(window).width();
        viewportHeight = $(window).height();
        fitVideoToViewport();
        $(window).scrollTop( currentSection.offset().top);
    });

});

function fitVideoToViewport() {
    if((parseFloat(viewportWidth) / viewportHeight) > videoRatio) {
        var topOffset = ($("#promo-video").height() - viewportHeight)/2 * -1;
        $("#promo-video").css({
            "width": "100vw",
            "height": "auto",
            "margin-left": "auto",
            "margin-top": topOffset+"px"
        });
    } else {
        var leftOffset = ($("#promo-video").width() - viewportWidth)/2 * -1;
        $("#promo-video").css({
            "width": "auto",
            "height": "100vh",
            "margin-top": "auto",
            "margin-left": leftOffset+"px"
        });
    }
}