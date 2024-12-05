function printMultiplicationTable(maxNumber) {
    let result = '';

    result += ' '.repeat(4);
    for (let i = 1; i <= maxNumber; i++) {
        result += i.toString().padStart(4);
    }
    result += '\n';

    for (let i = 1; i <= maxNumber; i++) {
        result += i.toString().padStart(3) + ' ';
        
        for (let j = 1; j <= maxNumber; j++) {
            result += (i * j).toString().padStart(4);
        }
        
        result += '\n';
    }

    console.log(result);
}

printMultiplicationTable(5);
