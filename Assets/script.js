// pseudocode
// when the "generate password" button is clicked
// Prompt: how many characters (must be at least 8)
// Confirm: special, numeric, lowercase, and uppercase characters
// Password generates based on the criteria confirmed

// Assignment code here
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o", "p", "q", "r", "s", "t", "u", "v", "w", "x","y","z"];

var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var numbers = ["0","1","2","3","4","5","6","7","8","9"];

var specialChar = ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

var passwordArray = [""];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  window.alert("Welcome to Password Pioneer! Answer the following prompts to generate your password. Click OK to continue.");

  // Prompt user input for number of characters in the password (>8)
  var charAmt= window.prompt("How many character would you like your password to contain?");
  if (charAmt<8) {
    window.alert("Password must be at least 8 characters.");
    var charAmt= window.prompt("How many character would you like your password to contain?");
  }
  console.log(charAmt);

  // Ask user to confirm desired password criteria
  var specialConfirm= window.confirm("Click OK to confirm including special characters.");
  if (specialConfirm) {
    passwordArray.push.apply(passwordArray,specialChar);
  }

  var numConfirm= window.confirm("Click OK to confirm including numeric characters.");
  if (numConfirm) {
    passwordArray.push.apply(passwordArray,numbers);
  }

  var lowerConfirm= window.confirm("Click OK to confirm including lowercase characters.");
  if (lowerConfirm) {
    passwordArray.push.apply(passwordArray,lowercase);
  }


  var upperConfirm= window.confirm("Click OK to confirm including uppercase characters.");
  if (upperConfirm) {
    passwordArray.push.apply(passwordArray,uppercase);
  }

  console.log(passwordArray);


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

