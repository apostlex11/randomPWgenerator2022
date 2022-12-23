var lowercase = "abcdefghijklmnopqrstuvwxyz"; // input alphabets in lowercase
var uppercase = lowercase.toUpperCase(); // all lowercase alphabets changed to uppercase
var numbers = "1234567890"; // input numbers
var specialchar = "~!@#$%^&*()_+{}|]["; // input special characters
var lowercaseArr = lowercase.split(""); // lowercase letters are converted into a string for an array
var uppercaseArr = uppercase.split(""); // uppercase letters are converted into a string for an array
var numbersArr = numbers.split(""); // numbers letters are converted into a string for an array
var specialcharArr = specialchar.split(""); // special characters are converted into a string for an array
var passwordLength; // password length later defined to between 8-128
var generateBtn = document.querySelector("#generate"); // // Assignment Code

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 

// writePassword input to #password
function writePassword() {
  var passwordQ = newPw();
  var passwordText = document.querySelector("#password");

  if (passwordQ) {
    var randomPassword = generatePassword();
    passwordText.value = randomPassword;
  } else {
    passwordText.value = "";
  }
}

// generatePassword is defined with a "for loop"
function generatePassword() {
    var password = "";
    for (var i = 0; i < passwordLength; i++) { // for loop added 
    var randChar = Math.floor(Math.random() * passwordArr.length);
    password = password + passwordArr[randChar];
  }
  return password;
}

function newPw() {
  // password array 
  passwordArr = []; // a prompt added for passwordLength
  passwordLength = parseInt(prompt("Choose a number between 8 and 128!")); // parseInt parses a string argument and return an interger of the specified base number

  console.log(passwordLength); {
      if ( passwordLength  < 8 || passwordLength > 128) { // number to be picked within 8 and 128
      alert("Please choose a number between 8 and 128!"); // notified incorrect number range was inputted 
      return "Not a number between 8 and 128"; 
    } 

    if (confirm("Would you like your password to contain lowercase letters?")) { // lowercase letters
      passwordArr = passwordArr.concat(lowercaseArr);
      console.log(passwordArr);
      } 

    if (confirm("Would you like your password to contain UPPERCASE letters?")) { // uppercase letters
      passwordArr = passwordArr.concat(uppercaseArr);
    console.log(passwordArr);
    } 

    if (confirm("Would you like your password to contain numbers?")) { // numbers
      passwordArr = passwordArr.concat(numbersArr);
    console.log(passwordArr);
    }

    if (confirm("Would you like your password to contain special characters?")) { // special characters
      passwordArr = passwordArr.concat(specialcharArr);
    console.log(passwordArr);
    }
     return true;
  };  
}
