import { askChatbot } from "../utils/data";

const form = document.querySelector("form");
const app = document.querySelector("#app");

function printMessage(message) {
  const div = document.createElement("div");
  div.innerText = message;
  app.appendChild(div);
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const message = form.query.value;
  printMessage(message);
  form.query.value = "";
  const res = await askChatbot(message);

  printMessage(res.message.message.content);
});
