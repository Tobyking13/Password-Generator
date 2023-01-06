// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var password = [];
var infoObj = {
  passwordLength: 0,
  specialChar: false,
  numericChar: false,
  lowerCaseChar: false,
  upperCaseChar: false,
  arr: [],
  remander: null
};

// Function to prompt user for password options
function getPasswordOptions() {
  var userInput = prompt("Please enter a password length between 10 and 64");    
    if (userInput >= 10 && userInput <= 64) {
      infoObj.passwordLength = userInput;
    } else {
      alert('Password must be between 10 and 64 characters.')
      return;
    };
    
  
  var specialCharPrompt = confirm("Would you like special characters in the password? please enter ok");
    if (specialCharPrompt === true) {
      infoObj.specialChar = true;
    };

  var numericCharPrompt = confirm('Would you like numeric characters in the password? please enter ok');
    if (numericCharPrompt === true) {
      infoObj.numericChar = true;
    }; 

  var lowerCaseCharPrompt = confirm('Would you like lowercase characters in the password? please enter ok');
    if (lowerCaseCharPrompt === true) {
      infoObj.lowerCaseChar = true;
    }; 

  var upperCaseCharPrompt = confirm('Would you like uppercase characters in the password? please enter ok');
    if (upperCaseCharPrompt === true) {
      infoObj.upperCaseChar = true;
    };
    if ( specialCharPrompt === false && numericCharPrompt === false && lowerCaseCharPrompt === false && upperCaseCharPrompt === false) {
      alert('you must select at least one type of character type for password')
      return;
    }

  return infoObj;
};

// Function to randomly choose array
function getRandomArr() {
  var randomArr = Math.floor(Math.random() * 4);

  switch (randomArr) {
    case 0:
      if (infoObj.specialChar === true) {
        infoObj.arr = specialCharacters;
      };  
      break;
    case 1:
      if (infoObj.numericChar === true) {
        infoObj.arr = numericCharacters;
      };
      break;
    case 2:
      if (infoObj.lowerCaseChar === true) {
        infoObj.arr = lowerCasedCharacters;
      };
      break;
    case 3:
      if (infoObj.upperCaseChar === true) {
        infoObj.arr = upperCasedCharacters;
      };
      break;
  };

  return infoObj.arr;
};

// Function for getting a random element from an array
function getRandom() {
  var arr = getRandomArr();
  var randomIndex = Math.floor(Math.random() * (infoObj.arr.length));
  return arr[randomIndex];
};

// Function to generate password with user input
function generatePassword() {

  getPasswordOptions();

  var passwordLength = infoObj.passwordLength;

  if (infoObj.remander > 0 || infoObj.remander === null) {
    for (i = 0; i < passwordLength; i++) {
      var char = getRandom();
      password.push(char);
    };
  };

  return password.join("");
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  if (password.length < infoObj.passwordLength) {
    infoObj.remander = infoObj.passwordLength - passwordText.value.length;
  };
  console.log(passwordText.value.length)

  return infoObj.remander
};
console.log(infoObj.passwordLength);
console.log(infoObj.remander);

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
