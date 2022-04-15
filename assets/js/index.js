// Assignment Code
const generateBtn = document.querySelector("#generate");

// main function to generate the random password
const generatePassword = () => {
  /*
   * All your code goes here to generate a password
   */
};

// Write password to the #password input
const writePassword = () => {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
