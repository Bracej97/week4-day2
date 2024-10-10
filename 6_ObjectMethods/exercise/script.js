// 1. Object.keys() - TODO: WHat does this method do? What is the output?
//Prints an array of the keys of the object (the "name", "age" and "city" are the keys)
const person = {
  name: "Alice",
  age: 30,
  city: "New York",
};
console.log("Keys:", Object.keys(person));

// 2. Object.values() - TODO: WHat does this method do? What is the output?
//Prints an array containing the values of the object ("Alice", 30 & "New York")
console.log("Values:", Object.values(person));

// 3. Array.push() - TODO: WHat does this method do? What is the output?
//Adds the item in the bracket to the end of the array
let fruits = ["apple", "banana"];
fruits.push("orange");
console.log("After push:", fruits); // ["apple", "banana", "orange"]

// 4. Array.pop() - TODO: WHat does this method do? What is the output?
//Remove the last entry to the array and returns it
let poppedFruit = fruits.pop();
console.log("After pop:", fruits); // ["apple", "banana"]
console.log("Popped fruit:", poppedFruit); // "orange"

// 5. Array.shift() - TODO: WHat does this method do? What is the output?
//Removes the first item of an array and returns it
let shiftedFruit = fruits.shift();
console.log("After shift:", fruits); // ["banana"]
console.log("Shifted fruit:", shiftedFruit); // "apple"

// 6. Array.concat() - TODO: WHat does this method do? What is the output?
//Adds 2 arrays together and returns the full array
let vegetables = ["carrot", "potato"];
let food = fruits.concat(vegetables);
console.log("After concat:", food); // ["mango", "banana", "carrot", "potato"]

// 7. Array.indexOf() - TODO: WHat does this method do? What is the output?
//Returns the index of the item in the brackets
let index = food.indexOf("banana");
console.log("Index of banana:", index); // 1

// 8. Array.includes() - TODO: WHat does this method do? What is the output?
//Returns a boolean to show whether the item in the brackets is included in the array
let hasMango = food.includes("mango");
console.log("Array contains mango:", hasMango); // true

// 9. Array.filter() - Creates a new array with all elements that pass a test
//Returns an array containing all the elements, in order, that return true on the function
let longFoods = food.filter((item) => item.length > 5);
console.log("Foods with more than 5 letters:", longFoods); // ["banana", "carrot", "potato"]
