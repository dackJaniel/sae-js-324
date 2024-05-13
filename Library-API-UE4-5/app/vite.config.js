import { resolve } from "path"; // Importiert die resolve Funktion aus dem path Modul
import { defineConfig } from "vite"; // Importiert die defineConfig Funktion aus dem vite Modul

export default defineConfig({
  root: resolve(__dirname, "src"), // src als root
});
