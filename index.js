const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let randomLetterLeft = ""
let randomLetterRight = ""
let randomPassLeft = []
let randomPassRight = []
let buttonLeft = document.getElementById("button-left")
let buttonRight = document.getElementById("button-right")

function generatePasswords() {
    randomPassLeft = ""
    randomPassRight = ""
    for (let i = 0; i < 15; i++) {
        randomLetterLeft = characters[generateRandomNumbers()]
        randomPassLeft += randomLetterLeft
        buttonLeft.textContent = randomPassLeft
        
        randomLetterRight = characters[generateRandomNumbers()]
        randomPassRight += randomLetterRight
        buttonRight.textContent = randomPassRight
    }
}

function generateRandomNumbers() {
    let randomNumber = Math.floor(Math.random() * characters.length)
    return randomNumber
}

