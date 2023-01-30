import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.js',
      formats: ['es'],
      fileName: 'yolo' /* DIY library name as you wish  */
    }
  }
})

