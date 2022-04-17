// Assignment Code
const generateBtn = document.querySelector("#generate");

const getPasswordLength = () => {
  //prompt user to give a userInput
  let userInput = prompt(
    "How long would you like your password to be? \n\nPlease enter a number between 8 and 128.\n",
    ""
  );
  // check if userInput is a number

  const passwordLength = parseInt(userInput);
  // converts userInput into a number (or return NaN if not a number)
  if (!isNaN(passwordLength) && passwordLength >= 8 && passwordLength <= 128) {
    return passwordLength;
    //if type and range are both true, the number is returned for storage in variable
  } else {
    alert(
      "You must enter a number between 8 and 128. \n\nClick OK to start again."
    );
    //if type or range are not true, it sends an alert box with message
    window.location.reload(true);
    //click ok on alert box to reload the page and start again
  }
};

const getPasswordOptions = () => {
  //step 1: getUserOption part
  //set up variables for questions and strings of characters
  const question = [
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
  //set up variable for array of strings of characters - start with empty array
  let choiceArray = [];

  //prompt the user with a question and get true/false response
  //4 prompts - loop for 4 questions
  for (let i = 0; i < question.length; i += 1) {
    const getUserOption = confirm(question[i]);

    if (getUserOption) {
      //if true, then the string is stored in an array
      choiceArray.push(characters[i]);
      //if false, nothing is done and the loop goes to the next index
      console.log(choiceArray);
    }
  }
  //step 2: isValidOption part
  //check the options match the acceptance criteria => at least 1 type of characters selected
  //if array.length = 0, then alert the user
  if (choiceArray.length == 0) {
    alert(
      "You must choose at least one type of characters to include in your password. \n\nClick OK to start again."
    );
    //click ok on alert box to reload the page and start again
    window.location.reload(true);
  } else {
    //if array.length >=1, then return the array to be stored in a variable
    return choiceArray;
  }
};

const createPassword = (passwordLength, chosenOptions) => {
  //loop to extract 1 character from each string
  let draftPassword = [];

  for (let i = 0; i < chosenOptions.length; i += 1) {
    let randomNumber = Math.floor(Math.random() * chosenOptions[i].length);
    console.log(chosenOptions[i].length);
    console.log(randomNumber);
    draftPassword.push(chosenOptions[i][randomNumber]);
    console.log(draftPassword);
  }
  //loop to extract 1 character from randomly selected string until password length is reached
  for (let i = chosenOptions.length; i < passwordLength; i += 1) {
    let randomArray = Math.floor(Math.random() * chosenOptions.length);
    let randomNumber = Math.floor(
      Math.random() * chosenOptions[randomArray].length
    );
    console.log(chosenOptions[randomArray].length);
    console.log(randomNumber);
    draftPassword.push(chosenOptions[randomArray][randomNumber]);
    console.log(draftPassword);
  }

  return draftPassword;
  //returns the newly formed collection of characters
};

const shufflePassword = () => {
  //shuffle function
  //takes the collection of characters and shuffles it
  return "jj6hFfuAdh";
  //returns the shuffled characters as string
};

// main function to generate the random password
const generatePassword = () => {
  //All the logic for the generatePassword function is here

  //get the password length from the user
  //prompt to the user to enter the password length
  //store userInput into variable

  //check if input is a number
  const passwordLength = getPasswordLength();

  //get the password options from the user
  const chosenOptions = getPasswordOptions();
  console.log(chosenOptions);
  console.log(passwordLength);

  //create the random password
  const tempPassword = createPassword(passwordLength, chosenOptions);
  console.log(tempPassword);
  const randomPassword = shufflePassword(tempPassword);
  return randomPassword;
};

// Write password to the #password input
const writePassword = () => {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
