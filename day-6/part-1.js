const { input } = require('./input')

hasDuplicates = array => {
  return (new Set(array)).size !== array.length
}

const fourChar = input.substring(0, 4).split('')
let result = 4

for (let i = 4 ; i < input.length ; i += 1) {
  if (!hasDuplicates(fourChar)) {
    i = input.length
  } else {
    result += 1
    fourChar.push(input[i])
    fourChar.splice(0, 1)
  }
}

console.log(result)