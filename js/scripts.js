// Business Logic
var beepBoop = function(number) {
  if (number === 0){
    return "Beep!";
  }
  else if (number === 1) {
    return "Boop!";
  }
  else if (number % 3 === 0) {
    return "I'm sorry, Dave. I'm afraid I can't do that.";
  }
}
// User Interface
$(document).ready(function() {
  $("form#robotForm").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var result = beepBoop(number);

    
  });
});
