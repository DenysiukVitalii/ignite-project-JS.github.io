var icons = document.getElementsByClassName('scale');

for (var i = 0; i < icons.length; i++) {
    icons[i].onmouseover = function () {
      this.style.transform = 'translateX(-50%) translateY(-50%) scale(1.1)';
      this.style.transition = '.3s';
    };
    icons[i].onmouseout = function () {
      this.style.transform = 'translateX(-50%) translateY(-50%) scale(1)';
    }
}
