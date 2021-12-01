// Store each line of the input.txt file in an array.
const fs = require('fs');
const input = fs.readFileSync('./inputPart1.txt', 'utf8');
const lines = input.split('\n');

// Count the number of lines that are greater than the previous line.
const nbOfValuesGreaterThanPrevious = lines.reduce((count, line, index) => {
    if (index > 0 && line > lines[index - 1]) {
        count++;
    }
    return count;
}, 1);

console.log(nbOfValuesGreaterThanPrevious);
