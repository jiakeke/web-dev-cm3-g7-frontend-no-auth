import dotenv from 'dotenv';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

dotenv.config()

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  //server: {
    //port: parseInt(import.meta.env.VITE_PORT) || 3000,
    //proxy: {
      //'/api': {
        //target: import.meta.env.VITE_API_PROXY_TARGET || 'http://localhost:4000',
        //changeOrigin: true,
        //rewrite: (path) => path.replace(/^\/api/, ''),
      //},
    //}
  //},
})


// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 3000,
//     proxy: {
//       '/api': {
//         target: 'http://localhost:4000',
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, ''),
//       },
//     },
//   },
// });
