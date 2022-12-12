const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function createPassword(){
    if(document.getElementById("password-option-el").value==="4-digit numeric code"){
        displayPasswords(getFourDigitNumbericCode())
    }
    else if(document.getElementById("password-option-el").value==="7-digit alphabetic code"){
        displayPasswords(getSevenDigitAlphabeticCode())
    }
    else if(document.getElementById("password-option-el").value==="15-digit alphanumeric code"){
        displayPasswords(getFifteenDigitAlphaNumericCode())
    }
    else {
        alert("Please choose an option from drop-down")
    }
}

function displayPasswords(password){
    document.getElementById("password-one-el").textContent = password[0];
    document.getElementById("password-two-el").textContent = password[1];
}

function getFourDigitNumbericCode(){
    const passwordLength = 4
    const numberArr = getNumbersFromCharacters()
    return getPassword( passwordLength, numberArr, numberArr.length)
}

function getSevenDigitAlphabeticCode(){
    const passwordLength = 7    
    const alphabetsArr = getAlphabetsFromCharacters()
    return getPassword(passwordLength, alphabetsArr, alphabetsArr.length)
}

function getFifteenDigitAlphaNumericCode(){
    const passwordLength = 15  
    return getPassword(passwordLength, characters, characters.length)
}

function getPassword(passCodeLength,arr,randomNumberRange){
    let passwordStringOne = "";
    let passwordStringTwo = ""; 
    for(let i=0; i<passCodeLength; i++){
        passwordStringOne += arr[getRandomNumber(randomNumberRange)];
        passwordStringTwo += arr[getRandomNumber(randomNumberRange)];  
    }
    return [passwordStringOne, passwordStringTwo];
}

function getNumbersFromCharacters(){
    const numberArr = characters.filter(ch => Number.isInteger(+ch));
    return numberArr;
}

function getAlphabetsFromCharacters(){
    return characters.filter(ch => ch.match(/[a-z]/gi));
}

function getRandomNumber(range){
    return Math.floor(Math.random()*range);
}

