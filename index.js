const passwordLength = 12
const includeLowerCase = true
const includeUpperCase = true
const includeNumbers = true
const includeSymbols = true

const password = genPassword(passwordLength,
                             includeLowerCase,
                             includeUpperCase,
                             includeNumbers,
                             includeSymbols)

function genPassword(        passwordLength,
                             includeLowerCase,
                             includeUpperCase,
                             includeNumbers,
                             includeSymbols){
const LowerCase = "abcdefghijklmnopqrstuvwxyz"
let UpperCaseConv = LowerCase.toUpperCase()
const UpperCase = String(UpperCaseConv)
const Numbers = "12345678901234567890"
const Symbols = "!@#$%^&*()_+:<>?!@#$%^&*()"

let allowedChars = ""
let password = "" 

allowedChars += includeLowerCase ? LowerCase : ""
allowedChars += includeUpperCase ? UpperCase : ""
allowedChars += includeNumbers ? Numbers : ""
allowedChars += includeSymbols ? Symbols : ""

for(let i = 0; i<passwordLength; i++){
    const genIndex = Math.floor(Math.random() * allowedChars.length)
    password += allowedChars[genIndex]
}
return password
}
console.log(password)