$(function(){

    var previousScrollBarPosition
    var currentScrollBarPosition
    var sections = new Array();
    sections.push("section-01");
    sections.push("section-02");
    sections.push("section-03");
    sections.push("section-04");
    var currentIndex = 0;
    var currentSection = $("."+sections[currentIndex]);

    var isScrolling = false;

    console.log("Section 2: "+$(".section-02").offset().top);

    function isScrollingDown() {
        if(previousScrollBarPosition < currentScrollBarPosition)
            return true;
        else
            return false;
    }

    function scrollToNextSection() {
        console.log("Index "+currentIndex);
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

    $(window).scroll(function (event) {

        console.log("scrolled "+$(window).scrollTop());

        previousScrollBarPosition = currentScrollBarPosition;
        currentScrollBarPosition = $(window).scrollTop();

        if(!isScrolling) {
            if(isScrollingDown() && currentSection.offset().top < currentScrollBarPosition) {
                scrollToNextSection();
            } else if(!isScrollingDown() && currentSection.offset().top > currentScrollBarPosition) {
                scrollToPreviousSection();
            }
        }

    });
    
});