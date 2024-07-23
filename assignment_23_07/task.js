// Task1
function cubeArray(numbers) {
    return numbers.map(number => Math.pow(number, 3));
}

// Task2
function sumArray(numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

// Task3
function findPrimes(numbers) {
    return numbers.filter(number => {
        if (number < 2) {
            return false;
        }
        for (let i = 2; i * i <= number; i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    });
}

// Task 4
function averageOfOddSquares(numbers) {
    const oddNumbers = numbers.filter(number => number % 2 !== 0);
    const oddSquares = oddNumbers.map(number => Math.pow(number, 2));
    return oddSquares.reduce((acc, curr) => acc + curr, 0) / oddSquares.length;
}

// Task 5
function findLongestString(arr) {
    if (arr.length === 0) return null;

    return arr.reduce((longest, current) => current.length > longest.length ? current : longest, "");
}

// Task 6
function capitalizeFirstLetter(sentence) {
    return sentence
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// Task 7
function getPassingStudents(students) {
    return students.filter(student => student.score >= 60);
}

// Task 8
function createInstanceCounter() {
    let count = 0;
    return function () {
        count += 1;
        return count;
    };
}

// Task 9
function calculate(num1, num2, operation) {
    return new Promise((resolve, reject) => {
        // Check if numbers are valid
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            reject("Error: Both inputs must be numbers.");
        }

        // Perform the operation
        switch (operation) {
            case 'add':
                resolve(num1 + num2);
                break;
            case 'subtract':
                resolve(num1 - num2);
                break;
            case 'multiply':
                resolve(num1 * num2);
                break;
            case 'divide':
                if (num2 === 0) {
                    reject("Error: Division by zero is not allowed.");
                } else {
                    resolve(num1 / num2);
                }
                break;
            default:
                reject("Error: Invalid operation. Supported operations are 'add', 'subtract', 'multiply', 'divide'.");
        }
    });
}

// Task 10
function calculateTotalScore(objectsArray) {
    let totalScore = 0;

    objectsArray.forEach(object => {
        if (typeof object.score === 'number') {
            totalScore += object.score;
        }
    });

    return totalScore;
}
