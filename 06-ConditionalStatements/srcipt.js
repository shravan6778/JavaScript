console.log("--- 1. IF...ELSE (The Basic Choice) ---");
// Use this for simple "Yes or No" decisions.

let batteryLevel = 15;

if (batteryLevel < 20) {
    // This runs ONLY if the condition is true
    console.log("⚠️ Battery low! Please charge.");
} else {
    // This runs if the condition is false
    console.log("✅ Battery level is okay.");
}


console.log("\n--- 2. ELSE IF (The Ladder) ---");
// Use this when you have more than two possible outcomes.
// The code stops checking as soon as it finds ONE match.

let hour = 14; // 24-hour format (14 = 2 PM)

if (hour < 12) {
    console.log("Good Morning! ☕");
} else if (hour < 18) {
    console.log("Good Afternoon! ☀️");
} else if (hour < 22) {
    console.log("Good Evening! 🌙");
} else {
    // If none of the above match
    console.log("Go to sleep! 💤");
}


console.log("\n--- 3. SWITCH STATEMENT (Exact Matching) ---");
// Use this when checking one variable against many specific values.
// It is cleaner than writing many "else if (x === ...)" statements.

let trafficLight = "YELLOW";

switch (trafficLight) {
    case "RED":
        console.log("STOP! 🛑");
        break; // 'break' stops the code from falling into the next case.
        
    case "YELLOW":
        console.log("Slow down... ⚠️");
        break;
        
    case "GREEN":
        console.log("GO! 🟢");
        break;
        
    default:
        // Runs if nothing matches (like 'else')
        console.log("Traffic light is broken. Proceed with caution.");
}


console.log("\n--- 4. TERNARY OPERATOR (The One-Liner) ---");
// Syntax: condition ? value_if_true : value_if_false
// Best for assigning values based on a check.

let isUserLoggedIn = true;

// Traditional way (Long)
// let message;
// if (isUserLoggedIn) { message = "Welcome back!"; } else { message = "Please login."; }

// Ternary way (Short)
let message = isUserLoggedIn ? "Welcome back!" : "Please login.";
console.log("Message:", message);


console.log("\n--- 5. TRUTHY & FALSY (Implicit Checks) ---");
// In JS, you don't always need 'x === true'. 
// Values like 0, "", null, undefined, and false are considered "Falsy".
// Everything else is "Truthy".

let username = ""; // Empty string counts as false

if (username) {
    console.log("Hello, " + username);
} else {
    console.log("Username is missing! (Empty string is falsy)");
}