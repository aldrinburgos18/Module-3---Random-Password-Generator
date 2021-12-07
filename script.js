// Assignment code here
function generatePassword() {
  //character list
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "1234567890";
  var specialChars = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

  //placeholder for password
  var password = "";

  //get password length
  var length = Number(
    window.prompt(
      "How many characters would you like? Please choose between 8-128."
    )
  );
  while (length < 8 || length > 128 || isNaN(length)) {
    window.alert("Please choose a number between 8 and 128!");
    length = Number(
      window.prompt(
        "How many characters would you like? Please choose between 8-128."
      )
    );
  }
  while (true) {
    var confirmLowerCase = window.confirm(
      "Do you want lower cases in your password?"
    );
    var confirmUpperCase = window.confirm(
      "Do you want upper cases in your password?"
    );
    var confirmNumbers = window.confirm(
      "Do you want numbers in your password?"
    );
    var confirmSpecialChars = window.confirm(
      "Do you want special characters in your password?"
    );
    if (
      confirmLowerCase ||
      confirmUpperCase ||
      confirmNumbers ||
      confirmSpecialChars
    ) {
      break;
    } else {
      window.alert("Please pick at least one of the options!");
    }
  }

  //add characters to password
  var selectedChars = "";
  //add lower case
  if (confirmLowerCase) {
    selectedChars += lowerCase;
  }
  //add upper case
  if (confirmUpperCase) {
    selectedChars += upperCase;
  }
  //add numbers
  if (confirmNumbers) {
    selectedChars += numbers;
  }
  //add special characters
  if (confirmSpecialChars) {
    selectedChars += specialChars;
  }

  //randomize characters
  for (var i = 0; i < length; i++) {
    password += selectedChars[Math.floor(Math.random() * selectedChars.length)];
  }

  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
