// let and var

// var - scoped nearest function
// let - scoped nearest block

function myLoop() {
  for (let i = 0; i <= 5; i++) {
    console.log(i);
  }
  //   console.log("outervalue", i);
}
myLoop();

// const - for constant variable which never changes
const test = "raj";
// test = "suman";
console.log(test);
