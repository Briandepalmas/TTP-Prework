let nums = [1, 4, 6, 33, 54, 99, 12, 85]

function sumOfMinimumAndMaximum(nums) {
  // Insert code here;
  let sum = Math.min(...nums) + Math.max(...nums)
  return sum;
}
sumOfMinimumAndMaximum(nums)
// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;