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
  upperCaseChar: false
};
// Function to randomly choose array

function getRandomArr(arr) {
  var randomArr = Math.round(Math.random() * 3);
  
  switch (randomArr) {
    case 0:
      arr = specialCharacters;
      break;
    case 1:
      arr = numericCharacters;
      break;
    case 2:
      arr = lowerCasedCharacters;
      break;
    case 3:
      arr = upperCasedCharacters;
      break;
  }
  return arr;
}

// Function to prompt user for password options
function getPasswordOptions() {
  var passwordLength = prompt('Please enter a password length between 10 and 64');
  var specialCharPrompt = prompt('Would you like special characters in the password? please enter yes or no');
  // var numericCharPrompt = prompt('Would you like numeric characters in the password? please enter yes or no');
  // var lowerCaseCharPrompt = prompt('Would you like lowercase characters in the password? please enter yes or no');
  // var upperCaseCharPrompt = prompt('Would you like uppercase characters in the password? please enter yes or no');

  // if (upperCaseCharPrompt === 'yes') {
  //   infoObj.upperCaseChar = true;
  // } else if (upperCaseCharPrompt === 'no'){
  //   infoObj.upperCaseChar = false;
  // } else {
  //   getPasswordOptions();
  // };

  // if (lowerCaseCharPrompt === 'yes') {
  //   infoObj.lowerCaseChar = true;
  // } else if (lowerCaseCharPrompt === 'no'){
  //   infoObj.lowerCaseChar = false;
  // } else {
  //   getPasswordOptions();
  // };

  // if (numericCharPrompt === 'yes') {
  //   infoObj.numericChar = true;
  // } else if (numericCharPrompt === 'no'){
  //   infoObj.numericChar = false;
  // } else {
  //   getPasswordOptions();
  // };

  if (specialCharPrompt === 'yes') {
    infoObj.specialChar = true;
  } else if (specialCharPrompt === 'no'){
    infoObj.specialChar = false;
  } else {
    getPasswordOptions();
  };

  if (passwordLength >= 10 && passwordLength <= 64) {
    return infoObj.passwordLength = passwordLength;
  } else {
    getPasswordOptions();
  };
  
  return infoObj; 
};

// Function for getting a random element from an array
function getRandom() {
  var arr = getRandomArr();
  var randomIndex = Math.round(Math.random() * (arr.length - 1));
  return arr[randomIndex];
};

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();

  var passwordLength = infoObj.passwordLength;
  var specialChar = infoObj.specialChar;

  console.log(infoObj.specialChar)
  
  
  for (i = 0; i < passwordLength; i++) {
    var char = getRandom();
    password.push(char);
  };
  return password.join('')
};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = "";
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
