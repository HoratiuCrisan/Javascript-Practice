let myVariable = "Mathematics"

//String methods
console.log(myVariable.charAt(0))

//First occurance of a substring
console.log(myVariable.indexOf("mat"))

//Last occurance of a substring
console.log(myVariable.lastIndexOf("ath"))

//Returns the characters from the start position to the end position -1
//If the start >= the end nothing will be returned
//If the end position is not provided it will return from start to the end of the string
console.log(myVariable.slice(1,3))

//Returns the string to upper case
console.log(myVariable.toUpperCase())

//Returns the string to lower case
console.log(myVariable.toLowerCase())

//Returns boolean data
console.log(myVariable.includes("mat"))

//Separating the string into an array of strings when it finds the character we search for
console.log(myVariable.split("e"))

