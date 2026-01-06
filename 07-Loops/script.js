console.log("--- 1. THE STANDARD FOR LOOP ---");
// Use this when you know exactly how many times you want to repeat.

// Syntax: for (start; stop_condition; step)
for (let i = 1; i <= 3; i++) {
    console.log(`Count: ${i}`);
}


console.log("\n--- 2. THE WHILE LOOP ---");
// Use this when you don't know how many times to loop, 
// but you know the condition to stop (e.g., "keep running until fuel is empty").

let fuel = 10;
while (fuel > 0) {
    console.log(`Driving... Fuel left: ${fuel}%`);
    fuel = fuel - 5; // Decrease fuel significantly to prevent infinite loop
}
console.log("Stopped: Out of fuel.");


console.log("\n--- 3. THE DO...WHILE LOOP ---");
// Use this when the code MUST run at least once, regardless of the condition.
// (e.g., "Prompt user for password" - you have to ask at least once).

let number = 5;
do {
    console.log(`This runs at least once. Number is: ${number}`);
    number++; 
} while (number < 5); 
// Notice: The condition (number < 5) is false immediately (5 is not < 5), 
// but the code ran once anyway!


console.log("\n--- 4. THE FOR...OF LOOP (Modern Arrays) ---");
// Use this to loop through Arrays (Lists). It reads like English.
// "For every 'fruit' inside 'fruits'..."

const fruits = ["Apple", "Banana", "Cherry"];

for (const fruit of fruits) {
    console.log(`I want to eat: ${fruit}`);
}


console.log("\n--- 5. THE FOR...IN LOOP (Objects) ---");
// Use this to loop through properties of an Object.
// WARNING: Do not use this for arrays (order is not guaranteed).

const user = {
    name: "Alex",
    age: 30,
    role: "Admin"
};

for (const key in user) {
    // 'key' is the label (e.g., "name")
    // 'user[key]' is the value (e.g., "Alex")
    console.log(`${key}: ${user[key]}`); 
}