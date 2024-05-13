import { getAuthors, getComments, getImages, getPost } from "../utils/data";

const url = window.location.href;
const postId = url.split("?postId=")[1];

const commentsContainer = document.getElementById("comments");

const post = await getPost(postId);
const comments = await getComments(postId);
const authors = await getAuthors();
const images = await getImages();

document.getElementById("app").innerHTML = `
    <img src="${images[post.id].url}" alt="" class="w-full h-80 object-cover" />
    <h1 class="text-5xl my-4">${post.title}</h1>
    <small class="text-gray-500 text-sm">${authors[post.userId].name}</small>
    <p class="text-gray-800">${post.body}</p>
`;

comments.forEach((comment) => {
  commentsContainer.innerHTML += `
    <div class="bg-gray-100 rounded-md p-2">
        <div class="flex gap-2">
            <p class="font-bold">${comment.name}</p>
            <p>${comment.email}</p>
        </div>
        <p>
            ${comment.body}
        </p>
    </div>
  `;
});
