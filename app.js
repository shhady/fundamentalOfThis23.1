// 1).Question 1:In your own words what will this point to and why?(Note
//     this is the global scope) console.log(this);

// it will point to the window as its parent as it is located within it

// ------------------
//2) Question 2:
// a. In your own words what will this point to and why.
// b. How can you fix this code.
// const myObj = {
//   name: "Timmy",
//   greet: () => {
//     console.log(`Hello ${this.name}`);
//   },
// };
// myObj.greet();

// it will point to the window as the function used is an arrow function, this can be fixed by using a regular function.

//fixed one
// const myObj = {
//     name: "Timmy",
//     greet: function () {
//       console.log(`Hello ${this.name}`);
//     },
//   };
//   myObj.greet();

// ----------------------------------------------------------------

// 3)Question 3:
// In your own words what will this point to and why?
// const myFuncDec = function () {
//   console.log(this);
// };

// "this" in the function points to the global object, if use strict mode on it will return undefined.

//----------------------------------------------------------------
//4) Question 4:
// In your own words what will this point to and why?
// const myFuncArrow = () => {
//   console.log(this);
// };
// myFuncArrow();

// this will point to the window as the function used is arrow function.

//5) Question 5:
// a. In your own words what will this point to and why.
// b. How can you fix this code.
const add = document.querySelector(".element");
add.addEventListener("keyup", function (e) {
  console.log(this);
});

// it supposed to point to the element, needs to pass two arguments to the event listener .
//* b. first we need an html file with an element with that class, then we need to pass the event type, like "keydown", and lastly change the arrow function to, function () {...} and then this would point to that element we selected.
