import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'SonnetClient',
      fileName: 'sonnet',
    },
    dts: true,
    outDir: 'dist',
  },
  plugins: [dts()],
});
