//Numbers

const myNumber = 42

const myFloat = 42.01

const myString = "42.3333"

console.log(myFloat)

//Compare values
console.log(myNumber === myFloat)

console.log(myNumber === myString)

//Convert string to number
console.log(Number(myString) + 3)

console.log(Number(myString) === myNumber)

//Not a number
console.log(Number("me"))

//True -> 1 , Falsee -> 0
console.log(Number(true))

//Check if the value is integer
console.log(Number.isInteger(myNumber))

//Parse to float value
console.log(Number.parseFloat(myNumber))

//Set the number of decimalse and returns a string
console.log(Number.parseFloat(myFloat).toFixed(1))
console.log(Number.parseFloat(myString).toFixed(2))

//Parse to integer
console.log(Number.parseInt(myString))

//Parse to string
console.log(myFloat.toString())