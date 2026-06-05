function isValidPassword(password) {
  if (password.length < 8) {
    return false;
  }
  return true;
}

// Test cases
console.log(isValidPassword("123"));      //false
console.log(isValidPassword("Password"));  //true
