let nums = [2, 3, 4, 5, 6, 7, 8, 9]
function sumOfAllOddNumbers(nums) {
  // Insert code here;
  let oddTotal = 0

  nums.forEach(element => {
    if (element % 2 == 1) {
      oddTotal++
    }
  });
  return oddTotal;
}
sumOfAllOddNumbers(nums)

// Do not edit this line;
module.exports = sumOfAllOddNumbers;