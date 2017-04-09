var worker = document.getElementsByClassName("worker");
var workerCards = document.getElementById("worker-cards");
var workerCard = document.getElementsByClassName("worker-card");
var closeCard = document.getElementsByClassName("close-card");

[].forEach.call(worker, function(item) {
    item.addEventListener('click', function () {
        for (var i = 0; i < workerCard.length; i++) {
            if (this == worker[i]) {
                workerCard[i].classList.add("show");
                this.classList.add("pointer");
            } else {
              worker[i].classList.remove("pointer");
              workerCard[i].classList.remove("show");
            }
        }
        workerCards.classList.add("show");
    });
});

[].forEach.call(closeCard, function(item) {
  item.addEventListener('click', function () {
      for (var i = 0; i < workerCard.length; i++) {
          workerCard[i].classList.remove('show');
          worker[i].classList.remove("pointer");
      }
      workerCards.classList.remove("show");
  });
});
