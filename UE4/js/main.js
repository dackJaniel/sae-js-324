// const box = document.getElementById("list");
// console.log(box.children[box.children.length - 1]);

// const nameArrFunc = () => {
//   const nameArr = ["John", "Jane", "Doe"];
//   return nameArr;
// };

// const myConst = nameArrFunc();
// console.log(myConst);

// keys = "";

// document.addEventListener("keypress", (e) => {
//   const key = e.key;
//   const keyCode = e.keyCode;

//   keys += key;

//   console.log(keys);
// });

// getElementById
// console.log(document.getElementById("para"));

// getElementsByClassName
// console.log(document.getElementsByClassName("btn")[0]);

// querySelector
// console.log(document.querySelector(".btn"));

// querySelectorAll
// console.log(document.querySelectorAll(".btn"));

// const btn = document.querySelector(".btn");
// console.log(btn);

// function btnClick() {
//   console.log("Button clicked");
// }

// btn.addEventListener("click", () => btnClick());

// const box = document.querySelector("#box");
// console.log(box);

// parent = box.parentElement;
// console.log(parent);

// parentNode = box.parentNode;
// console.log(parentNode);

// children = box.children;
// console.log(children);

// childNodes = box.childNodes;
// console.log(childNodes);

// const el = document.getElementById("div-03");
// console.log(el);

// console.log(el.closest("#div-02"));
// console.log(el.closest("#div-01"));

// console.log(el.closest("article > div"));

// console.log(el.closest(":not(div)"));

// console.log(document.getElementById("div-01"));
// let el = document.getElementById("div-02").nextElementSibling;

// while (el) {
//   console.log(el);
//   el = el.nextElementSibling;
// }

// let prev = document.getElementById("div-03");
// console.log(prev);
// prev = prev.previousElementSibling;
// console.log(prev);

// const box = document.getElementById("box");
// console.log(box);

// const div = document.createElement("div"); // DOM NODE ELEMENT
// console.log(div);

// div.id = "new-div";
// console.log(div);

// const text = document.createTextNode("Hello World");
// console.log(text);

// div.appendChild(text);
// console.log(div);

// // console.log(div.firstChild);

// box.appendChild(div);

// append vs appendChild

// // console.log(box);

// const div = document.createElement("p");
// div.id = "new-div";
// // console.log(div);

// const text = document.createTextNode("Hello World");
// // div.appendChild(text);

// // box.append("Hallo"); // funktioniert!
// // box.appendChild("text"); // funktioniert nicht!

// const a = box.appendChild(div); // hat einen rückgabewert!
// // const b = box.append(div); // hat keinen rückgabewert! --> undefined

// console.log(a);

// box.append(div, "Hallo", "Hallo 234");
// box.appendChild(div);

// box.innerHTML += "<h1 style='color: red;'>Heading</h1><div>Hallo</div>";

// box.innerText += "<h1 style='color: red;'>Heading</h1>";
// box.innerText += "<h1 style='color: red;'>Heading 5</h1>";

// box.innerHTML = "<p class='text'>Hallo</p>";
// console.log(box);

// const p = document.createElement("p");
// p.innerText = "Hallo";
// p.style.color = "red";

// p.classList.add("text");
// console.log(p);
// p.classList.remove("text");

// p.id = "new-p";

// box.appendChild(p);

// console.log(p);

// const box = document.getElementById("test");

// const p = document.createElement("p");
// p.innerText = "Hallo";

// box.insertAdjacentElement("afterbegin", p);
// box.insertAdjacentElement("beforeend", p);
// box.insertAdjacentElement("beforebegin", p);
// box.insertAdjacentElement("afterend", p);

// box.insertAdjacentText("beforebegin", "Hallo");

// const box = document.querySelector("#box");

// box.addEventListener("click", () => {
//   const js = document.getElementById("div-02");
//   console.log(js);
//   js.remove();
// });

// append, appendChild, insertAdjacentElement, insertAdjacentText
// remove

// const box = document.getElementById("box");
// const p = box.children[0];
// const btn = document.getElementById("btn");

// function changeText() {
//   p.innerText = "Geändert!";
// }

// btn.addEventListener("click", changeText);

const list = document.getElementById("list");
const add = document.getElementById("add");
const remove = document.getElementById("remove");

add.addEventListener("click", () => {
  const li = document.createElement("li");
  li.innerText = `Item ${list.children.length + 1}`;
  //   li.innerText = "Item " + (list.children.length + 1);
  list.appendChild(li);
});

remove.addEventListener("click", () => {
  const li = list.children[list.children.length - 1];
  if (!li) {
    console.error("No items to remove");
    return;
  }
  list.removeChild(li);
});
