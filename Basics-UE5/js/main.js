const slider = document.querySelector("#slider");

const btnLeft = document.querySelector("#left");
const btnRight = document.querySelector("#right");
const btnPause = document.querySelector("#pause");

// TODO: Können Bilder über Ordner direkt geladen werden?
const imgs = [
  "flowers-g6322b049d_1920.jpg",
  "flowers-ge343ed130_1920.jpg",
  "nature-g61fbb003f_1920.jpg",
];

imgs.forEach((img) => {
  const newImg = document.createElement("img");
  newImg.src = `img/${img}`;
  newImg.alt = img;

  slider.append(newImg);
});

const allImgs = Array.from(document.querySelectorAll("img"));
allImgs[0].classList.add("img-show");

// function swipeLeft() {
//   let activeIdx;

//   allImgs.forEach((img, idx) => {
//     if (img.classList == "img-show") {
//       img.classList.remove("img-show");
//       activeIdx = idx;
//     }
//   });

//   if (activeIdx <= 0) {
//     console.log("Der Active idx ist: " + activeIdx);
//     activeIdx = allImgs.length - 1; // idx
//   } else {
//     activeIdx -= 1;
//   }

//   allImgs[activeIdx].classList.add("img-show");
// }

// function swipeRight() {
//   let activeIdx; // undefined

//   allImgs.forEach((img, idx) => {
//     if (img.classList == "img-show") {
//       img.classList.remove("img-show");
//       activeIdx = idx;
//     }
//   });

//   //   console.log(allImgs.length - 1);

//   if (activeIdx >= allImgs.length - 1) {
//     activeIdx = 0;
//   } else {
//     activeIdx += 1;
//     //   activeIdx = activeIdx + 1; // 1
//   }

//   allImgs[activeIdx].classList.add("img-show");
// }

let timerIsRunning = true;
let timer = setInterval(swipe, 5000);

function swipe(event) {
  clearInterval(timer);
  timer = setInterval(swipe, 5000);

  let eventId;
  if (!event) {
    eventId = "right";
  } else {
    eventId = event.currentTarget.id;
  }

  let activeIdx;

  allImgs.forEach((img, idx) => {
    if (img.classList == "img-show") {
      img.classList.remove("img-show");
      activeIdx = idx;
    }
  });

  if (eventId == "right") {
    // rechts
    if (activeIdx >= allImgs.length - 1) {
      activeIdx = 0;
    } else {
      activeIdx += 1;
    }
  } else {
    // links
    if (activeIdx <= 0) {
      activeIdx = allImgs.length - 1;
    } else {
      activeIdx -= 1;
    }
  }

  allImgs[activeIdx].classList.add("img-show");
}

function pause() {
  if (timerIsRunning === true) {
    timerIsRunning = false;
    clearInterval(timer);
    btnPause.innerHTML = "<i class='fa-solid fa-play'></i>";
  } else {
    timerIsRunning = true;
    timer = setInterval(swipe, 5000);
    btnPause.innerHTML = "<i class='fa-solid fa-pause'></i>";
  }
}

btnLeft.addEventListener("click", (e) => swipe(e));
btnRight.addEventListener("click", (e) => swipe(e));
btnPause.addEventListener("click", pause);
