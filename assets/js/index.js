// Assignment Code
const generateBtn = document.querySelector("#generate");

const getPasswordLength = () => {
  /*//prompt user to give a userInput
  // check if userInput is a number
  if () {
    //if true, check if userInput is within range 8-128
    if () {
    //if true but userInput is not within range, alert user  
    } else {
    }
   //if userInput is not a number, alert the user 
  } else {
  }*/
  //if true and true, the number is returned for storage in variable
  return;
};

const getPasswordOptions = () => {
  /*//prompt the user with a question and get true/false response
  //4 prompts - loop for 4 questions
  if () {
    //if true, then the string is stored in an array
    
  } else {
    //if false, nothing is done and the loop goes to the next index
  }

  //check the options match the acceptance criteria
  //check if array.length = 0
  if (){
    //if array.length = 0, then alert the user
  }
  else{
    //store the array in a variable

  }*/
  return;
  //return the array to be stored in the variable
};

const createPassword = () => {
  /*//loop to extract 1 character from each string
  for () {
    
  }
  //loop to extract 1 character from randomly selected string until passwprd length is reached
  for () {
    
  }*/
  return;
  //returns the newly formed collection of characters
};

const shufflePassword = () => {
  //shuffle function
  //takes the collection of characters and shuffles it
  return;
  //returns the shuffled characters as string
};

// main function to generate the random password
const generatePassword = () => {
  //All the logic for the generatePassword function is here

  //get the password length from the user
  //prompt to the user to enter the password length
  //check if input is a number
  const passwordLength = getPasswordLength();

  //get the password options from the user
  const chosenOptions = getPasswordOptions();

  //create the password
  const tempPassword = createPassword(passwordLength, chosenOptions);
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
