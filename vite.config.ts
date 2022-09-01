import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    // port: 3000,
    proxy: {
      '/toy-proxy/toy-login': {
        target: 'http://192.168.121.64:30406',
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, '') // 不可以省略rewrite
      },
      '/auth-external-microservice': {
        target: 'http://192.168.121.64:9000',
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, '') // 不可以省略rewrite
      }
    }
  },
  resolve: {
    alias: {
      //解决警告You are running the esm-bundler build of vue-i18n. It is recommended to configure your bundler to explicitly replace feature flag globals with boolean literals to get proper tree-shaking in the final bundle.
      'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
      "@": resolve(__dirname, 'src'), // 路径别名
      
    }
  }
})
