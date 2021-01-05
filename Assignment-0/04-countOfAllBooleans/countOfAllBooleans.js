function countOfAllBooleans(arr) {
  let numBoo = 0;
  arr.forEach(element => {
    if (typeof element == "boolean") {
      numBoo++
    }
  });
  return numBoo
}
countOfAllBooleans([true, false, true, false, true, 7])
// Do not edit this line;
module.exports = countOfAllBooleans;