// POSTS

export async function getPosts() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return await res.json();
  } catch (error) {
    console.error(error);
  }
}

export async function getPaginatedPosts({ page = 1, perPage = 10 }) {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${perPage}`
    );
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

export async function getPixaImages({ query = "", page = 1, perPage = 9 }) {
  try {
    const res = await fetch(
      `https://pixabay.com/api/?key=16345079-68958376db9d86b75f559ba56&q=${query}&image_type=photo&lang=de&orientation=horizontal&per_page=${perPage}&page=${page}`
    );
    return await res.json();
  } catch (error) {
    console.error(error);
  }
}

// CHAT

export async function askChatbot(message) {
  try {
    const res = await fetch(`http://localhost:3000/api/ask`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    if (!res.ok) {
      throw new Error("Network response was not ok");
    }

    return await res.json();
  } catch (error) {
    console.error(error);
  }
}
