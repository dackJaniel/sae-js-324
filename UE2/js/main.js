// const x = 1; // GLOBAL
// const y = 2;

// // const x = 2; // ERROR

/* export function add() {
  // BLOCK SCOPE
  const a = 1; // LOCAL
  const x = 3; // LOCAL
  console.log(x + y);
  // BLOCK SCOPE
}*/

// add();

// console.log(a); // ERROR
// console.log(x + y);

/*
function some() {
  console.log("some");
}

add(1, 2);

// HOISING
function add(x, y) {
  console.log(x + y);
  some();
}

add(1, 2);

const hello = () => {
  console.log("hello");
};

hello();

let num1 = 0;
const num3 = 0;
console.log(num1);

console.log(num2);
var num2 = 0; // DAS WOLLEN WIR NICHT!

console.log(num2); */

// ICH BIN
// EIN KOMMENTAR

/* 

ICH 
BIN 
EIN 
MEHRZEILIGER KOMMENTAR

*/

// string, number, array objekt

/*
function test(num) {
  if (num === 1) {
    // LOCAL SCOPE
    const y = 2;
    console.log(true);
  } else if (num === 3) {
    console.log("x === 3");
  } else {
    console.log(false);
  }
}

test(2);

function doStuff() {
  console.log("stuff");
}

const key = "apfel";
switch (true) {
  case "apfel" === "apfel":
    console.log("Apfel");
    break;

  case key === "birne":
    doStuff();
    break;

  default:
    console.log("default");
    break;
}

*/

// const x = 1;
// const y = 1;
// const a = 3;
// const b = 4;

// if (1 === 1 && "string" === "string") {
//   // && == AND || == OR
//   console.log(true);
// } else {
//   console.log(false);
// }

// if (2 >= "2") {
//   console.log(true);
// } else {
//   console.log(false);
// }

// const res = 3 === 2 ? "OK" : "NICHT OK"; // DAS IST GUT
// console.log(res);

// function doStuff() {
//   // console.log("doing");
//   return "doing";
// }

// function doStuffToo() {
//   // console.log("doing too");
//   return "doing too";
// }

// const res2 = 2 === 2 ? doStuff() : doStuffToo(); // DAS EHER NICHT MACHEN!
// console.log(res2);

// if (2 === 2) {
//   doStuff();
// } else {
//   doStuffToo();
// }

// const res3 = 2 === 3 ? "OK" : 2 === 4 ? "OK2" : "NICHT OK";
// console.log(res3);

// const mySting = "";

// if (!false) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// mySting ? console.log(mySting) : console.log("123");

// // falsy: null, undifined, NaN, "", false, 0, -0, 0n

function funcZwei(param) {
  console.log(param);
}

function funcEins(param) {
  const x = 1;
  // console.log(param);

  funcZwei(x);
}

funcEins();
