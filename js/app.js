function smoothScroll(target, duration){
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    //console.log(targetPosition);

    function animation(currentTime){
        if(startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0,run);
        if(timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

//smoothScroll('#work', 1000);

// You have to add a class in index.html file to the nav section. That is the beginning element, and then you scroll to the actual element.
// scroll to work section
var workScroll = document.querySelector('.workSection');
workScroll.addEventListener('click', function(){
     smoothScroll('#work', 1000);
});

// scroll to education section
var educationScroll = document.querySelector('.educationSection');
educationScroll.addEventListener('click', function(){
     smoothScroll('#education', 1000);
});

// scroll to interests section
var interestsScroll = document.querySelector('.interestsSection');
interestsScroll.addEventListener('click', function(){
     smoothScroll('#interests', 1000);
});

var contactScroll = document.querySelector('.contactSection');
contactScroll.addEventListener('click', function(){
     smoothScroll('#contact', 1000);
});

var topScroll = document.querySelector('.buttonTop');
topScroll.addEventListener('click', function(){
     smoothScroll('#about', 2000);
});
