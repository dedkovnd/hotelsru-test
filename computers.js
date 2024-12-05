function getComputersQuantity(number) {
    const lastInt = number % 10;
    const lastTwoInts = number % 100;

    let word;
    if (lastTwoInts >= 11 && lastTwoInts <= 19) {
        word = "компьютеров";
    } else if (lastInt === 1) {
        word = "компьютер";
    } else if (lastInt >= 2 && lastInt <= 4) {
        word = "компьютера";
    } else {
        word = "компьютеров";
    }

    return `${number} ${word}`;
}


console.log(getComputersQuantity(25));
console.log(getComputersQuantity(41));
console.log(getComputersQuantity(1048));
console.log(getComputersQuantity(2));
console.log(getComputersQuantity(12)); 
