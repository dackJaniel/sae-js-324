// const boat = document.querySelector(".boat");

// const start = document.querySelector("#start");
// const stop = document.querySelector("#stop");

// const keyframes = [
//   { left: "-1500px", transform: "scaleX(1)", offset: 0.25 },
//   { left: "-1500px", transform: "scaleX(-1)", offset: 0.26 },
//   { left: "2500px", transform: "scaleX(-1)", offset: 0.75 },
//   { left: "2500px", transform: "scaleX(1)", offset: 0.76 },
// ];

// const options = {
//   duration: 10000,
//   iterations: Infinity,
//   easing: "linear",
//   direction: "normal",
// };

// const eff = new KeyframeEffect(boat, keyframes, options);

// const anim = new Animation(eff, document.timeline);

// start.addEventListener("click", () => {
//   console.log("start");
//   anim.play();
// });

// stop.addEventListener("click", () => {
//   console.log("stop");
//   anim.pause();
// });

const boxes = document.querySelectorAll(".box");

// anime({
//   targets: boxes,
//   translateX: 250,
//   delay: anime.stagger(100),
// });

anime({
  targets: boxes,
  left: "240px",
  backgroundColor: "#111",
  borderRadius: ["0%", "50%"],
  easing: "easeInOutQuad",
});
