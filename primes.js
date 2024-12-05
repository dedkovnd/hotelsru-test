function getPrimes(min, max) {
    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    return Array.from({ length: max - min + 1 }, (_, i) => min + i).filter(isPrime);
}

const min = 11;
const max = 20;
console.log(getPrimes(min, max));
