import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    // If 5173 is busy, Vite picks the next free port (see terminal for the URL).
    strictPort: false,
    open: true,
  },
  preview: {
    port: 5173,
    strictPort: false,
  },
});
