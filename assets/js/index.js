// Assignment Code
const generateBtn = document.querySelector("#generate");

const getPasswordLength = () => {
  if () {
    if () {
    } else {
    }
  } else {
  }
  return;
};

const getPasswordOptions = () => {
  if () {
    if () {
    } else {
    }
  } else {
  }
  return;
};

const createPassword = () => {
  for () {
    
  }
  
  for () {
    
  }
  
};

const shufflePassword = () => {
  //shuffle function
  return;
  
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
