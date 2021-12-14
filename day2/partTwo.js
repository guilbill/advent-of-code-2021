// Store each line of the input.txt file in an array.
const fs = require('fs');
const input = fs.readFileSync(`${__dirname}/input.txt`, 'utf8');
const lines = input.split('\n');

const finalPosition = lines.reduce((position, line) => {
    const [ action, value ] = line.split(' ');
    if (action === 'forward') {
        position.x += parseInt(value);
        position.depth += position.aim * parseInt(value);
    }
    if (action === 'down') {
        position.aim += parseInt(value);
    }
    if (action === 'up') {
        position.aim -= parseInt(value);
    }
    return position;
}, { x: 0, aim:0, depth: 0 });

console.log(finalPosition);
console.log(finalPosition.x * finalPosition.depth);
