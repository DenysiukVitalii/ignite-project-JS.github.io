var proudNumbers = document.getElementById("proud-numbers");
var counters = document.getElementsByClassName("counter");
var number;
var showing = true;

document.addEventListener('scroll', function () {
    var scrolled = window.pageYOffset + window.innerHeight;
    var target = proudNumbers.offsetTop;
    if (scrolled > target) {
      if (showing) {
        for (var i = 0; i < counters.length; i++) {
            number = +counters[i].innerHTML;
            countNumbers(counters[i], number);
        }
        showing = false;
      }
    }
});

function countNumbers(counter, number) {
    var i = 0;
    var timerId = setInterval(function () {
      if (i > number) i = number;
      counter.innerHTML = (i == 20000) ? '<div>20&nbsp;000</div>': parseInt(i);
      if (i == number) clearInterval(timerId);
      i += number / 300;
    }, 10);
}
