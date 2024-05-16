import { getPixaImages } from "../utils/data";

const app = document.getElementById("app");
const form = document.querySelector("form");

const left = document.getElementById("left");
const right = document.getElementById("right");
const currPage = document.getElementById("page");

let query = "";
let page = 1;

function printImages(images) {
  app.innerHTML = "";
  images.hits.forEach((image) => {
    const img = document.createElement("img");
    img.src = image.webformatURL;
    img.classList.add("h-40", "w-full", "object-cover", "rounded-md");
    app.appendChild(img);
  });
}

let images = await getPixaImages({});
printImages(images);

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const newImages = await getPixaImages({ query: e.target.query.value });
  query = e.target.query.value;

  if (newImages.hits.length === 0) {
    console.log("No images found");
  }

  form.reset();
  printImages(newImages);
});

left.addEventListener("click", async () => {
  if (page <= 1) {
    return;
  }

  page--;
  currPage.innerText = page;
  const newImages = await getPixaImages({ query, page });
  printImages(newImages);
});

right.addEventListener("click", async () => {
  page++;
  currPage.innerText = page;
  const newImages = await getPixaImages({ query, page });
  printImages(newImages);
});
