function getCommonDivisors(numbers) {
    function gcd(a, b) {
        while (b !== 0) {
            const temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    function findGcdArr(nums) {
        return nums.reduce((acc, num) => gcd(acc, num));
    }

    function getDivisors(n) {
        const divisors = [];
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                divisors.push(i);
                if (i !== n / i) {
                    divisors.push(n / i);
                }
            }
        }
        if (n > 1) {
            divisors.push(n);
        }
        return divisors.sort((a, b) => a - b);
    }

    const gcdNums = findGcdArr(numbers);
    return getDivisors(gcdNums); 
}

const numbers = [42, 12, 18];
console.log(getCommonDivisors(numbers));
