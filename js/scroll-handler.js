$(function(){

    previousScrollBarPosition = $(window).scrollTop();
    currentScrollBarPosition = previousScrollBarPosition;

    sections = new Array();
    sections.push("section-01");
    sections.push("section-02");
    sections.push("section-03");
    sections.push("section-04");
    sections.push("section-05");
    sections.push("section-06");
    sections.push("section-07");
    sections.push("section-08");

    currentIndex = 0;
    currentSection = $("."+sections[currentIndex]);
    isScrolling = false;

    if(currentScrollBarPosition != 0)
        findClosestSection();

    $(window).scroll(function (event) {

        previousScrollBarPosition = currentScrollBarPosition;
        currentScrollBarPosition = $(window).scrollTop();

        if(!isPaused)
            pausePromoHandler();

        if(!isScrolling) {
            if(isScrollingDown() && currentSection.offset().top < currentScrollBarPosition && currentIndex < sections.length-1) {
                scrollToNextSection();
            } else if(!isScrollingDown() && currentSection.offset().top > currentScrollBarPosition) {
                scrollToPreviousSection();
            }
        }

    });

});


function isScrollingDown() {
    if(previousScrollBarPosition < currentScrollBarPosition)
        return true;
    else
        return false;
}

function scrollToNextSection() {
    currentIndex++;
    currentSection = $("."+sections[currentIndex]);
    isScrolling = true;
    $("html, body").animate({ scrollTop: currentSection.offset().top }, 1000, function() {
        isScrolling = false;
    });
}

function scrollToPreviousSection() {
    currentIndex--;
    currentSection = $("."+sections[currentIndex]);
    isScrolling = true;
    $("html, body").animate({  scrollTop: currentSection.offset().top }, 1000, function() {
        isScrolling = false;
    });
}

function findClosestSection() {
    var closestSection;
    var closestDistance = null;
    sections.forEach(function(element, index) {
        var newDistance = Math.abs($("."+element).offset().top-currentScrollBarPosition);
        if(closestDistance == null || closestDistance > newDistance) {
            closestDistance = newDistance;
            closestSection = index;
        }
    });

    currentIndex = closestSection;
    currentSection = $("."+sections[currentIndex]);

    isScrolling = true;
    $("html, body").animate({  scrollTop: currentSection.offset().top }, 1000, function() {
        isScrolling = false;
    });
}