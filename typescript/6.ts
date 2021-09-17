let x: string;
x = "test";

let y: string[];
y = ["a", "b"];

// Tuple type: to express array type with specified data
let z: [string, number];
z = ["test", 40];

// Union: multiple data type for varibale
let a: string | number;
a = "test";
a = 40;

// array destructring
let input = ["raj", "suman"];
let [name1, name2] = input;
console.log(name1); //raj
console.log(name2); //suman

// object destructuring
let obj = { fname: "raj", age: 22 };
let { fname, age } = obj;
