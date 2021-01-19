function frequencyCounter(word) {
  let arr = word.split("")
  let obj = {}
  for (i = 0; i <= word.length - 1; i++) {
    obj[word[i]] = 0;

  }

  arr.forEach(element => {
    if (obj[element] == obj[element]) {
      obj[element] += 1;
    }

  });

  console.log(obj)
  return obj


}
frequencyCounter("mississippi")
// Do not edit this line;
module.exports = frequencyCounter;