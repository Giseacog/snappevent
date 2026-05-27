import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      api: path.resolve(__dirname, "src/api"),
      config: path.resolve(__dirname, "src/config"),
      context: path.resolve(__dirname, "src/context"),
      global: path.resolve(__dirname, "src/global"),
      hooks: path.resolve(__dirname, "src/hooks"),
      layouts: path.resolve(__dirname, "src/layouts"),
      pages: path.resolve(__dirname, "src/pages"),
      routes: path.resolve(__dirname, "src/routes"),
      services: path.resolve(__dirname, "src/services"),
      types: path.resolve(__dirname, "src/types"),
    },
  },
});
