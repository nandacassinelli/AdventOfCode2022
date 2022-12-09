const { input } = require('./input')

const getPriority = (letter) => {
  const code = letter.charCodeAt()
  return code > 90 ? code - 96 : code - 38
}

const rucksacks = input.split('\n')

const priorities = []
for (let i = 0; i < rucksacks.length; i+= 3) {
  for (let j = 0; j < rucksacks[i].length; j += 1) {
    if (rucksacks[i + 1].includes(rucksacks[i][j])
        && rucksacks[i + 2].includes(rucksacks[i][j])) {
          priorities.push(getPriority(rucksacks[i][j]))
          j = rucksacks[i].length
    }
  }
}

const sumOfPriorities = priorities.reduce((total, priority) => total + priority)

console.log(sumOfPriorities)
