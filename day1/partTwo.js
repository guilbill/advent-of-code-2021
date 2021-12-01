// Store each line of the input.txt file in an array.
const fs = require('fs');
const input = fs.readFileSync(`${__dirname}/inputPart1.txt`, 'utf8');
const lines = input.split('\n').map(line => parseInt(line));

// Consider sums of a three-measurement sliding window. How many sums are larger than the previous sum?
// If the input is
// 199  A
// 200  A B
// 208  A B C
// 210    B C D
// 200      C D
// 207        D
// The sums are:
// 199 + 200 + 208 = 607
// 200 + 208 + 210 = 618
// 208 + 210 + 200 = 618
// 210 + 200 + 207 = 607

const windows = lines.map((_, index) => {
    if (index + 3 >= lines.length) {
        return;
    }
    return lines[index] + lines[index + 1] + lines[index + 2];
}).filter(window => window);
console.log(windows);
// Count the number of lines that are greater than the previous line.
const nbOfValuesGreaterThanPrevious = windows.reduce((count, _, index) => {
    const currentWindow = windows[index];
    const previousWindow = windows[index - 1];
    if (index > 0 && currentWindow > previousWindow) {
        count++;
    }
    return count;
}, 0);

console.log(nbOfValuesGreaterThanPrevious);
