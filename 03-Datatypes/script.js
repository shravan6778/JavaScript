console.log("--- 1. PRIMITIVE DATA TYPES (Stored by Value) ---");

// A. Number: Represents both integers and floating-point numbers.
// Use for: Math, counting, prices, generic calculations.
let age = 25;
let price = 99.99;
console.log("Value:", age, "| Type:", typeof age);
console.log("Value:", price, "| Type:", typeof price);

// B. String: Represents text.
// Use for: Names, messages, IDs, descriptions.
let greeting = "Hello, World!";
let templateLiteral = `I am ${age} years old`; // Backticks allow variable insertion
console.log("Value:", greeting, "| Type:", typeof greeting);

// C. Boolean: Represents logical entities (True or False).
// Use for: Toggles, conditional checks (if/else), logic flags.
let isLoggedIn = true;
let hasPaid = false;
console.log("Value:", isLoggedIn, "| Type:", typeof isLoggedIn);

// D. Undefined: A variable has been declared but not assigned a value yet.
// Use for: Checking if a variable has been initialized.
let currentUser;
console.log("Value:", currentUser, "| Type:", typeof currentUser);

// E. Null: Represents an intentional "empty" or "non-existent" value.
// Use for: Resetting a variable or explicitly stating "this has no value".
let selectedProduct = null;
console.log("Value:", selectedProduct, "| Type:", typeof selectedProduct); 
// Note: 'typeof null' returning 'object' is a famous historical bug in JS!

// F. BigInt: Used for integers too large for the standard Number type.
// Use for: High-precision timestamps, large IDs from databases.
let hugeNumber = 9007199254740991n; // Notice the 'n' at the end
console.log("Value:", hugeNumber, "| Type:", typeof hugeNumber);

// G. Symbol: Unique and immutable identifier.
// Use for: Unique object keys that won't collide with other keys.
let uniqueID = Symbol("id");
console.log("Value:", uniqueID.toString(), "| Type:", typeof uniqueID);


console.log("\n--- 2. REFERENCE DATA TYPES (Stored by Reference) ---");

// A. Object: A collection of key-value pairs.
// Use for: Grouping related data (like a user profile).
let person = {
    name: "John",
    city: "New York",
    isActive: true
};
console.log("Person Object:", person);
console.log("Type:", typeof person);

// B. Array: An ordered list of values (technically a special type of Object).
// Use for: Lists, collections of items, queues.
let colors = ["Red", "Green", "Blue"];
console.log("First Color:", colors[0]);
console.log("Type:", typeof colors); // Arrays are essentially objects in JS

// C. Date: A built-in object for handling time.
// Use for: Timestamps, calendars.
let today = new Date();
console.log("Today is:", today);


console.log("\n--- 3. DYNAMIC TYPING (The 'Wild Card') ---");

// JavaScript is "Dynamically Typed", meaning a variable can change types.
let distinctVariable = 100;    // Starts as a Number
console.log("Currently:", distinctVariable, "(Number)");

distinctVariable = "Now I am text"; // Becomes a String
console.log("Currently:", distinctVariable, "(String)");