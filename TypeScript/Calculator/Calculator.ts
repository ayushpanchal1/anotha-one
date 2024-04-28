import * as readline from 'readline';

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Define a function to perform arithmetic operations
function calculate(operator: string, num1: number, num2: number): number {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return NaN; // division by zero
            }
        default:
            return NaN; // invalid operator
    }
}

// Main function to run the calculator
function main() {
    rl.question("Enter the first number: ", (num1Input: string) => {
        rl.question("Enter the operator (+, -, *, /): ", (operatorInput: string) => {
            rl.question("Enter the second number: ", (num2Input: string) => {
                rl.close();

                // Parse input values to numbers
                const num1: number = parseFloat(num1Input);
                const num2: number = parseFloat(num2Input);

                // Check if parsed values are valid numbers
                if (isNaN(num1) || isNaN(num2)) {
                    console.log("Invalid input! Please enter valid numbers.");
                    return;
                }

                const operator: string = operatorInput;

                const result = calculate(operator, num1, num2);
                if (isNaN(result)) {
                    console.log("Invalid operation!");
                } else {
                    console.log(`Result: ${result}`);
                }
            });
        });
    });
}

// Run the main function
main();
