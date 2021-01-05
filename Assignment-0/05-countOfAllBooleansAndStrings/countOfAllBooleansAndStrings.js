function countOfAllBooleansAndStrings(arr) {
  let numBoo = 0;
  arr.forEach(element => {
    if (typeof element == "boolean"||typeof element=="string") {
      numBoo++
    }

  });
  return numBoo 
  
}
countOfAllBooleansAndStrings(["hey", "there", "hello", "there", "world", false])
// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;