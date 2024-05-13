import { getAuthors, getImages, getPosts } from "../utils/data";

const app = document.getElementById("app");

const posts = await getPosts();
const authors = await getAuthors();
const images = await getImages();

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
