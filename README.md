# Toby King Challenge 5: Password Generator

## Description

The challenge this week was to create a random password generator. The application works by asking the user to enter a number between 10 and 64 for the length of the password. If the user selects a number outside of these parameters the application will alert the user that they must select a number between 10 & 64. The application then asks the user if they would like to include special, numeric, lowercase and/or uppercase characters. Again, if the user does not select any character types the application will alert the user to select at least one character type.

There are 4 arrays with each character type. Once the information has been gathered regarding the password options the application will choose a random index from a random array as many times as the user asks for the password to be. This creates a pseudo-random password based on the Math.random() method. 

The application is started when the user clicks the generate password button. This initiates the write password function that will first initiate the getPasswordOptions() function that gets all the information about the password. This is then stored in a global object. This object will have boolean data for character type and depending on what character types return true (the user wants to include the character type in the password) will send all the approved arrays into 1 long array with all the characters. The getRandom() function will then select a random index in the array as many times as the user wants the password to be. 

Finally, the generatePassword() function will compile all the information and send it to the password text area in the HTML file using DOM manipulation. 

This was a very fun assignment and equally challenging. Getting the application to make a random password didn't take too much work but getting the program to be dynamic with the user requirements was where it became challenging. Keeping things simple ended up being the best strategy to complete this assignment. 

The only thing I was not able to achieve was to cancel an already printed password if the user wanted to reuse the application. The only way to make this work would be to refresh the page. In the future, I hope to fix this issue so it's fully working.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)

## Installation

https://tobyking13.github.io/Toby-King-Password-Generator/

## Usage

![Toby King Password Generator](./images/password-generator-screenshot.png "Toby King Password Generator" )
Screenshot of the webpage live on Github pages.

## Credits

N/A

## License

N/A

## Badges

N/A

## Features

* Asks the user to enter a password between 10 & 64 characters. If the user does not select a number within these parameters the application will alert the user and reset.
* Asks the user if they want special, numerical, lowercase and/or uppercase characters. If the user selects none, the application will alert the user and reset.
* Once the application has all the user information, it will show a random password to the given length and with the selected characters. 

## How to Contribute

N/A

## Tests

N/A