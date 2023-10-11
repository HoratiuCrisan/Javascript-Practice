//Rock, Paper, Scissors game
const options = ["rock", "paper", "scissors"]
let playGame = confirm("Shall we play a rock, paper, scissors game?")

const GenerateHostOption = (options) => {
    const value = Math.floor(Math.random() * options.length)
    console.log(options[value])
    return options[value]
}

const CheckResult = (userOption, hostOption) => {
    let message = `You chose ${userOption}\nHost chose ${hostOption}\n`
    if (userOption === hostOption)
        alert(message + "Draw!")
    else if (
        (userOption === "rock" && hostOption === "scissors") ||
        (userOption === "scissors" && hostOption === "paper") || 
        (userOption === "paper" && hostOption === "rock")
    )
        alert(message + "You won!")
    else 
        alert(message + "You lost!")
}

if (playGame) {
    let userInput = prompt("Please enter rock, paper or scissors")
    if (!options.includes(userInput.toLowerCase()))
        alert("Option does not exist!")
    else {
        let hostOption = GenerateHostOption(options)
        CheckResult(userInput, hostOption)
    }
} else 
    alert("Okay, maybe next time!")

