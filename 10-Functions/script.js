console.log("--- 1. FUNCTION DECLARATION (The Classic) ---");
// This is the standard way. It is "Hoisted" (can be called before it's defined).

// Calling it before definition works!
console.log(greet("Alice")); 

function greet(name) {
    return `Hello, ${name}!`;
}


console.log("\n--- 2. FUNCTION EXPRESSION (The Variable) ---");
// Storing a function inside a variable.
// NOT Hoisted (Must be defined before use).

const add = function(a, b) {
    return a + b;
};

console.log("Sum:", add(5, 10));


console.log("\n--- 3. ARROW FUNCTIONS (The Modern Short-hand) ---");
// Introduced in ES6. Shorter syntax, great for one-liners.

// Long version:
// const multiply = (a, b) => { return a * b; }

// Short version (Implicit return if one line):
const multiply = (a, b) => a * b; 

console.log("Multiplication:", multiply(4, 5));


console.log("\n--- 4. PARAMETERS (Default & Rest) ---");

// Default Parameters: Use "Guest" if no name is provided.
function welcomeUser(name = "Guest") {
    console.log(`Welcome, ${name}`);
}
welcomeUser(); // "Welcome, Guest"
welcomeUser("John"); // "Welcome, John"

// Rest Parameters (...): Collects infinite arguments into an array.
function calculateTotal(...prices) {
    // 'prices' is now [10, 20, 30]
    return prices.reduce((total, p) => total + p, 0);
}
console.log("Total Cart:", calculateTotal(10, 20, 30, 5));


console.log("\n--- 5. CALLBACK FUNCTIONS (Higher-Order) ---");
// Passing a function INTO another function.
// Crucial for handling events or data processing.

function processData(data, callbackAction) {
    console.log("Processing data...");
    callbackAction(data); // Execute the function passed in
}

// We pass an anonymous arrow function as the 'callbackAction'
processData("User123", (id) => {
    console.log(`✅ Saved user ${id} to database.`);
});


console.log("\n--- 6. CLOSURES (Data Privacy) ---");
// A function inside a function that "remembers" its environment.

function createCounter() {
    let count = 0; // This variable is "closed over" (protected)
    
    return function() {
        count++;
        return count;
    };
}

const myCounter = createCounter();
console.log("Count:", myCounter()); // 1
console.log("Count:", myCounter()); // 2
console.log("Count:", myCounter()); // 3
// We cannot access 'count' directly from here. It is private.