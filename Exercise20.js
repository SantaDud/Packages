// More consitionals

const arr = [1, 2, 3, 4];
const num = 34;
const str = "hello";

console.log("Is str.toUpperCase() === 'HELLO'? I predict True.");
console.log(str.toUpperCase() === 'HELLO');

console.log("Is str.toLowerCase() === 'HELLO'? I predict False.");
console.log(str.toUpperCase() === 'HELLO');

console.log("Is num < 50? I predict True");
console.log(num < 50);

console.log("Is num > 50? I predict False.");
console.log(num > 50);

console.log("Is num === '34'? I predict False.");
console.log(num === '34');

console.log("Is num == '34'? I predict True.");
console.log(num == '34');

console.log("Is arr[0] == 1? I predict True.");
console.log(arr[0] == 1);

console.log("num.toString() === '34'? I predict True.");
console.log(num.toString() === "34");

console.log("num.toString() === '34'? I predict True.");
console.log(num.toString() === "34");

console.log("Array.isArray(arr) === true? I predict True.");
console.log(Array.isArray(arr) === true);

console.log("Array.isArray(arr[0]) === true? I predict False.");
console.log(Array.isArray(arr[0]) === true);