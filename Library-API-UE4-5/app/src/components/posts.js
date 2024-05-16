import {
  getAuthors,
  getImages,
  getPaginatedPosts,
  getPosts,
} from "../utils/data";

const app = document.getElementById("app");

// const posts = await getPosts();
let posts = [];
let page = 1;
const authors = await getAuthors();
const images = await getImages();

function renderPosts() {
  posts.forEach((post) => {
    const author = authors[post.userId - 1].name;
    app.innerHTML += `
    <a href="/pages/post/index.html?postId=${post.id}">
      <div class="border border-gray p-4 rounded-md shadow-sm">
        <img class="w-full rounded-md mb-2" src="${
          images[post.id].url
        }" alt="" />
        <h2 class="text-3xl text-gray-900">${post.title.slice(0, 7)}</h2>
        <small class="text-gray-500 text-sm">${author}</small>
        <p class="text-gray-800">${
          post.body.length > 100 ? post.body.slice(0, 100) + "..." : post.body
        }</p>
      </div>
    </a>`;
  });
}

const intersectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(async (entry) => {
    if (entry.isIntersecting) {
      page++;
      findPosts();
      intersectionObserver.unobserve(app.lastChild);
    }
  });
});

async function findPosts() {
  const res = await getPaginatedPosts({ page });
  posts.push(...res);
  renderPosts();

  intersectionObserver.observe(app.lastChild);
}

findPosts();
