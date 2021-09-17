// function way 1
function log1(msg) {
  console.log(msg);
}

// function way 2
const log2 = function (msg) {
  console.log(msg);
};

// arrow function

// method 1
// const log3 = (msg) => {
//   console.log(msg);
// };

// method 2
// const log3 = (msg,msg2) => console.log(msg);

// method 3
// const log3 = () => console.log();

// method 4
// const log3 = msg => console.log(msg);

const x = 10;

const add = (val1: number, val2: number) => {
  const tot = val1 + val2;
  console.log(tot);
};

add(10, 20);

// -------------------------------
// [{name:'raj',age:30},{name:'raj',age:30}]

// custome type annotation (custome data type (object))
const insert = (data: { name: string; age: number }) => {
  //insert login
};
insert({ name: "raj", age: 20 });

// interface annotation for reusablity
interface User {
  name: string;
  age?: number;
}

const insert2 = (data: User) => {
  // insert logic
};
insert2({ name: "raj", age: 49 });
