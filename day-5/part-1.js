const { input } = require('./input')

const moveCrate = (cratesStacks, topIndexes, origin, destination) => {
  const crate = cratesStacks[topIndexes[origin - 1]][origin - 1]
  cratesStacks[topIndexes[origin - 1]][origin - 1] = ''
  topIndexes[origin - 1] += 1

  if (cratesStacks[topIndexes[destination - 1]] === 0) {
    const newTopLine = []
    cratesStacks[0].forEach(() => newTopLine.push(''))
    newTopLine[destination - 1] = crate
    cratesStacks.unshif(newTopLine)
    return [cratesStacks, topIndexes]
  }

  cratesStacks[topIndexes[destination - 1] - 1][destination - 1] = crate
  topIndexes[destination - 1] -= 1

  if (cratesStacks[0].every(val => val === '')) {
    cratesStacks.shift()
    topIndexes = topIndexes.map(index => index - 1)
  }
  return [cratesStacks, topIndexes]
} 

const getTopIndexes = (cratesStacks) => {
  const topIndexes = []
  cratesStacks[0].forEach(() => topIndexes.push(''))
  for (let i = 0; i < cratesStacks.length; i += 1) {
    for (let j = 0; j < cratesStacks[0].length; j += 1) {
      if (cratesStacks[i][j] !== '' && topIndexes[j] === '') {
        topIndexes[j] = i
        j = cratesStacks[0].length
      }
    }
  }
  return topIndexes
}

const [stacks, commands] = input.replaceAll('    ', ' ').split('\n\n')

const lines = stacks.split('\n')
lines.pop()

let crates = lines.map(line => line.split(' '))
let stacksTopIndexes = getTopIndexes(crates)

console.log(crates, stacksTopIndexes)

commands
  .split('\n')
  .map(command => command.split(' '))
  .map(command => {
    console.log(command)
    for (let i = 1; i <= +command[1]; i += 1) {
      [crates, stacksTopIndexes] = moveCrate(crates, stacksTopIndexes, +command[3], +command[5])
      console.log(crates, stacksTopIndexes)
    }
  })



// const result = moveCrate(crates, 2)