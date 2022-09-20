import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import addCssPrefix from 'postcss-change-css-prefix'

// https://vitejs.dev/config/
export default (({ mode }) => {
  // 获取环境变量
  const env = loadEnv(mode, './')
  console.log(env);

  const server = env.VUE_APP_SERVER_BASE_URL
  return defineConfig({
    plugins: [vue()],
    envDir: './env',
    server: {
      host: '0.0.0.0', //ip地址
      port: 3000, //端口号
      proxy: {
        '/toy-proxy/toy-login': {
          target: 'http://192.168.121.70:59080',
          changeOrigin: true,
          // rewrite: (path) => path.replace(/^\/api/, '') // 不可以省略rewrite
        },
        '/nms/itnms-server/sys-auth': {
          target: 'http://192.168.121.70:59080',
          changeOrigin: true,
          // rewrite: (path) => path.replace(/^\/api/, '') // 不可以省略rewrite
        },
        '/nms/micro/itnms-business': {
          target: 'http://localhost:7004',
          changeOrigin: true,
          // rewrite: (path) => path.replace(/^\/api/, '') // 不可以省略rewrite
        },
        '/nms/micro/itnms-topo': {
          target: 'http://localhost:7006',
          changeOrigin: true,
          // rewrite: (path) => path.replace(/^\/api/, '') // 不可以省略rewrite
        },
        '/nms/itnms-server': {
          target: 'http://192.168.121.70:59080',
          ws: true,
          changeOrigin: true
        },
      }
    },
    resolve: {
      alias: {
        //解决警告You are running the esm-bundler build of vue-i18n. It is recommended to configure your bundler to explicitly replace feature flag globals with boolean literals to get proper tree-shaking in the final bundle.
        'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
        "@": resolve(__dirname, 'src'), // 路径别名
      }
    },
    css: {
      // 修改element-plus的样式前缀
      preprocessorOptions: {
        scss: {
          additionalData: `@use "/src/styles/element/index.scss" as *;`,
        },
      },
      // 修改所有css的样式前缀
      postcss: {
        plugins: [
          addCssPrefix({
            prefix: 'el-',
            replace: 'ep-',
          })
        ]
      }
    }
  })
})
