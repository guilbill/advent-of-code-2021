// Store each line of input.txt in an array.
const fs = require('fs');
const input = fs.readFileSync(`${__dirname}/input.txt`, 'utf8');
const lines = input.split('\n');
const bitCounts = [];

lines.reduce((bitCounts, line) => {
    const bits = line.split('');
    bits.forEach((bit, index) => {
        if (bitCounts[index] === undefined) {
            bitCounts[index] = {'1':0,'0':0};
        }
        if (bit === '1') {
            bitCounts[index]['1']++;
        } else {
            bitCounts[index]['0']++;
        }
    });
    return bitCounts;
}, bitCounts);

//concatenate 0 and 1 to create binary string
const rates = bitCounts.reduce((rates, bitCount) => {
    rates.gammaRate += bitCount['1'] > bitCount['0'] ? '1' : '0';
    rates.epsilonRate += bitCount['0'] > bitCount['1'] ? '1' : '0';
    return rates;
}, { gammaRate:'', epsilonRate:'' });

//convert binary string to decimal
const gammaRate = parseInt(rates.gammaRate, 2);
const epsilonRate = parseInt(rates.epsilonRate, 2);
console.log({ epsilonRate, gammaRate });
console.log(epsilonRate * gammaRate);
