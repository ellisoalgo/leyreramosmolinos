import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  base: "", // Change this to empty string
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name].[hash][extname]",
        chunkFileNames: "assets/[name].[hash].js",
        entryFileNames: "assets/[name].[hash].js",
      },
    },
  },
})