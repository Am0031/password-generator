// Assignment Code
const generateBtn = document.querySelector("#generate");

//function - get the password length from the user
const getPasswordLength = () => {
  //prompt user to give a userInput
  //declare variable to receive user input - const -> not modified further down
  const userInput = prompt(
    "How long would you like your password to be? \n\nPlease enter a number between 8 and 128.\n",
    ""
  );
  // check if userInput is a number
  const passwordLength = parseInt(userInput, 10);

  // converts userInput into a number (or return NaN if not a number)
  if (!isNaN(passwordLength) && passwordLength >= 8 && passwordLength <= 128) {
    //if type and range are both true, the number is returned for storage in variable
    return passwordLength;
  }
  //if type or range are not true, it sends an alert box with message
  else {
    alert(
      "You must enter a number between 8 and 128. \n\nClick OK to start again."
    );
    return false;
  }
};

//function - get the user preferences on which characters to include in password
const getPasswordOptions = () => {
  //step 1: getUserOption part
  //declare variables for questions and strings of characters
  const questions = [
    "Would you like to use lowercase letters in your password? \nClick 'OK' for yes and 'Cancel' for no.",
    "Would you like to use uppercase letters in your password? \nClick 'OK' for yes and 'Cancel' for no.",
    "Would you like to use numbers in your password? \nClick 'OK' for yes and 'Cancel' for no.",
    "Would you like to use special characters in your password? \nClick 'OK' for yes and 'Cancel' for no.",
  ];
  const characters = [
    "abcdefghijklmnopqrstuvwxyz",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "0123456789",
    " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~",
  ];
  //declare variable for result array of strings of characters - start with empty array - const -> only pushing in it, not modifying
  const choiceArray = [];

  //prompt the user with a question and get true/false response
  //4 prompts - loop for 4 questions
  for (let i = 0; i < questions.length; i += 1) {
    const userOption = confirm(questions[i]); //const -> used only in this loop, not modified in the if statement

    if (userOption) {
      //if true, then the string is stored in an array
      choiceArray.push(characters[i]);
      //if false, nothing is done and the loop goes to the next index
    }
  }
  //step 2: isValidOption part
  //check the options match the acceptance criteria => at least 1 type of characters selected
  //if array.length = 0, then alert the user
  if (choiceArray.length == 0) {
    alert(
      "You must choose at least one type of characters to include in your password. \n\nClick OK to start again."
    );
    return false;
  } else {
    //if array.length >=1, then return the array to be stored in a variable
    return choiceArray;
  }
};

//function createPassword 1/2 - create a temporary password based on user inputs
const createPassword = (passwordLength, chosenOptions) => {
  //loop to extract 1 character from a string each time - const -> only pushing in it, not modifying
  const draftPassword = [];
  //for loops until reaching password length
  for (let i = 0; i < passwordLength; i += 1) {
    //declare variable for the array index - const -> only used inside the for loop
    //with ternary operator, combining both conditions : ensure at least 1 character from each string in array first, then from a randomly selected string afterwards
    const chosenArray =
      i < chosenOptions.length
        ? i
        : Math.floor(Math.random() * chosenOptions.length);
    //declare variables for random number - const -> only used inside the for loop
    //using random number to choose random character in string
    const randomNumber = Math.floor(
      Math.random() * chosenOptions[chosenArray].length
    );
    //pushing character in variable
    draftPassword.push(chosenOptions[chosenArray][randomNumber]);
  }
  //returns the newly formed collection of characters (as an array of strings of 1 character each)
  return draftPassword;
};

//function createPassword 2/2 - shuffle the temporary password and convert it to a string
const shufflePassword = (tempPassword) => {
  //takes each string in array and assigns it a new random index
  //found at: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  let tempArray = tempPassword;
  let currentIndex = tempArray.length,
    randomIndex;

  // While there remain elements to shuffle:
  while (currentIndex != 0) {
    // Pick a remaining element:
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element:
    [tempArray[currentIndex], tempArray[randomIndex]] = [
      tempArray[randomIndex],
      tempArray[currentIndex],
    ];
  }
  //end of shuffled function

  //takes the shuffled array above and converts it into a string with no gap between each character
  //declare variable to receive the string - const -> only used here, never modified
  const tempString = tempArray.join("");
  //returns the string
  return tempString;
};

// main function to generate the random password
const generatePassword = () => {
  //All the logic for the generatePassword function is here

  //get the password length from the user
  const passwordLength = getPasswordLength();

  if (passwordLength) {
    //get the password options from the user
    const chosenOptions = getPasswordOptions();

    if (chosenOptions) {
      //create the random password
      const tempPassword = createPassword(passwordLength, chosenOptions);
      const randomPassword = shufflePassword(tempPassword);

      //return the created password
      return randomPassword;
    } else {
      location.reload();
    }
  } else {
    location.reload();
  }
};

// Write password to the #password input
const writePassword = () => {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
