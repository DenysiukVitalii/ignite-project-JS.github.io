var drawCircle = function(selector){
    var circles = document.querySelectorAll(selector);
    [].forEach.call(circles, function(el){
        var counterCircle = 0;
        var valueCircle = parseFloat(el.innerHTML);
        valueCircle = Math.round(valueCircle*408/100);
        var animationCircle = setInterval(function() {
          el.innerHTML = '<svg width="160" height="160">' +
            '<circle transform="rotate(-90)" r="65" cx="-80" cy="80" />' +
            '<circle transform="rotate(-90)" style="stroke-dasharray:'+ counterCircle +
            'px 408px;" r="65" cx="-80" cy="80" /></svg>'+
            '<span class="percents"></span>';
          var percent = el.children[1];
          percent.innerHTML = Math.round(counterCircle*100/408) + '%';
          if (counterCircle == valueCircle) clearInterval(animationCircle);
          counterCircle++;
        }, 1);
    });
};

var skills = document.getElementById('skills');
var workerCard = document.getElementsByClassName('worker-card');
var showing2 = true;


document.addEventListener('scroll', function () {
    var scrolled = window.pageYOffset + window.innerHeight;
    var target = skills.parentElement.offsetTop + skills.offsetTop + 200;
    if (scrolled > target) {
      if (showing2) {
        drawCircle('.circle-diagram');
        showing2 = false;
      }
    }
});
