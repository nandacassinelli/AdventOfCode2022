const { input } = require('./input')

const moveCrates = (cratesStacks, origin, destination) => {
  cratesStacks[destination]
    .push(...cratesStacks[origin].splice(cratesStacks[origin].length - 1, 1))

  return cratesStacks

}

const [stacksInput, commands] = input.replaceAll('    ', ' ').split('\n\n')

const lines = stacksInput.split('\n')
lines.pop()

let crates = lines.map(line => line.split(' '))
let stacks = crates[0].map(() => [])

for (let i = crates.length - 1 ; i >= 0 ; i -= 1) {
  for (let j = 0 ; j < crates[0].length ; j += 1) {
    const crate = crates[i][j]
    if (crate !== '') {
      stacks[j].push(crate[1])
    }
  }
}

commands
  .split('\n')
  .map(command => command.split(' '))
  .map(command => {
    for (let i = 1; i <= +command[1]; i += 1) {
      stacks = moveCrates(stacks, +command[3] - 1, +command[5] - 1)
    }
  })

const topCrates = stacks.map(stack => stack[stack.length - 1]).join('')

console.log(topCrates)