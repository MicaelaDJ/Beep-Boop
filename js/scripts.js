// Business Logic
var beepBoop = function(userInput) {
  var results = [];
  for (var number = 0; number <= userInput; number++) {
    var inputNumber = (number).toString();
    if (inputNumber === 0){
      results.push("Beep!");
    }
    else if (inputNumber === 1) {
      results.push("Boop!");
    }
    else if (number % 3 === 0) {
      results.push("I'm sorry, Dave. I'm afraid I can't do that.");
    }
    else {
      results.push(number + ".");
    };
  };
  return results
};
// User Interface
$(document).ready(function() {
  $("form#robotForm").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("userNumber").val());
    var output = beepBoop(userInput);
    var stringOutput = output.join("");
    $(".number").text(number);
    $("#result").show();
  });
});
