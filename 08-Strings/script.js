console.log("--- 1. CREATING STRINGS ---");

// A. Standard String
const str = "JavaScript is awesome";

// B. Template Literal (Best for inserting variables)
const lang = "JS";
const modernStr = `I love ${lang}!`; 
console.log(modernStr); // Output: I love JS!


console.log("\n--- 2. GETTING INFO ---");

// Length: How many characters? (Includes spaces!)
console.log("Length:", str.length); // 21

// Accessing characters:
console.log("First char:", str[0]); // 'J'
console.log("Last char:", str[str.length - 1]); // 'e'


console.log("\n--- 3. MODIFYING CASE ---");
// Use this when comparing user input (e.g., "Yes" vs "yes") to make them uniform.

console.log("Upper:", str.toUpperCase()); // "JAVASCRIPT IS AWESOME"
console.log("Lower:", str.toLowerCase()); // "javascript is awesome"


console.log("\n--- 4. SEARCHING ---");

// indexOf: Finds the STARTING position of a word. Returns -1 if not found.
// Use case: Checking if a word exists before trying to replace it.
console.log("Index of 'Script':", str.indexOf("Script")); // 4

// includes: Returns true/false.
// Use case: Simple checks (e.g., Does the password include "@"?).
console.log("Includes 'awesome'?", str.includes("awesome")); // true


console.log("\n--- 5. EXTRACTING PARTS (Slicing) ---");
// Use this to cut out parts of a string (like getting just the date from "2023-10-05").

// slice(start, end): Extracts from start up to (but not including) end.
console.log("Slice (0-10):", str.slice(0, 10)); // "JavaScript"

// substring(start, end): Similar to slice, but treats negative numbers as 0.
console.log("Substring (4-10):", str.substring(4, 10)); // "Script"


console.log("\n--- 6. REPLACING TEXT ---");
// Use replace() to swap content. 
// Note: By default, it only replaces the FIRST match unless you use /g (Global regex) or replaceAll().

let sentence = "Cats are cute. I love cats.";
console.log("Replace one:", sentence.replace("cats", "dogs")); 
// Output: "Cats are cute. I love dogs." (Case sensitive!)

console.log("Replace all:", sentence.replaceAll("cats", "dogs")); 
// Output: "Cats are cute. I love dogs." (Still didn't catch 'Cats' because of uppercase C)

// Advanced: Using Regex (i = insensitive, g = global)
console.log("Regex Replace:", sentence.replace(/cats/gi, "dogs")); 
// Output: "dogs are cute. I love dogs."


console.log("\n--- 7. SPLITTING & TRIMMING ---");

// trim(): Removes whitespace from BOTH ends.
// Use case: Cleaning up user input from forms (e.g., "  john@email.com  ").
let messyInput = "   Hello World   ";
console.log("Trimmed:", messyInput.trim()); // "Hello World"

// split(): Converts a String into an Array.
// Use case: Parsing CSV data or breaking a sentence into words.
let data = "Apple,Banana,Cherry";
let fruitArray = data.split(","); 
console.log("Split Array:", fruitArray); // ["Apple", "Banana", "Cherry"]