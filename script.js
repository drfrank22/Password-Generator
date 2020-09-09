// Defining variables
var generateBtn = document.querySelector("#generate");
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "@", "#", "$", "%", "&", "*", "~", ".", "-", "_"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


function generatePassword () {
// Create variable and prompt for character length with condtionals
  var pLength = "";
    var pLength = prompt("How many characters would you like your password to include?");

  if (!pLength) {
    alert ("This needs a value. Try Again.");
    var pLength = (prompt("How many characters would you like your password to include? (Must be between 8 and 128 characters)"));
  }
  if (!pLength){
    return;
  }
  if (pLength < 8 || pLength > 128) {
    alert ("You must choose between 8 and 128 characters. Try Again.");
    var pLength = (prompt("How many characters would you like your password to include? (Must be between 8 and 128 characters)"));
  }
  if (pLength < 8 || pLength > 128) {
    return;
  }
  if (pLength >= 8 || pLength <= 128) {
    alert ("You choose " + pLength + " characters.")
    var confirmNumber = (confirm("Click ok if you would like your password to contain numbers."));
    var confirmSpecialChar = (confirm("Click ok if you would like your password to contain special characters."));
    var confirmAlphaLower = (confirm("Click ok if you would like your password to contain lower case letters."));
    var confirmAlphaUpper = (confirm("Click ok if you would like your password to contain upper case letters."));
  }
// Set conditional if no criteria are selected
  if (!confirmNumber && !confirmSpecialChar && !confirmAlphaLower && !confirmAlphaUpper) {
    alert("You must choose at least one criteria.");
    var confirmNumber = (confirm("Click ok if your password will contain numbers."));
    var confirmSpecialChar = (confirm("Click ok if your password will contain special characters."));
    var confirmAlphaLower = (confirm("Click ok if your password will contain lower case letters."));
    var confirmAlphaUpper = (confirm("Click ok if your password will contain upper case letters."));
  }
  if (!confirmNumber && !confirmSpecialChar && !confirmAlphaLower && !confirmAlphaUpper) {
    return;
    alert("Try Again");
  }
// Set Conditionals letting user know what criteria they selected. 
  if (confirmNumber === true) {
    alert ("You selected numbers.")
  }
  if (confirmSpecialChar === true) {
    alert ("You selected special characters.")
  }
  if (confirmAlphaLower === true) {
    alert ("You selected lowercase letters.")
  }
  if (confirmAlphaUpper === true) {
    alert ("You selected upper case letters.")
  }
  // Set options variable and give conditionals based on true confirms and concat together
  var passwordOptions = []

  if (confirmNumber) {
    passwordOptions = passwordOptions.concat(number)
  }
  if (confirmSpecialChar) {
    passwordOptions = passwordOptions.concat(specialChar)
  }
  if (confirmAlphaLower) {
    passwordOptions = passwordOptions.concat(alphaLower)
  }
  if (confirmAlphaUpper) {
    passwordOptions = passwordOptions.concat(alphaUpper)
  }
  //  create blank string for new password
  var pwd = ""; 
  // create Math.floor for all possible scenarios
  for (var i = 0; i < pLength; i++) {
      var pwd = pwd + passwordOptions[Math.floor(Math.random() *passwordOptions.length)];
    }
    return pwd;
  };

// Call writePassword function
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);