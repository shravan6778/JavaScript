console.log("--- 1. BASIC OPERATIONS (Add/Remove) ---");

let cart = ["Apple", "Banana"];

// PUSH: Add to the END (Fastest)
cart.push("Orange"); 
console.log("Push:", cart); // ["Apple", "Banana", "Orange"]

// POP: Remove from the END
let lastItem = cart.pop(); 
console.log("Pop:", cart, "(Removed:", lastItem, ")"); // ["Apple", "Banana"]

// UNSHIFT: Add to the START (Slower, re-indexes everything)
cart.unshift("Strawberry");
console.log("Unshift:", cart); // ["Strawberry", "Apple", "Banana"]

// SHIFT: Remove from the START
let firstItem = cart.shift();
console.log("Shift:", cart, "(Removed:", firstItem, ")"); // ["Apple", "Banana"]


console.log("\n--- 2. SLICE vs SPLICE (The Confusing Ones) ---");

let numbers = [10, 20, 30, 40, 50];

// SLICE: Cuts a piece out and returns a NEW array. 
// Does NOT change the original array.
// Syntax: slice(start_index, end_index_not_included)
let part = numbers.slice(1, 4); 
console.log("Slice (1-4):", part); // [20, 30, 40]
console.log("Original Numbers (Unchanged):", numbers);

// SPLICE: Cuts pieces out AND changes the original array.
// Syntax: splice(start_index, delete_count, ...items_to_add)
numbers.splice(2, 2); // Go to index 2, delete 2 items
console.log("Splice (Deleted 30, 40):", numbers); // [10, 20, 50]


console.log("\n--- 3. HIGH-ORDER METHODS (The Modern Way) ---");

const prices = [100, 200, 300, 400];

// MAP: Transforms EVERY item and returns a new array.
// Use: Applying a discount or formatting data.
const withTax = prices.map(price => price * 1.1);
console.log("Map (Add 10% tax):", withTax); 

// FILTER: Selects items based on a condition.
// Use: Searching, removing items, permission checks.
const expensive = prices.filter(price => price > 250);
console.log("Filter (> 250):", expensive); // [300, 400]

// REDUCE: Squashes the array into ONE value.
// Use: Totals, averages, or merging data.
const total = prices.reduce((sum, price) => sum + price, 0);
console.log("Reduce (Total):", total); // 1000

// FIND: Returns the FIRST item that matches.
const found = prices.find(price => price === 300);
console.log("Find (300):", found);

//For each loop
console.log("for each loop")
const nums=[1,2,3,4,5];
nums.forEach((val, nums)=>{
    console.log(val**2, nums);
});
console.log("\n--- 4. UTILITIES ---");

const tech = ["JS", "Python", "C++"];

// INCLUDES: Check if item exists (True/False)
console.log("Includes Python?", tech.includes("Python")); // true

// JOIN: Turn array into a string
console.log("Join:", tech.join(" - ")); // "JS - Python - C++"

// REVERSE: Reverses the array in place
tech.reverse();
console.log("Reverse:", tech); // ["C++", "Python", "JS"]