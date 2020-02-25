const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number:getRandomNumber,
    symbol:getRandomSymbol

};


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

    


