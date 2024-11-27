import restart from "vite-plugin-restart";

export default {
  base: "/GNX/",
  root: "src/", // Sources files (typically where index.html is)
  publicDir: "../public/", // Path from "root" to static assets (files that are served as they are)
  server: {
    host: true, // Open to local network and display URL
  },
  build: {
    outDir: "../dist", // Output in the dist/ folder
    emptyOutDir: true, // Empty the folder first
    sourcemap: true, // Add sourcemap
  },
  plugins: [
    restart({ restart: ["../static/**"] }), // Restart server on static file change
  ],
};