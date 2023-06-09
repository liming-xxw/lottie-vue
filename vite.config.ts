import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build:{
    lib:{
      entry:path.resolve(__dirname,'./src/script/index.ts'),
      name:'lottie-vue',
      fileName:(format)=> `lottie-web-${format}.js`
    }
  }
})
