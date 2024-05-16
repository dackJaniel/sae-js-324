export function nav() {
  document.getElementById("nav").innerHTML = `
  <nav class="w-full bg-gray-100 rounded-md p-4">
    <ul class="flex gap-2">
      <li>
        <a href="/index.html" class="hover:underline">
          Home
        </a>
      </li>
      <li>
        <a href="/pages/images/index.html" class="hover:underline">
          Bilder
        </a>
      </li>
    </ul>
  </nav>`;
  // console.log("nav");
}
