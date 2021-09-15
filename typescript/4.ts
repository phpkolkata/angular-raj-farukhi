let a: number;
let b: string;
let c: boolean;
let d: any;
let e: number[];
// e = [1,2,3,'a']
let f: string[];
// f = ['a','b','c',2]
let g: any[];
g = ["a", "1", true];

b = "hello";
const msg = b.toUpperCase();
console.log(g);

// type assersion
let myName;
myName = "tsasdf";
// method 1
// const result = (<string>myName).toUpperCase();

// method 2
const result = (myName as string).toUpperCase();
