let nums = [1, 2, 3, 4, 5, 6, 7]
let start = 4;
let end = 7;

function sumOfNumsWithinARange(nums, start, end) {
  // Insert code here;
  let range = 0
  nums.forEach(element => {
    if (element >= start && element <= end) {
      range++
    }
  })
  return range
}
sumOfNumsWithinARange(nums,start,end)
// Do not edit this line;
module.exports = sumOfNumsWithinARange;