//DOM elements
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

//generate event listen
generateEl.addEventListener('click', () => {
    
    const length = +lengthEl.value; // + sign makes it an int. Earnary operator 
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolEl.checked;
   
    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
})

//Generate password function
function generatePassword(lower, upper, number, symbol, length){
    //1. Initialize password variable
    //2. Filter out unchecked types
    //3. Loop over the length, call generator function for each type
    //4. Add final password to password variable and return it

    let generatePassword = '';
    const typesCount = lower + upper + number + symbol;

    console.log('typesCount: ', typesCount);

    //array of types
    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter
    (
        item => Object.values(item)[0] 
        //whatever that is false is going to be filter out of the array
    ); 

    console.log('typesArr: ', typesArr);

    //check for none checked, if all is none checked there is no need to generate a password
    if(typesCount === 0){
        return '';// return empty string
    }

    //generating different characters
}

//Functions of Generator

function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol(){
    const symbols = "!@#$%^&*()[]{}=<>,.'_+";
    return symbols[Math.floor(Math.random() * symbols.length)];
}

//console.log(getRandomSymbol());