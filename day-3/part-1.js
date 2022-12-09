const { input } = require('./input')

const getPriority = (letter) => {
  const code = letter.charCodeAt()
  return code > 90 ? code - 96 : code - 38
}

const sumOfPriorities = input.split('\n')
  .map(rucksack => {
    const firstCompartment = rucksack.substring(0, rucksack.length/2)
    const secondCompartment = rucksack.substring(rucksack.length/2, rucksack.length)
    for (let i = 0; i < firstCompartment.length; i += 1) {
      if (secondCompartment.includes(firstCompartment[i])) {
        return getPriority(firstCompartment[i])
      }
    }
  })
  .reduce((total, priority) => total + priority)
  
console.log(sumOfPriorities)
