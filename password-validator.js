function isValidPassword(password) {
  if (password.length < 8) {
    return false;
  }
  if (!/[A-Z]/.test(password)) {
  return false;
}
  if (!/[0-9]/.test(password)) {
    return false;
  }
  return true;
}

// Test cases
console.log(isValidPassword("123"));      //false
console.log(isValidPassword("Password")); //false
console.log(isValidPassword("Password")); //true

// notes. What changed?
Before if (password.length<8) the function checked the length. Now it checks: 1. Minimum 8 characters
2. At least one upper case letter and 3. At least one number.
