function titleCaseEdit(title) {
  let tArr = title.split(" ")
  let newTitle = []

  tArr.forEach(word => {
    let cap = word[0].toUpperCase() + word.substring(1)
    newTitle.push(cap)
  })
  newTitle = newTitle.join(" ")
  
  return newTitle;

}

titleCaseEdit("yo hago lo que me da la gana")

// Do not edit this line;
module.exports = titleCaseEdit;