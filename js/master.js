

function scrollStepElements() {
    scrollValue = scrollScrub(".steps", 0.5, 0.3, 100, 0);
    console.log(scrollValue);
    var scrollEnd = 1.85;

    if (scrollValue >= 0.0 && scrollValue < scrollEnd) {
        $(".step-contents").css({
        top: -scrollValue * 200,
        });
    } else if (scrollValue >= scrollEnd) {
        $(".step-contents").css({
        top: -scrollEnd * 200,
        });
    } else {
        $(".step-contents").css({
        top: 0,
        });
    }
}

function draw() {
    scrollStepElements();
    window.requestAnimationFrame(draw);
}

window.requestAnimationFrame(draw);
