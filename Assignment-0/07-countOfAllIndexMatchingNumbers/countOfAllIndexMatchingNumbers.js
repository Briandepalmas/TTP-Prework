let nums = [0, 1, 2, 5, 4];

function countOfAllIndexMatchingNumbers(nums) {
  // Insert code here;
  let match=0
  for (i = 0; i < nums.length; i++) {
    
    if(nums[i]==i){
      match++
    }   
  }
  return match;
}
countOfAllIndexMatchingNumbers(nums)
// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;