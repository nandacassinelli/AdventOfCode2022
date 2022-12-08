/* Opponent is going to play:  How round needs to end:  Score for the shape:  Score for the outcome:
   A: Rock                     X: I lose                1: Rock               0: Lost
   B: Paper                    Y: Draw                  2: Paper              3: Draw
   C: Scissors                 Z: I win                 3: Scissors           6: Won */


   const { input } = require('./input')

   const outcomeScore = {
     X: 0,
     Y: 3,
     Z: 6,
   }
   
   const shapeScore = {
     AX: 3, // C
     AY: 1, // A
     AZ: 2, // B
     BX: 1, // A
     BY: 2, // B
     BZ: 3, // C
     CX: 2, // A
     CY: 3, // C
     CZ: 1, // B
   }
   
   
   const totalScore = input.split('\n')
     .map(round => {
       const roundShapes = round.split(' ')
       return outcomeScore[roundShapes[1]] + shapeScore[roundShapes.join('')]
     })
     .reduce((totalScore, roundScore) => totalScore + roundScore)
   
   console.log(totalScore)