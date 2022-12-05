const { input } = require('./input')

const replaceLowerIfGreater = (array, value) => {
  const newArray = array
  const minValue = Math.min(...array)
  if (minValue < value) {
    newArray[array.indexOf(minValue)] = value
  }
  return newArray
}


let maxCalories = [0, 0, 0]
let sum = 0

input.split('\n\n')
  .map(elfCalories => {
    let total = 0
    total = elfCalories.split('\n')
      .map(calories => +calories)
      .reduce((total, calories) => total + calories)
    maxCalories = replaceLowerIfGreater(maxCalories, total)
    return total
  })

sum = maxCalories.reduce((sum, elfCalories) => sum + elfCalories)

console.log(sum)