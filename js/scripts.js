// Business Logic
var beepBoop = function(userInput){
  var results = [];
  for (var index = 0; index <= userInput; index++) {
    var inputString = (index).toString();
    if (index % 3 === 0 && index != 0) {
      results.push("I'm sorry, Dave. I'm afraid I can't do that.");
    } else if (inputString.includes("1")) {
      results.push("Boop!");
    } else if (inputString.includes("0")) {
      results.push("Beep!");
    } else {
      results.push(index + ".");
    }
  }
  return results
}

// User Interface Logic
$(document).ready(function(){
  $("form#robotForm").submit(function(event){
    event.preventDefault();
    var name = $("input#name").val();
    var userInput = parseInt($("#inputNumber").val());
    var output = beepBoop(userInput);
    var stringOutput = output.join("");
    $("#result").hide();
    $("#result").slideDown(1000);
    $("#result").text(stringOutput);
  });
});
