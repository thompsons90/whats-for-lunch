import { defineConfig } from "vite";
// import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/whats-for-lunch",
});

// this define removes the inline testing code from production build
// export default defineConfig({
//   define: {
//     "import.meta.vitest": "undefined",
//   },
//   test: {
//     includeSource: ["src/**/*.{js,ts}"],
//     coverage: {
//       reporter: ["text", "html"],
//     },
//     // coverage: {
//     //   reporter: ["text", "html"],
//     // },
//   },
// });
