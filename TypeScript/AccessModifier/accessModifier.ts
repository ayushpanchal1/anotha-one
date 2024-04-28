// class MyClass {
//     public publicProperty: string; // Accessible from anywhere
//     private privateProperty: string; // Accessible only within the class
//     protected protectedProperty: string; // Accessible within the class and its subclasses

//     constructor(publicProperty: string, privateProperty: string, protectedProperty: string) {
//         this.publicProperty = publicProperty;
//         this.privateProperty = privateProperty;
//         this.protectedProperty = protectedProperty;
//     }

//     // Methods can also have access modifiers
//     public publicMethod() {
//         console.log("This is a public method");
//         console.log("Accessing private property inside public method:", this.privateProperty);
//     }

//     private privateMethod() {
//         console.log("This is a private method");
//     }

//     protected protectedMethod() {
//         console.log("This is a protected method");
//     }
// }

// let obj = new MyClass("public", "private", "protected");

// console.log(obj.publicProperty); // Accessible
// // console.log(obj.privateProperty); // Error: Property 'privateProperty' is private and only accessible within class 'MyClass'.
// // console.log(obj.protectedProperty); // Error: Property 'protectedProperty' is protected and only accessible within class 'MyClass' and its subclasses.

// obj.publicMethod(); // Accessible
// // obj.privateMethod(); // Error: Property 'privateMethod' is private and only accessible within class 'MyClass'.
// // obj.protectedMethod(); // Error: Property 'protectedMethod' is protected and only accessible within class 'MyClass' and its subclasses.
class Person {
    public firstName:string;
    private lastName:string;
    constructor(firstName:string, lastName:string) {
        this.firstName=firstName;
        this.lastName=lastName;
        console.log(firstName,lastName);
    }
}
class Student extends Person {
    protected id:number;
    name:string;
    constructor(id:number,firstName:string, lastName:string) {
        super(firstName,lastName);
        this.id=id;
        this.name=firstName;
    }

    walk():void {
        console.log(this.id);
        console.log(`${this.name} is a Student`);
    }
}
const stud1=new Student(38, "Hemanshu","Rajde");
stud1.walk();