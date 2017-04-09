var menuLinks = document.getElementsByClassName('menu-link');
var header = document.getElementsByTagName('header')[0];
var collectionOffsetTop = {};
var selector;
var element;
var width = window.innerWidth;
var scrolled = 0 || window.pageYOffset || document.documentElement.scrollTop;
var isScrolling = false;
var SCROLL_DURATION = 200;

for (var i = 0; i < menuLinks.length; i++) {
  selector = menuLinks[i].dataset.scrollTo;
  element = document.querySelectorAll(selector)[0];
  collectionOffsetTop[selector] = element;
  menuLinks[i].onclick = function() {
    if (!isScrolling) {
    toggleScroll(collectionOffsetTop[this.dataset.scrollTo].offsetTop, scrolled);
    }
  }
}

document.addEventListener('scroll', function() {
  scrolled = window.pageYOffset || document.documentElement.scrollTop;
});

function toggleScroll(target, scrolled) {
  target = target - header.clientHeight;
  var distance = Math.abs(target - scrolled);
  var initialDistance = distance;
  var speed = 0;
  var step = 2 * distance / Math.pow(SCROLL_DURATION, 2) * 10;
  isScrolling = true;

  var scrollInterval = setInterval(function() {
    distance -= speed;
    if (distance >= initialDistance / 2) {
      speed += step;
    } else if (distance < initialDistance / 2) {
      speed = speed > step ? speed - step : speed;
    }
    var positionY = scrolled < target ? target - distance : target + distance;
    window.scrollTo(0, positionY);
    if (distance <= 0) {
      isScrolling = false;
      clearInterval(scrollInterval);
    }
  }, 10);
}
