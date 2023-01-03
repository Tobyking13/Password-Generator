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

// Function to prompt user for password options
function getPasswordOptions() {
  var userInput = 0
  function passwordLength() {
    userInput = prompt('Please enter a password length between 10 and 64');
    if (userInput >= 10 && userInput <= 64) {
      infoObj.passwordLength = userInput;
    } else {
      getPasswordOptions();
    };
    return infoObj.passwordLength = userInput;
  };

  function specialChar() {
    var specialCharPrompt = confirm('Would you like special characters in the password? please enter yes or no');
    if (specialCharPrompt === true) {
      infoObj.specialChar = true;
    } else {
      infoObj.specialChar = false;
    }; 
    return infoObj.specialChar;
  };

  function numericChar() {
    var numericCharPrompt = confirm('Would you like numeric characters in the password? please enter yes or no');
    if (numericCharPrompt === true) {
      infoObj.numericChar = true;
    } else {
      infoObj.numericChar = false;
    };

    return infoObj.numericChar;
  };

  function lowerCaseChar() {
    var lowerCaseCharPrompt = confirm('Would you like lowercase characters in the password? please enter yes or no');
    if (lowerCaseCharPrompt === true) {
      infoObj.lowerCaseChar = true;
    } else {
      infoObj.lowerCaseChar = false;
    }; 
    return infoObj.lowerCaseChar;
  };

  function upperCaseChar() {
    var upperCaseCharPrompt = confirm('Would you like uppercase characters in the password? please enter yes or no');
    if (upperCaseCharPrompt === true) {
      infoObj.upperCaseChar = true;
    } else {
      infoObj.upperCaseChar = false;
    }; 
    return infoObj.upperCaseChar;
  };

  passwordLength();
  specialChar();
  numericChar();
  lowerCaseChar();
  upperCaseChar();
  return infoObj; 
};

// Function for getting a random element from an array
function getRandom() {
  var arr = getRandomArr();
  var randomIndex = Math.round(Math.random() * (arr.length - 1));
  return arr[randomIndex];
};

// Function to randomly choose array

function getRandomArr(arr) {
  var randomArr = Math.round(Math.random() * 3);
  
  if (randomArr === 0 && infoObj.specialChar === true) {
    arr = specialCharacters;
  } else if (randomArr === 1 && infoObj.numericChar === true) {
    arr = numericCharacters;
  } else if (randomArr === 2 && infoObj.lowerCaseChar === true) {
    arr = lowerCasedCharacters;
  } else if (randomArr === 3 && infoObj.upperCaseChar === true) {
    arr = upperCasedCharacters;
  } else {
    randomArr = 0
  };

  return arr;
}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();

  var passwordLength = infoObj.passwordLength;
  console.log(getRandom());
  // var specialChar = infoObj.specialChar;

//  console.log(infoObj.specialChar)
  
  
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

  // console.log(infoObj)

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
