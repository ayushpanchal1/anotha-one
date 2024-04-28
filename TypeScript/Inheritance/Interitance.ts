// Single Inheritance
class Animal {
    protected name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    speak(): void {
      console.log(`${this.name} makes a noise.`);
    }
  }
  
  class Dog extends Animal {
    constructor(name: string) {
      super(name);
    }
  
    speak(): void {
      console.log(`${this.name} barks.`);
    }
  }
  
  const dog = new Dog("Buddy");
  dog.speak(); // Output: Buddy barks.
  
  // Multi-level Inheritance
  class Bird extends Animal {
    constructor(name: string) {
      super(name);
    }
  
    speak(): void {
      console.log(`${this.name} chirps.`);
    }
  }
  
  const bird = new Bird("Sparrow");
  bird.speak(); // Output: Sparrow chirps.
  
  // Hierarchical Inheritance
  class Cat extends Animal {
    constructor(name: string) {
      super(name);
    }
  
    speak(): void {
      console.log(`${this.name} meows.`);
    }
  }
  
  const cat = new Cat("Whiskers");
  cat.speak(); // Output: Whiskers meows.
  
  // Hybrid Inheritance (Using Interface)
  interface Swimmer {
    swim(): void;
  }
  
  class Fish extends Animal implements Swimmer {
    constructor(name: string) {
      super(name);
    }
  
    speak(): void {
      console.log(`${this.name} does not make a sound.`);
    }
  
    swim(): void {
      console.log(`${this.name} swims.`);
    }
  }
  
  const fish = new Fish("Goldie");
  fish.speak(); // Output: Goldie does not make a sound.
  fish.swim(); // Output: Goldie swims.
 
// import * as readline from 'readline';

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// class Animal {
//   protected name: string;

//   constructor(name: string) {
//     this.name = name;
//   }

//   speak(): void {
//     console.log(`${this.name} makes a noise.`);
//   }
// }

// class Dog extends Animal {
//   constructor(name: string) {
//     super(name);
//   }

//   speak(): void {
//     console.log(`${this.name} barks.`);
//   }
// }

// class Bird extends Animal {
//   constructor(name: string) {
//     super(name);
//   }

//   speak(): void {
//     console.log(`${this.name} chirps.`);
//   }
// }

// class Cat extends Animal {
//   constructor(name: string) {
//     super(name);
//   }

//   speak(): void {
//     console.log(`${this.name} meows.`);
//   }
// }

// interface Swimmer {
//   swim(): void;
// }

// class Fish extends Animal implements Swimmer {
//   constructor(name: string) {
//     super(name);
//   }

//   speak(): void {
//     console.log(`${this.name} does not make a sound.`);
//   }

//   swim(): void {
//     console.log(`${this.name} swims.`);
//   }
// }

// function performInheritance(inheritanceType: string, animalName: string): void {
//   let animal: Animal | null = null;

//   switch (inheritanceType.toLowerCase()) {
//     case 'single':
//       animal = new Dog(animalName);
//       break;
//     case 'multi-level':
//       animal = new Bird(animalName);
//       break;
//     case 'hierarchical':
//       animal = new Cat(animalName);
//       break;
//     case 'hybrid':
//       animal = new Fish(animalName);
//       break;
//     default:
//       console.log('Invalid inheritance type.');
//   }

//   if (animal) {
//     animal.speak();
//   }
// }

// rl.question("Enter the type of inheritance (single, multi-level, hierarchical, hybrid): ", (inheritanceType) => {
//   rl.question("Enter the name of the animal: ", (animalName) => {
//     performInheritance(inheritanceType, animalName);
//     rl.close();
//   });
// });
