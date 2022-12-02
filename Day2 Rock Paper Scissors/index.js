import { RockPaperScissors } from "./RockPaperScissors.js"
import { guide } from "./data.js"
import { homeMoves, awayMoves, requiredResult } from "./constants.js"

//Part 1

const moves = guide.split("\n")

let runningScore = 0
for(let games of moves) {
    let gameMoves = games.split(" ")
    let game = new RockPaperScissors(awayMoves[gameMoves[0]], homeMoves[gameMoves[1]])
    game.declareResult()
    runningScore += game.score
}

console.log(`My total score would be: ${runningScore} for part 1`)

//Part 2

runningScore = 0
for(let games of moves) {
    let gameMoves = games.split(" ")
    let homeMove = calculateMove(awayMoves[gameMoves[0]], requiredResult[gameMoves[1]])
    let game = new RockPaperScissors(awayMoves[gameMoves[0]], homeMoves[homeMove])
    game.declareResult()
    runningScore += game.score
}

console.log(`My total score would be: ${runningScore} for part 2`)


function calculateMove(opponentMove, requiredOutcome) {
    switch(opponentMove) {
        case "Rock":
            if(requiredOutcome == "win") {
                return "Y" //paper
            }
            if(requiredOutcome == "draw") {
                return "X" //rock
            }
            if(requiredOutcome == "lost") {
                return "Z" //scissors
            }
            break;
        case "Paper":
            if(requiredOutcome == "win") {
                return "Z" //scissors
            }
            if(requiredOutcome == "draw") {
                return "Y" //paper
            }
            if(requiredOutcome == "lost") {
                return "X" //rock
            }
            break;
        case "Scissors":
            if(requiredOutcome == "win") {
                return "X" //rock
            }
            if(requiredOutcome == "draw") {
                return "Z" //scissors
            }
            if(requiredOutcome == "lost") {
                return "Y" //paper
            }
        break;
    }
}