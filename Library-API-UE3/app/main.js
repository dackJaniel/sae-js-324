// const form = document.querySelector("form");

// async function sendData(e) {
//   e.preventDefault();
//   const formData = new FormData(form);

//   console.log(formData);

//   const data = Object.fromEntries(formData);

//   console.log(JSON.stringify(data.name));

//   if (data.file.size === 0) {
//     alert("Please select a file");
//     return;
//   }

//   if (data.file.type !== "image/jpeg") {
//     alert("Please select a JPEG file");
//     return;
//   }

//   try {
//     const response = await fetch("https://httpbin.org/post", {
//       method: "POST",
//       headers: {
//         // "Content-Type": "application/json",
//         // "Content-Type": "application/x-www-form-urlencoded",
//         "Content-Type": "multipart/form-data",
//       },
//       body: formData,
//     });
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// }

// form.addEventListener("submit", (e) => sendData(e));

// AXIOS

import axios from "axios";

const form = document.querySelector("form");
const img = document.querySelector("input[type='file']");
const progress = document.querySelector("#progressBar");

function uploadFile(e) {
  e.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  const file = img.files[0];

  if (!file) {
    alert("Please select a file");
    return;
  }

  axios
    .post("https://httpbin.org/post", formData, {
      onUploadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent;
        let precentage = Math.floor((loaded * 100) / total);
        progress.style.width = `${precentage}%`;
        progress.innerHTML = `${precentage}%`;
        console.log(precentage);
      },
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => {
      console.log(res);
    });
}

form.addEventListener("submit", (e) => uploadFile(e));
