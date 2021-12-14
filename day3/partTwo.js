// Store each line of input.txt in an array.
const fs = require('fs');
const input = fs.readFileSync(`${__dirname}/input.txt`, 'utf8');
const lines = input.split('\n');

const rates = getRates(lines);

//get the first line that have the same starting characters as gammaRate
const getFirstSimilarBytes = (lines, rates, criteria, index) => {
    if (lines.length === 1) {
        return lines[0];
    }
    const filteredLines = lines.filter(line => {
        return line[index] === rates[criteria][index];
    });
    return getFirstSimilarBytes(filteredLines, getRates(filteredLines), criteria, index + 1);
};

const oxygen = getFirstSimilarBytes(lines, rates, 'gammaRate', 0);
const scrub = getFirstSimilarBytes(lines, rates, 'epsilonRate', 0);

console.log({ oxygen, scrub });
console.log(parseInt(oxygen, 2) * parseInt(scrub, 2));

function getRates(lines) {
    const bitCounts = [];
    lines.reduce((bitCounts, line) => {
        if (line === '') {
            return bitCounts;
        }
        const bits = line.split('');
        bits.forEach((bit, index) => {
            if (bitCounts[index] === undefined) {
                bitCounts[index] = { '1': 0, '0': 0 };
            }
            if (bit === '1') {
                bitCounts[index]['1']++;
            }
            if (bit === '0') {
                bitCounts[index]['0']++;
            }
        });
        return bitCounts;
    }, bitCounts);

    //concatenate 0 and 1 to create binary string
    const rates = bitCounts.reduce((rates, bitCount) => {
        rates.gammaRate += bitCount['1'] >= bitCount['0'] ? '1' : '0';
        rates.epsilonRate += bitCount['1'] >= bitCount['0'] ? '0' : '1';
        return rates;
    }, { gammaRate: '', epsilonRate: '' });
    return rates;
}
