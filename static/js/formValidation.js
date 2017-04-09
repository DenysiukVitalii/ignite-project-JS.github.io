var inputs = document.querySelectorAll("#form-validate input");
var namePattern = /^[a-zA-Z]+$/;
var emailPattern = /^[a-zA-Z0-9_][a-zA-Z0-9_.]+@[a-zA-Z0-9]+\.[a-z]+$/;
var subjectPattern = /^[a-zA-Z0-9]+$/;
var errorTip = document.getElementById('error-tip');

function isValid() {
   var pattern;
   this.correct = 1;
   switch (this.name) {
     case "name": { pattern = namePattern; break; }
     case "email": { pattern = emailPattern; break; }
     case "subject": { pattern = subjectPattern; break; }
   }

   errorTip.innerHTML = this.dataset.tip;
   this.parentNode.appendChild(errorTip);
   errorTip.style.display = "none";

   if (!this.value.match(pattern)) {
       errorTip.style.display = "block";
       this.style.outline = "tomato auto 5px";
       this.style.border = "1px solid tomato";
       this.correct = false;
   } else {
       errorTip.style.display = "none";
       this.style.outline = "#85ff70 auto 5px";
       this.style.border = "1px solid #85ff70";
       this.correct = true;
   }
}

function hideTip() {
  errorTip.style.display = "none";
}

for (var j = 0; j < inputs.length; j++) {
   inputs[j].addEventListener("keyup", isValid);
   inputs[j].addEventListener("blur", hideTip);
}
