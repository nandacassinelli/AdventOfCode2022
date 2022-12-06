/* Opponent is going to play: Should play in response: Score for the shape:  Score for the outcome
   A: Rock                    X: Rock                  1: Rock               0: Lost
   B: Paper                   Y: Paper                 2: Paper              3: Draw
   C: Scissors                Z: Scissors              3: Scissors           6: Won */


const { input } = require('./input')

const shapeScore = {
  X: 1,
  Y: 2,
  Z: 3,
}

const outcomeScore = {
  AX: 3,
  AY: 6,
  AZ: 0,
  BX: 0,
  BY: 3,
  BZ: 6,
  CX: 6,
  CY: 0,
  CZ: 3,
}


const totalScore = input.split('\n')
  .map(round => {
    const roundShapes = round.split(' ')
    return shapeScore[roundShapes[1]] + outcomeScore[roundShapes.join('')]
  })
  .reduce((totalScore, roundScore) => totalScore + roundScore)

console.log(totalScore)