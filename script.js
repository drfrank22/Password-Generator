// Defining variables
var generateBtn = document.querySelector("#generate");
var number = ["0123456789"];
var specialChar = ["!@#$%&*?~.-_"];
var alphaLower = ["abcdefghijklmnopqrstuvwxyz"];
var alphaUpper = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

// var confirmNumber;
// var confirmspecialChar;
// var confirmalphaLower;
// var confirmalphaUpper;
// var pLengthValue = parseInt(pLength, 10);

function generatePassword () {
// Create prompt for character length with condtionals
  var pLength = "";
  var confirmNumber;
  var confirmspecialChar;
  var confirmalphaLower;
  var confirmalphaUpper;

    var pLength = prompt("How many characters would you like your password to include?");

  if (!pLength) {
    alert ("This needs a value. Try Again.");
    var pLength = (prompt("How many characters would you like your password to include?"));
  }
  if (pLength < 8 || pLength > 128) {
    alert ("You must choose between 8 and 128 characters. Try Again.");
    var pLength = (prompt("How many characters would you like your password to include?"));
  }
  if (pLength >= 8 || pLength <= 128) {
    alert ("You choose " + pLength + " characters.")
    confirmnumber = confirm("Click ok if your password will contain numbers.");
    confirmspecialChar = (confirm("Click ok if your password will contain special characters."));
    confirmalphaLower = (confirm("Click ok if your password will contain lower case letters."));
    confirmalphaUpper = (confirm("Click ok if your password will contain upper case letters."));
  }

  if (!confirmNumber && !confirmspecialChar && !confirmalphaLower && !confirmalphaUpper) {
    alert("You must choose at least one criteria.");
    confirmnumber = (confirm("Click ok if your password will contain numbers."));
    confirmspecialChar = (confirm("Click ok if your password will contain special characters."));
    confirmalphaLower = (confirm("Click ok if your password will contain lower case letters."));
    confirmalphaUpper = (confirm("Click ok if your password will contain upper case letters."));
  };
  if (confirmNumber === true) {
    alert ("You selected numbers.")
  }
  if (specialChar === true) {
    alert ("You selected special characters.")
  }
  if (alphaLower === true) {
    alert ("You selected lowercase letters.")
  }
  if (alphaUpper === true) {
    alert ("You selected upper case letters.")
  }
  //  create blank string for new password
  var createdPassword = (""); 

  // Create variables for all combination scenarios
  var allOptions = number + specialChar + alphaLower + alphaUpper
  var a = number + specialChar + alphaLower
  var b = number + specialChar + alphaUpper
  var c = number + alphaLower + alphaUpper
  var d = specialChar + alphaLower + alphaUpper
  var e = number + specialChar
  var f = number + alphaUpper
  var g = number + alphaLower
  var h = specialChar + alphaLower
  var j = specialChar + alphaUpper
  var k = alphaLower + alphaUpper

  // create Math.floor for all possible scenarios
  for (i = 0; i < pLength.length; i++) {
    let character = Math.floor(Math.random() *allOptions.pLength);
    createdPassword += allOptions.charAt(character, character + 1)
  }

  console.log (pLength)
  console.log (confirmNumber)
  };

  
  

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);