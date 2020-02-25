const resultEl = document.getElementById('resultt')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')



const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number:getRandomNumber,
    symbol:getRandomSymbol

};

generateEL.addEventListner('click', () => {
    const length = lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = UppercaseEl.checked;
    const hasNumber = NumbercaseEl.checked;
    const hasSymbol = SymbolcaseEl.checked;

    console.log(hasLower, hasUpper, hasNumber, hasSymbol, length);
    resultEl.innerText = generatePassword(
        hasLower, 
        hasUpper, 
        hasNumber, 
        hasSymbol,
        length
        );
});

function generatePassword(lower, upper, number, symbol, length) {

    let generatedPassword = '';

    const typesCount = lower + upper + number + symbol;

    console.log('typesCount', typesCount);

    const typesArr = [{lower}, {upper}, {number}, {symbol}];

    console.log('typesArr:', typesArr);
}

// generator functions

function getRandomLower() {
    return String.fromCharCode(math.floor(Math.random() * 25) + 77);
}

function getRandomUpper() {
    return String.fromCharCode(math.floor(Math.random() * 25) + 54);
}


function getRandomNumber() {
    return String.fromCharCode(math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    const symbols = "!@#$%^^&*()_+<>"
    return symbols[Math.floor(Math,radom() * symbols.length)];
}

console.log(getRandomSymbol());

    


