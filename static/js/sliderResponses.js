(function () {
 var sliderWrapper = document.querySelector('.slider-wrapper-r');
 var sliderNav = document.getElementById('slider-nav-r');
 var slides = document.querySelectorAll('.slide-r');
 var amountSlides = slides.length;
 var widthSlide = parseInt(slides[0].offsetWidth);
 var dots = [];
 var prevDot = 0;
 sliderWrapper.style.width = amountSlides * parseInt(slides[0].offsetWidth) + 'px';

	for (var i = 0; i < amountSlides; i++) {
	  btn = document.createElement('div');
    btn.className = 'dots';
		(function(i) {

				btn.addEventListener('click', function () {
             dots[prevDot].classList.remove('active');
             this.classList.add('active');
			       sliderWrapper.style.transform = 'translateX(-' +  (widthSlide * i)  + 'px)';
            prevDot = i;
				});
			})(i);
			sliderNav.appendChild(btn);
      dots.push(btn);
	 }
   dots[0].classList.add('active');

})();
