function numberToDigitNames(n) {

    let numberString = n.toString();

    let digitNames = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

    let numberWithDigitNames = [];

    for (let digit of numberString) {

        numberWithDigitNames.push(digitNames[digit]);

    }

    console.log(numberWithDigitNames)

    return numberWithDigitNames.join("...");
}

// console.log(`The function ${numberToDigitNames.name}() takes ${numberToDigitNames.length} parameters"`);

let numbers = [543210];

let numbersWithDigitNames = numbers.map(numberToDigitNames);

console.log(numbersWithDigitNames.join());