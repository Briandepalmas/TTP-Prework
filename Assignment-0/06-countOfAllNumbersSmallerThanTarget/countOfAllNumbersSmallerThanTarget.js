let nums = [1, 2, 3, 4, 5]
let target = 9;

function countOfAllNumbersSmallerThanTarget(nums, target) {
  // Insert code here;

  lessThanTarget = 0;
  nums.forEach(element => {
    if (element < target) {
      lessThanTarget++;
    }
  });
  return lessThanTarget;
}
countOfAllNumbersSmallerThanTarget(nums,target)
// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;