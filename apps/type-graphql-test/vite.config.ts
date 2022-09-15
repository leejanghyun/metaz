import {defineConfig} from 'vite'
import {VitePluginNode} from 'vite-plugin-node'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig(() => {
  return {
    build: {
      rollupOptions: {
        external: ['./../client'],
      },
    },

    optimizeDeps: {
      // Vite does not work well with optional dependencies,
      // mark them as ignored for now
      exclude: ['class-transformer', 'class-validator'],
    },
    plugins: [
      /**
       * 바이트로 Nodejs 를 서비스 할 수 있는 플러그인 입니다
       */
      ...VitePluginNode({
        /**
         * 베이스 라이브러리는 express 입니다
         */
        adapter: 'express',
        appPath: './src/main.ts',
        tsCompiler: 'swc',
      }),
      /**
       * tsconfig.json 에 있는 paths 를 자동으로 import 또는 require 경로를 해결해 줍니다
       */
      tsconfigPaths(),
    ],
    server: {
      port: 8080,
    },
    ssr: {
      exclude: [],
    },
  }
})
