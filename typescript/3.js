// let and var
// var - scoped nearest function
// let - scoped nearest block
function myLoop() {
    for (var i = 0; i <= 5; i++) {
        console.log(i);
    }
    //   console.log("outervalue", i);
}
myLoop();
// const - for constant variable which never changes
var test = "raj";
console.log(test);
