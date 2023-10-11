//Write code that will return a random letter from your name
let name = "Name"
let value = Math.floor(Math.random() * name.length)
console.log(name.charAt(value))