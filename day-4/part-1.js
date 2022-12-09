/* Every section has a unique ID number
   each Elf is assigned a range of section IDs */

const { input } = require('./input')


let contained = 0
const pairs = input.split('\n')

pairs.forEach(pair => {
  const sections = pair.split(',')

  const firstElfSections = sections[0].split('-').map(section => parseInt(section, 10))
  const secondElfSections = sections[1].split('-').map(section => parseInt(section, 10))

  let firstElf = ''
  for (let i = firstElfSections[0]; i <= firstElfSections[1]; i += 1) {
    firstElf += `|${i}|`
  }
  let secondElf = ''
  for (let i = secondElfSections[0]; i <= secondElfSections[1]; i += 1) {
    secondElf += `|${i}|`
  }

  if (firstElf.includes(secondElf) || secondElf.includes(firstElf)) {
    contained += 1
  }
})

console.log(contained)