/*
Variables created without a declaration keyword (var, let, or const) are always global, even if they are created inside a function.
*/

function myFun() {
  a = 10;
  //   console.log("a", a);
}

myFun();
a = 20;
// console.log("outside:", a);

let counter = 10;
function myCounter() {
  counter += 1;
}

myCounter();
myCounter();
myCounter();
// console.log("counter", counter);

function add() {
  let counter = 0;
  counter += 1;
  return counter;
}

add();
add();
let result = add();
console.log("result", result);

/*--- Closure ---*/

function add() {
  let counter = 0;
  return () => {
    counter += 1;
    return counter;
  };
}
console.log("closure!!!", add()());
console.log("closure!!!", add()());
console.log("closure!!!", add()());
