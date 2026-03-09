
var closestPrimes = function(left, right) {
    let sieve = new Array(right + 1).fill(1);
    sieve[0] = 0, sieve[1] = 0;
    
    for (let i = 2; i * i <= right; i++) {
        if (sieve[i] === 1) {
            for (let mul = i * i; mul <= right; mul += i) {
                sieve[mul] = 0;
            }
        }
    }
    
    let primeNumbers = [];
    for (let i = left; i <= right; i++) {
        if (sieve[i] === 1) {
            primeNumbers.push(i);
        }
    }
    if (primeNumbers.length < 2) {
        return [-1, -1];
    }
    
    let minDifference = Infinity;
    let closestPair = [-1, -1];
    
    for (let index = 1; index < primeNumbers.length; index++) {
        let difference = primeNumbers[index] - primeNumbers[index - 1];
        if (difference < minDifference) {
            minDifference = difference;
            closestPair = [primeNumbers[index - 1], primeNumbers[index]];
        }
    }
    
    return closestPair;
};