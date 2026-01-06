console.log("--- 1. SCOPE DIFFERENCES ---");

function scopeTest() {
    if (true) {
        var functionScoped = "I am var (Function Scoped)";
        let blockScoped = "I am let (Block Scoped)";
        const alsoBlockScoped = "I am const (Block Scoped)";
        
        console.log("Inside block:", functionScoped); // Works
        console.log("Inside block:", blockScoped);    // Works
        console.log("Inside block:", alsoBlockScoped);// Works
    }

    console.log("Outside block:", functionScoped); // Works! 'var' leaks out of the block.
    
    // The following lines would crash the program because let/const stay inside the {} block:
    // console.log("Outside block:", blockScoped);      // Error: blockScoped is not defined
    // console.log("Outside block:", alsoBlockScoped);  // Error: alsoBlockScoped is not defined
}

scopeTest();


console.log("\n--- 2. REASSIGNMENT DIFFERENCES ---");

var a = 10;
a = 20; // ✅ Allowed: 'var' can be updated.
console.log("var a:", a);

let b = 10;
b = 20; // ✅ Allowed: 'let' can be updated.
console.log("let b:", b);

const c = 10;
// c = 20; // ❌ Error! 'const' cannot be updated (reassigned).
console.log("const c:", c);


console.log("\n--- 3. REDECLARATION DIFFERENCES ---");

var x = "Hello";
var x = "World"; // ✅ Allowed: 'var' lets you declare the same name twice.
console.log("var x:", x);

let y = "Hello";
// let y = "World"; // ❌ Error! You cannot redeclare 'let' in the same scope.

const z = "Hello";
// const z = "World"; // ❌ Error! You cannot redeclare 'const' in the same scope.


console.log("\n--- 4. CONST OBJECTS (Important Nuance) ---");

const person = { name: "Alice" };

// person = { name: "Bob" }; // ❌ Error! You cannot replace the whole object.

person.name = "Bob"; // ✅ Allowed! You CAN change properties inside the object.
console.log("const person name:", person.name);