function isPalindrome(word) {
  // Insert code here;

  let check = word.split("")
  check.reverse()
  let palin = check.join("")
  if (palin == word) {
    return true;
  } else {
    return false;
  }

}
isPalindrome("sabrina")
// Do not edit this line;
module.exports = isPalindrome;