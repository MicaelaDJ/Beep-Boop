// Business Logic
var beepBoop = function(userInput) {
  var results = [];
  for (var index = 0; index <= userInput; index++) {
    var inputNumber = (index).toString();
    if (inputNumber.includes("0")){
      results.push("Beep!");
    }
    else if (inputNumber.includes("1")) {
      results.push("Boop!");
    }
    else if (index % 3 === 0 && index !== 0) {
      results.push("I'm sorry, Dave. I'm afraid I can't do that.");
    }
    else {
      results.push(number + ".");
    }
  }
  return results
}

// User Interface
$(document).ready(function() {
  $("form#robotForm").submit(function(event) {
    event.preventDefault();

    var userInput = parseInt($("inputNumber").val());
    var output = beepBoop(userInput);
    var stringOutput = output.join("");
    $("#result").hide();
    $("#result").show();
  });
});
