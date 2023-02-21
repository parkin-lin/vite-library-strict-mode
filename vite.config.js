import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src')
      }
    ]
  },
  build: {
    lib: {
      entry: './src/index.js',
      formats: ['es'],
      fileName: 'your-lib' /* DIY library name as you wish  */
    }
  }
})
