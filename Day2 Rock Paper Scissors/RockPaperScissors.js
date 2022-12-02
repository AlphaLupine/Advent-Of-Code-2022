import { bonusScores, outcomeScores } from "./constants.js"
 
export class RockPaperScissors {
    constructor(awayMove, homeMove) {
        this.awayMove = awayMove
        this.homeMove = homeMove
        this.score = 0
    }

    declareResult() {
        switch(this.awayMove) {
            case "Rock":
                if(this.homeMove == "Rock") {
                    this.result = "draw"
                    this.score = bonusScores.rock + outcomeScores.draw
                    return
                }
                if(this.homeMove == "Paper") {
                    this.result = "win"
                    this.score = bonusScores.paper + outcomeScores.win
                    return
                }
                if(this.homeMove == "Scissors") {
                    this.result = "lost"
                    this.score = bonusScores.scissors + outcomeScores.lost
                    return
                }
                break;
            case "Paper":
                if(this.homeMove == "Rock") {
                    this.result = "lost"
                    this.score = bonusScores.rock + outcomeScores.lost
                    return
                }
                if(this.homeMove == "Paper") {
                    this.result = "draw"
                    this.score = bonusScores.paper + outcomeScores.draw
                    return
                }
                if(this.homeMove == "Scissors") {
                    this.result = "win"
                    this.score = bonusScores.scissors + outcomeScores.win
                    return
                }
                break;
            case "Scissors":
                if(this.homeMove == "Rock") {
                    this.result = "win"
                    this.score = bonusScores.rock + outcomeScores.win
                    return
                }
                if(this.homeMove == "Paper") {
                    this.result = "loss"
                    this.score = bonusScores.paper + outcomeScores.lost
                    return
                }
                if(this.homeMove == "Scissors") {
                    this.result = "draw"
                    this.score = bonusScores.scissors + outcomeScores.draw
                    return
                }
            break;
        }
    }

    calculateLosingMove() {
        switch(this.awayMove) {
            case "Rock":
                this.moveToLose = "Scissors"
                break
            case "Paper":
                this.moveToLose = "Rock"
                break
            case "Scissors":
                this.moveToLose = "Rock"
            break
        }
    }
}