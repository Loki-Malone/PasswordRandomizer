var resultEl = document.getElementById('resultt')
var lengthEl = document.getElementById('length')
var uppercaseEl = document.getElementById('uppercase')
var lowercaseEl = document.getElementById('lowercase')
var numbersEl = document.getElementById('numbers')
var symbolsEl = document.getElementById('symbols')
var generateEl = document.getElementById('generate')
var clipboardEl = document.getElementById('clipboard')



var randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number:getRandomNumber,
    symbol:getRandomSymbol

};

generateEL.addEventListner('click', () => {
    var length = lengthEl.value;
    var hasLower = lowercaseEl.checked;
    var hasUpper = UppercaseEl.checked;
    var hasNumber = NumbercaseEl.checked;
    var hasSymbol = SymbolcaseEl.checked;

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

    var typesCount = lower + upper + number + symbol;

    console.log('typesCount', typesCount);

    var typesArr = [{lower}, {upper}, {number}, {symbol}].filter
    (
        item => Object.values(items)[0]
    );

    console.log('typesArr:', typesArr);

    if(typesCount === 0) {
    return '';
    }

    for(let i = 0; 1 < length;i += typesCount) {
        typesArr.forEach(type => {
            var funcName = Object.keys(type)[0]
        
            generatePassword += randomFunc[funcName]();
        
        });
    }
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

    


