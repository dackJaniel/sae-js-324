// POSTS

export async function getPosts() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return await res.json();
  } catch (error) {
    console.error(error);
  }
}

export async function getPost(id) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return await res.json();
  } catch (error) {
    console.error(error);
  }
}

// COMMENTS

export async function getComments(postId) {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    );
    return await res.json();
  } catch (error) {
    console.error(error);
  }
}

// USERS

export async function getAuthors() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    return await res.json();
  } catch (error) {
    console.error(error);
  }
}

// IMAGES

export async function getImages() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos");
    return await res.json();
  } catch (error) {
    console.error(error);
  }
}
