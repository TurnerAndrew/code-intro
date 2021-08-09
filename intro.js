const readline = require('readline')

// console.log(`Hello, World`)

const firstName = `Andrew`

let age = 40

// console.log(firstName, age)

let isCool = true

// console.log(isCool)

isCool = false

// console.log(isCool)

let height

// console.log(height)

let x = 4
let y = 10
let z = 10 + 4
let sum = x + y

// console.log(x, y, z, sum)

let str = "String"
let str2 = 'String'
let str3 = `String`

// console.log(str, str2, str3)

let quote = "'You miss 100% of the shots you don't take' -Michael Scott - Wayne Gretzky"

// console.log(quote)

const lastName = 'Turner'

const andrew = firstName + ' ' + lastName
const andrew1 = `${firstName} ${lastName}`

// console.log(andrew, andrew1)

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

reader.question("Howdy, what's your name?", function(answer) {
    console.log(`Hi ${answer}`)
})

//