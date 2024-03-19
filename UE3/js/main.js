//  Variablen

// const myConst = "hallo";
// let myLet;

// myLet = "hallo 2";

// Datentypen
/**
 *
 * number
 * string
 * boolean
 * undifined
 * null
 *
 * array
 * objekt
 * *
 */

// 123
// "kajsdnksajd"
// true/ false
// [1, 2, 3] // idx: 0, 1, 2
// {key: "value", name: "daniel"}

// myFunc("Inna");

// function myFunc(param) {
//   console.log("Ich bin " + param);
// }

// myFunc("Daniel");
// myFunc("Max");
// // myFunc();
// // myFunc();
// // myFunc();

// // myArr(""); // ERROR

// const myArr = (param) => {
//   console.log("Ich habe ein " + param);
// };

// myArr("Haus");
// myArr("Hund");

// myFunc2();

// const myFunc2 = function () {
//   console.log("hallo");
// };

// var --> HAT HOSTING ABER NICHT VERWENDEN!

const x = 2; // GLOBAL
const y = 2; // GLOBAL

// console.log(x);

// function myFunc() {
//   // LOCAL/ BLOCK SCOPE
//   const y = 0;
//   console.log(x);
//   console.log(y);
// }

// // console.log(y); // ERROR
// myFunc();

// if (x === y || (1 === 2 && a == b)) {
//   console.log(y);
//   const a = "hallo";
//   console.log(a);
// } else if (x === "5") {
//   // do sth
// } else {
//   const a = "hi";
//   console.log(a);
// }

// const a = 13;
// console.log(a);
// const key = "Apfel"; // diese variable muss flexibal sein!

// switch (key) {
//   case "Apfel":
//     console.log(Apfel);
//     break;

//   case "Banane":
//     console.log("Banane");
//     break;

//   default:
//     console.log("Nix");
//     break;
// }

// const res = x === y ? "OK" : "NICHT OK";
// console.log(res);

// const str = undefined;

// if (str) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// NEUES

// console.log("Hallo");
// console.log("Hallo");
// console.log("Hallo");
// console.log("Hallo");
// console.log("Hallo");
// console.log("Hallo");

// for (let i = 0; i <= 10; i++) {
//   // DO STH
//   console.log(i);
// }

// const arr = ["a", "b", "c"];

// console.log(arr[0]);

// for (let i = 0; i <= 2; i++) {
//   console.log(arr[i]);
// }

// 1: i = 0 --> arr[0]
// 1: i = 1 --> arr[1]
// 1: i = 2 --> arr[2]

// for (const element of arr) {
//   console.log(element);
// }

// const obj = { name: "Max", age: "40", animal: "Dog" };
// let i = 1;
// for (const key in obj) {
//   console.log("Key: " + key + ", Value: " + obj[key]);
//   //   console.log(i);
//   //   console.log();
//   //   i++;
// }

// console.log(obj.name);
// console.log(obj.age);
// console.log(obj.animal);

// const users = [
//   { name: "Max", age: 20, animal: "Dog" },
//   { name: "Mia", age: 40, animal: "Dog" },
//   { name: "Peter", age: 30, animal: "Dog" },
// ];

// // console.log(users.length);

// for (let i = 0; i < users.length; i++) {
//   console.log(i);
//   console.log(users[i].age);
// }

// let i = 0;

// while (i <= 2) {
//   console.log(i);
//   i++;
// }

// for (let i = 0; i <= 2; i++) {
//   // DO STH
//   console.log(i);
// }

// for
// for in
// for of
// while
// do while

// let res = 0;

// let i = 0;
// do {
//   res += i; // res = res + i;
//   //   console.log(i);
//   i++;
// } while (i <= 5);

// console.log(res);

// while (i <= 2) {
//   console.log(i);
//   i++;
// }

// const blogPosts = [
//   {
//     name: "Mein Blog",
//     date: 2024,
//     content:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio corporis ducimus nam earum error dolore, repellendus quia obcaecati incidunt voluptatem veritatis laborum ullam maxime excepturi quis quisquam iusto autem deserunt!",
//   },
//   {
//     name: "Mein Blog",
//     date: 2024,
//     content:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio corporis ducimus nam earum error dolore, repellendus quia obcaecati incidunt voluptatem veritatis laborum ullam maxime excepturi quis quisquam iusto autem deserunt!",
//   },
//   {
//     name: "Mein Blog",
//     date: 2024,
//     content:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio corporis ducimus nam earum error dolore, repellendus quia obcaecati incidunt voluptatem veritatis laborum ullam maxime excepturi quis quisquam iusto autem deserunt!",
//   },
// ];

// console.log(blogPosts[0].date);

// blogPosts.forEach((blogPost) => {
//   console.log(blogPost.content);
// });

// DOM (Document Object Model)

// Alles im DOM ist ein Objekt!
// Der DOM ist ein 1:1 Abbild von unserem HTML

// const h1 = document.querySelector("#heading");
// // const p = document.getElementById("para");
// const a = document.querySelector("a");

// const html = document.querySelector("html");

// // console.log(h1);
// // console.log(p);
// // console.log(a);

// const btn = document.getElementById("btn");
// // console.log(btn);
// // const btn = document.querySelector("#btn");

// p.addEventListener("click", (event) => {
//   console.log(event);
// });

// const pTags = document.querySelectorAll("p");
// console.log(pTags);

// pTags.forEach((pTag) => {
//   pTag.addEventListener("click", (event) => {
//     console.log(event.target);
//   });
// });

// for (let pTag of pTags) {
//   pTag.addEventListener("click", (event) => {
//     console.log(event.target);
//   });
// }

const h1 = document.querySelector("h1");
console.log(h1);
