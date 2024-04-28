//For USER INPUT 
// import * as readline from 'readline';

// // Create readline interface
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });


interface Shape {
    calculateArea(): number;
}

class Rectangle implements Shape {
    constructor(private width: number, private height: number) {}

    calculateArea(): number {
        return this.width * this.height;
    }
}

class Circle implements Shape {
    constructor(private radius: number) {}

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

const rectangle = new Rectangle(5, 10);
console.log("Rectangle Area:", rectangle.calculateArea());

const circle = new Circle(7);
console.log("Circle Area:", circle.calculateArea()); 

// ****USER INPUT *****
// // Function to prompt user for input
// function getUserInput(promptText: string): Promise<string> {
//     return new Promise((resolve) => {
//         rl.question(promptText, (input) => {
//             resolve(input.trim());
//         });
//     });
// }

// (async () => {
//     try {
//         const widthInput = await getUserInput("Enter the width of the rectangle: ");
//         const width = parseFloat(widthInput);
//         if (isNaN(width)) {
//             throw new Error("Invalid input. Please enter a valid number.");
//         }

//         const heightInput = await getUserInput("Enter the height of the rectangle: ");
//         const height = parseFloat(heightInput);
//         if (isNaN(height)) {
//             throw new Error("Invalid input. Please enter a valid number.");
//         }

//         const rectangle = new Rectangle(width, height);
//         console.log("Rectangle Area:", rectangle.calculateArea());

//         const radiusInput = await getUserInput("Enter the radius of the circle: ");
//         const radius = parseFloat(radiusInput);
//         if (isNaN(radius)) {
//             throw new Error("Invalid input. Please enter a valid number.");
//         }

//         const circle = new Circle(radius);
//         console.log("Circle Area:", circle.calculateArea());

//         // Close the readline interface
//         rl.close();
//     } catch (error) {
//         console.error("Error:", error.message);
//         // Close the readline interface
//         rl.close();
//     }
// })();