const { input } = require('./input')

let maxCalories = 0

input.split('\n\n')
  .map(elfCalories => {
    let total = 0
    total = elfCalories.split('\n')
      .map(calories => +calories)
      .reduce((total, calories) => total + calories)
    if (total > maxCalories) maxCalories = total
    return total
  })

console.log(maxCalories)