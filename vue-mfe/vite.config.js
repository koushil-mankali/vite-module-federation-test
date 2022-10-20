import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "vueheader",
      filename: "remoteEntry.js",
      exposes: {
        "./Header": "./src/components/Header.vue",
      },
      shared: ["vue"],
    }),
  ],
  build:{
    target: "esnext"
  }
});
