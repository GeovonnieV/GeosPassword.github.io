//prompts and conf
var promptLength = prompt("how long will you like your password to be?  must be between 8 and 128 characters")
var confSpecialChar = confirm("do you want special characters?")
var confNumeric = confirm("will you like numbers?")
var confUpper = confirm("upper case?")
var conLower = confirm("and/or lower case?")

//vars for array of conditions 
var specialChar = ["!", "@", "$","%","&", "+"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
var Cap = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "X", "T", "U", "V", "W", "X", "Y", "Z"];
var lower = ["d", "e", "f", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "x", "y", "z"];





// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword(password) {
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

// function copyToClipboard() {
// BONUS 
// }

// Add event listener to generate button
generateBtn.addEventListener("click", passwordGen);

// BONUS EVENT LISTENER




////my code starts

var main = []

//create function so we dont have to keep doing the for loop for every array 
function call(arr) {
  //for loop
  for (var i = 0; i < arr.length; i++) {
    //pushes each index to main
    main.push(arr[i])
  }
}

//prompt for loop



//what this does is gives us 1 index from main and main is going to have things in it depeding on the conditions 


//call the function
if (confNumeric) {
  call(numbers)
}

if (confSpecialChar) {
  call(specialChar)
}

if (confUpper) {
  call(Cap)
}

if (conLower) {
  call(lower)
}

// console.log({main})

// var indexMain = Math.floor(Math.random() * main.length)
// console.log(main)
// console.log(indexMain)
// console.log(main[indexMain])

function passwordGen() {
  var randomCharacters = [];
  for (var i = 1; i <= promptLength; i++) {
    var randomIndex = Math.floor(Math.random() * main.length)
    var selectedCharacter = main[randomIndex]
    randomCharacters.push(selectedCharacter)
  }
  var password = randomCharacters.join("");
  writePassword(password)
}

/*where we ended off basically we said if the condition is true then run the function, and the var main
should contain an array of the conditions that the user wanted, the math.floor gives us an index inside the var = main,

we need to find out how were going to make the password length according to the users prompt response, and how to not
just genertate an index with that math.floor but generate a whole password that fits the users promt */

