// Defining variables
var generateBtn = document.querySelector("#generate");
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "@", "#", "$", "%", "&", "*", "?", "~", ".", "-", "_"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var confirmNumber;
var confirmspecialChar;
var confirmalphaLower;
var confirmalphaUpper;

// var pLength = ();
// Write password to the #password input

function generatePassword () {
  var pLength = (prompt("How many characters would you like your password to include?"));

  if (!pLength) {
    alert ("This needs a value. Try Again.");
  }
  else if (pLength < 8 || pLength > 128) {
    alert ("You must choose between 8 and 128 characters. Try Again.");
  }
  else {
    confirmnumber = (confirm("Click ok if your password will contain numbers."));
    confirmspecialChar = (confirm("Click ok if your password will contain special characters."));
    confirmalphaLower = (confirm("Click ok if your password will contain lower case letters."));
    confirmalphaUpper = (confirm("Click ok if your password will contain upper case letters."));
  }

  };


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);