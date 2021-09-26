//Function to generate combination of characters
function generateCode() {
  //create variables to store generated codes and the type of characters we want to show as codes
  var code = " "; // initialize to null value
  var str =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*";
  //generate character multiple times using a loop
  for (i = 1; i <= 8; i++) {
    var char = Math.random() * str.length; //random select a character from the variable
    code = code + str.charAt(char); // accumulate the generated character into a sting of 8
  }
  return code;
}

//get HTML element to display
document.getElementById("codes").innerHTML = generateCode();

//Disable Button
function disableButton() {
  document.getElementById("submit").disabled = true;
}

//Activate function
disableButton();
