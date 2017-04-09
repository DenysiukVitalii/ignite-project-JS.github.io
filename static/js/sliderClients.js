 (function() {
 var sliderWrapper = document.getElementById('slider-clients');
 var slides = document.querySelectorAll('#slider-clients .slide-c');
 var scrolled;
 var currentSlide = 0;
 var widthSlide = slides[0].offsetWidth + 2 * parseInt(getComputedStyle(slides[0]).marginLeft);
 var amountSlides = slides.length;
 var autoplay;
 var INTERVAL_AUTOPLAY = 3000;

 function preparingSlider() {
   sliderWrapper.style.width = widthSlide * (amountSlides + 6) + 'px';
   for (var i = 0; i < amountSlides; i++)
     sliderWrapper.insertAdjacentElement('beforeEnd', sliderWrapper.children[i].cloneNode(true));
   sliderWrapper.style.transition = '0.5s';
 }

 preparingSlider();
 var autoplaySlides = function () {
   if (scrolled < sliderWrapper.offsetTop - sliderWrapper.clientHeight - 700) return;
     if (currentSlide === amountSlides - 1) {
       setTimeout(function() {
         sliderWrapper.style.transition = '0.5s';
         currentSlide = 0;
       }, 1000);
     }
     currentSlide++;
     sliderWrapper.style.transform = 'translateX(' + ( - widthSlide * currentSlide ) + 'px)';
 };

 autoplay = setInterval(autoplaySlides, INTERVAL_AUTOPLAY);

 document.addEventListener('scroll', function() {
   scrolled = window.pageYOffset || document.documentElement.scrollTop;
 });
})();
