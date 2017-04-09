var portfolio = document.getElementById('portfolio');
var items = document.getElementsByClassName('filter-item');
var works = document.getElementsByClassName('work');
var wrapperWorks = document.getElementById('works');
var widthOfWork = getComputedStyle(works[0]).width;
var heightWrapperWorks = getComputedStyle(wrapperWorks).height;
var itemFilter;
var isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);

if (isSafari) portfolio.style.display = 'none';

for (var i = 0; i < items.length; i++) {
    items[i].onclick = function() {
      removeActiveItems(items, 'active-filter');
      this.classList.add('active-filter');
      itemFilter = this.dataset.filter;
      filterPortfolio(itemFilter);
    }
}

function removeActiveItems(arr, className) {
   for (var i = 0; i < arr.length; i++) {
     arr[i].classList.remove(className);
   }
 }


function filterPortfolio(className) {
  for (var i = 0; i < works.length; i++) {
    element = works[i];
    if (element.classList.contains(className) || className === 'all') {
      //wrapperWorks.style.height = heightWrapperWorks;
      //element.style.width = widthOfWork;
      element.style.opacity = '1';
      element.style.cursor = 'pointer';
    } else {
      //wrapperWorks.style.height = heightWrapperWorks;
      //element.style.opacity = '0';
      //element.style.width = '0px';
      element.style.opacity = '0.1';
      element.style.cursor = 'default';
    }
  }
}

for (i = 0; i < works.length; i++) {
  works[i].addEventListener('mouseenter', function() {
    if (getComputedStyle(this).opacity === '1') {
      this.classList.remove('mouse-leave');
      this.classList.add('mouse-enter');
    }
  });
  works[i].addEventListener('mouseleave', function(e) {
    this.classList.add('mouse-leave');
    this.classList.remove('mouse-enter');
  });
}
