import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import compression from "vite-plugin-compression"; // Disabled for GitHub Pages
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  base: "/", // ✅ Fix for GitHub Pages (username.github.io repositories are served from root)
  plugins: [
    react({
      babel: {
        plugins: ["@emotion/babel-plugin"],
      },
    }),
    // Compression disabled for GitHub Pages - GitHub Pages doesn't handle content negotiation
    // for compressed files, which can cause MIME type issues
    // compression({
    //   algorithm: "brotliCompress",
    //   ext: ".br",
    //   threshold: 512,
    //   compressionOptions: { level: 11 },
    // }),
    // compression({
    //   algorithm: "gzip",
    //   ext: ".gz",
    //   threshold: 512,
    //   compressionOptions: { level: 9 },
    // }),
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  // ... keep the rest as-is
});
