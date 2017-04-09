  var header = document.getElementsByTagName('header')[0];
  var iconMenu = document.getElementById('icon-menu');
  var menuList = document.getElementById('menu-list');

  menuList.style.top = header.offsetHeight + 'px';
  iconMenu.addEventListener('click', function () {
    menuList.classList.toggle('show-menu');
  });

  var scrolled;
  document.addEventListener('scroll', function() {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    (scrolled > 100) ? header.classList.add('grey') : header.classList.remove('grey');
  });
