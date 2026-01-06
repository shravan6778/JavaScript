console.log("--- 1. ARITHMETIC OPERATORS (Math) ---");
// Use these for calculations.

let x = 10;
let y = 3;

console.log("Addition (x + y):",      x + y);  // 13
console.log("Subtraction (x - y):",   x - y);  // 7
console.log("Multiplication (x * y):",x * y);  // 30
console.log("Division (x / y):",      x / y);  // 3.333...
console.log("Modulus (x % y):",       x % y);  // 1 (The remainder of 10 divided by 3)
console.log("Exponentiation (x ** y):", x ** y); // 1000 (10 to the power of 3)

// Increment/Decrement
let count = 5;
count++; // Increment (Add 1)
console.log("Increment (count++):", count); // 6
count--; // Decrement (Subtract 1)
console.log("Decrement (count--):", count); // 5


console.log("\n--- 2. ASSIGNMENT OPERATORS (Saving Values) ---");
// Use these to update variables quickly.

let num = 10;
num += 5; // Same as: num = num + 5
console.log("Add & Assign (+= 5):", num); // 15

num -= 2; // Same as: num = num - 2
console.log("Subtract & Assign (-= 2):", num); // 13


console.log("\n--- 3. COMPARISON OPERATORS (Testing) ---");
// Use these in logic (if statements) to compare values. Returns True or False.

let a = 5;      // Number
let b = "5";    // String

// Loose Equality (==) -> Checks value ONLY (ignores type)
console.log("Equal (5 == '5'):", a == b); // true (Wait, what? JS converts the string to number)

// Strict Equality (===) -> Checks value AND type (ALWAYS USE THIS)
console.log("Strict Equal (5 === '5'):", a === b); // false (Number is not String)

console.log("Not Equal (!=):",    a != 6);  // true
console.log("Greater (>):",       10 > 5);  // true
console.log("Less or Equal (<=):", 4 <= 4); // true


console.log("\n--- 4. LOGICAL OPERATORS (Complex Logic) ---");
// Use these to combine multiple conditions.

let hasLicense = true;
let hasCar = false;
let isTired = false;

// AND (&&) -> Both must be true
console.log("Can drive? (License && Car):", hasLicense && hasCar); // false

// OR (||) -> At least one must be true
console.log("Can travel? (License || Car):", hasLicense || hasCar); // true

// NOT (!) -> Flips the value
console.log("Is awake? (!isTired):", !isTired); // true


console.log("\n--- 5. STRING OPERATORS (Text) ---");
// Use '+' to join strings together (Concatenation).

let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log("Concatenation:", fullName);

// Note: If you add a Number to a String, JS turns the Number into a String!
console.log("String + Number ('5' + 5):", "5" + 5); // "55" (Not 10!)


console.log("\n--- 6. TERNARY OPERATOR (Short 'if...else') ---");
// Use this for quick 1-line decisions.
// Syntax: condition ? value_if_true : value_if_false

let age = 20;
let status = (age >= 18) ? "Adult" : "Minor";
console.log("Ternary Check:", status);