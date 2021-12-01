// Store each line of the input.txt file in an array.
const fs = require('fs');
const input = fs.readFileSync(`${__dirname}/inputPart1.txt`, 'utf8');
const lines = input.split('\n').map(line => parseInt(line));

const windows = lines.map((_, index) => {
    if (index + 3 >= lines.length) {
        return;
    }
    return lines[index] + lines[index + 1] + lines[index + 2];
}).filter(window => window);

// Count the number of lines that are greater than the previous line.
const nbOfValuesGreaterThanPrevious = windows.reduce((count, _, index) => {
    if (index > 0 && windows[index] >  windows[index - 1]) {
        count++;
    }
    return count;
}, 0);

console.log(nbOfValuesGreaterThanPrevious);
