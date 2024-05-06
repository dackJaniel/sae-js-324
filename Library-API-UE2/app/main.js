// fetch().then().catch()

// fetch("https://jsonplaceholder.org/posts")
//   .then((response) => {
//     if (!response.ok === false) {
//       throw new Error("Fehler ist aufgetreten.");
//     }

//     if (response.status === 404) {
//       throw new Error("Die Seite wurde nicht gefunden!");
//     }

//     console.log(response);

//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// async - await
// async function getPosts() {
//   try {
//     const response = await fetch("https://jsonplaceholder.org/posts"); // res

//     if (!response.ok) {
//       throw new Error("Fehler ist aufgetreten.");
//     }

//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// }

// getPosts();

// parse & stringify

// const json = '[{"name": "Max", "age": 30}, {"name": "Manu", "age": 31}]';
// const data = JSON.parse(json);
// console.log(data);

// const newJson = JSON.stringify(data);
// console.log(newJson);

// async function sendPost(data) {
//   const jsonData = JSON.stringify(data);
//   console.log(jsonData);
//   try {
//     const res = await fetch("https://jsonplaceholder.org/posts", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: jsonData,
//     });

//     if (!res.ok) {
//       throw new Error("Fehler ist aufgetreten.");
//     }
//   } catch (error) {
//     console.error(error);
//   }
// }

// const data = [
//   { name: "max", age: 12 },
//   { name: "manu", age: 13 },
// ];

// sendPost(data);

// AXIOS - Darf nicht in der Prüfung verwendet werden!

// import axios from "axios";

// async function fetchPosts() {
//   try {
//     const response = await axios.get("https://jsonplaceholder.org/posts");

//     if (response.status !== 200) {
//       throw new Error("Fehler ist aufgetreten.");
//     }

//     console.log(response.data);
//   } catch (error) {
//     console.error(error);
//   }
// }

// fetchPosts();

// async function sendPost(data) {
//   try {
//     const response = await axios.post(
//       "https://jsonplaceholder.org/posts",
//       data
//     );

//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// }

// const data = {
//   name: "Max",
//   age: 30,
// };

// sendPost(data);
