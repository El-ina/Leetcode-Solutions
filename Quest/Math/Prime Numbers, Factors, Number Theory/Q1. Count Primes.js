function countPrimes(n) {
    const isPrime = new Array(n).fill(true);

    let primeCount = 0;

    for (let i = 2; i < n; i++) {
        if (isPrime[i]) {
            primeCount++;
            for (let j = i + i; j < n; j += i) {
                isPrime[j] = false;
            }
        }
    }

    return primeCount;
}
