import { input } from "./data.js"

const data = input.split("\n")
let tempSum = 0
let sumOfCalories = []

//Part 1

data.map((calorieCount, i=1) => {
    if(calorieCount != "" && i != data.length - 1) {
        i++
        tempSum += parseInt(calorieCount)
    } else {
        i++
        sumOfCalories.push(tempSum)
        tempSum = 0
    }
})

let max = Math.max(...sumOfCalories)
console.log(`The elf with the largest amount of calories as food was *elf ${sumOfCalories.indexOf(max) + 1}* with a total of ${max} calories!`)


//Part 2

let maxValues = []

for(let i = 0; i < 3; i++) {
    max = Math.max(...sumOfCalories)
    sumOfCalories.splice(sumOfCalories.indexOf(max), 1)
    maxValues.push(max)
}

let combinedTopThree = 0
maxValues.map((calories) => 
    combinedTopThree += calories
)

console.log(`The combined total of the top three elves is ${combinedTopThree}`)

