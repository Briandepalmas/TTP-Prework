let nums = [2, 3, 4, 5, 6, 7, 8, 9]

function sumOfAllEvenNumbers(nums) {
  let evenTotal = 0

  nums.forEach(element => {
    if (element % 2 == 0) {
      evenTotal++
    }
  });
  return evenTotal;
}
sumOfAllEvenNumbers(nums)
// Do not edit this line;
module.exports = sumOfAllEvenNumbers;