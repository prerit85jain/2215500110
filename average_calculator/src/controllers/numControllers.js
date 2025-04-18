const express = require('express');
const router = express.Router();

const generatePrimes = (num) => {
    const primes = [];
    for (let i = 2; primes.length < num; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
};
const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const generateFibonacci = (num) => {
    const fib = [0, 1];
    while(fib.length < num) {
        fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    }
    return fib.slice(1);
};

const generateEven = (num) => {
    const even = [];
    for (let i = 2; even.length < num; i += 2) {
        even.push(i);
    }
    return even;
};

const generateRandom = (num) => {
    const random = [];
    for (let i = 0; i < num; i++) {
        random.push(Math.floor(Math.random() * 100));
    }
    return random;
};

router.get('/:numid', (req, res) => {
    const {numid} = req.params;
    let nums;
    switch(numid){
        case 'p':
            nums = generatePrimes(10);
            break;
        case 'f':
            nums = generateFibonacci(10);
            break;
        case 'e':
            nums = generateEven(10);
            break;
        case 'r':
            nums = generateRandom(10);
            break;
        default:
            return res.status(400).send('Invalid type.');
    }

    const average = nums.reduce((sum, num) => sum + num, 0) / nums.length;
    res.json({
        type: numid,
        numbers: nums,
        average: average
    });
});

module.exports = router;