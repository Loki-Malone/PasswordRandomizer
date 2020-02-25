var generatebtn = document.querySelector('#generate')
  
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password')

    passwordText.value = password;

}

var randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number:getRandomNumber,
    symbol:getRandomSymbol

};
function generatebtn()

generatebtn.addEventListner('click', () => {
    var length = +lengthEl.value;
    var lower = lowercase.value;
    var upper = Uppercase.value;
    var number = Numbercase.value;
    var symbol = Symbolcase.value;

    passwordText.innerText = generatePassword(
        lower, 
        upper, 
        number, 
        symbol,
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
        
            generatedPassword += randomFunc[funcName]();
        
        });
    }

    console.log(generatedPassword);
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

    


