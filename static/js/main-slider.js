	var sliderWrapper = document.querySelector('.slider-wrapper');
  var slides = document.querySelectorAll('.slide');
  var prevBtn = document.querySelector('.btn-previous');
  var nextBtn = document.querySelector('.btn-next');

	var scrolled;
  var currentSlide = 0;
  var widthSlide = slides[0].clientWidth;
  var amountSlides = slides.length;
	var isClicking = 0;
	var startAutoplay;
	var autoplay;
	var DELAY_AUTOPLAY = 5000;
	var INTERVAL_AUTOPLAY = 3000;

  function preparingSlider() {
    sliderWrapper.style.width = widthSlide * (amountSlides + 2) + 'px';
    sliderWrapper.insertAdjacentElement('beforeEnd', sliderWrapper.children[0].cloneNode(true));
    sliderWrapper.insertAdjacentElement('afterBegin', sliderWrapper.children[amountSlides - 1].cloneNode(true));
    sliderWrapper.style.transition = 'transform 0s';
    sliderWrapper.style.transform = 'translateX(' + ( - widthSlide) + 'px)';
  }

	var autoplaySlides = function () {
		if (scrolled > window.innerHeight) return;
			if (currentSlide === amountSlides - 1) {
				setTimeout(function() {
					sliderWrapper.style.transition = 'transform 0s';
					sliderWrapper.style.transform = 'translateX(' + ( - widthSlide) + 'px)';
					currentSlide = 0;
				}, 600);
			}
			currentSlide++;
			sliderWrapper.style.transition = 'transform .6s';
			sliderWrapper.style.transform = 'translateX(' + ( - widthSlide * (currentSlide + 1)) + 'px)';
	};

	autoplay = setInterval(autoplaySlides, INTERVAL_AUTOPLAY);

  prevBtn.addEventListener('click', function() {
		if (isClicking) return;
		clearInterval(autoplay);
		clearTimeout(startAutoplay);
    if (!currentSlide) {
      setTimeout(function() {
        sliderWrapper.style.transition = 'transform 0s';
        sliderWrapper.style.transform = 'translateX(' + ( -  widthSlide * (amountSlides)) + 'px)';
        currentSlide = amountSlides - 1;
      }, 600);
    }
    currentSlide--;
		isClicking = true;
    sliderWrapper.style.transition = 'transform .6s';
    sliderWrapper.style.transform = 'translateX(' + ( - widthSlide * (currentSlide + 1)) + 'px)';
		startAutoplay = setTimeout(function () {
			autoplaySlides();
			autoplay = setInterval(autoplaySlides, INTERVAL_AUTOPLAY);
		}, DELAY_AUTOPLAY);
		setTimeout(function() {
			isClicking = false;
		}, 600);
  });


  nextBtn.addEventListener('click', function() {
		if (isClicking) return;
		clearInterval(autoplay);
		clearTimeout(startAutoplay);
    if (currentSlide === amountSlides - 1) {
      setTimeout(function() {
        sliderWrapper.style.transition = 'transform 0s';
        sliderWrapper.style.transform = 'translateX(' + ( - widthSlide) + 'px)';
        currentSlide = 0;
      }, 600);
    }
    currentSlide++;
		isClicking = true;
    sliderWrapper.style.transition = 'transform .6s';
    sliderWrapper.style.transform = 'translateX(' + ( - widthSlide * (currentSlide + 1)) + 'px)';
		startAutoplay = setTimeout(function () {
			autoplaySlides();
			autoplay = setInterval(autoplaySlides, INTERVAL_AUTOPLAY);
		}, DELAY_AUTOPLAY);
		setTimeout(function() {
      isClicking = false;
    }, 600);
  });

	document.addEventListener('scroll', function() {
	  scrolled = window.pageYOffset || document.documentElement.scrollTop;
	});

	preparingSlider();
