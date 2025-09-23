import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import { resolve } from "path"

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()], // ⬅️ removed componentTagger()
  resolve: {
    alias: {
      "@": resolve(process.cwd(), "src"),
    },
  },
}))
