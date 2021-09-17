// function way 1
function log1(msg) {
    console.log(msg);
}
// function way 2
var log2 = function (msg) {
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
var x = 10;
var add = function (val1, val2) {
    var tot = val1 + val2;
    console.log(tot);
};
add(10, "test");
