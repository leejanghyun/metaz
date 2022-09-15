import {defineConfig} from 'vite'
import {VitePluginNode} from 'vite-plugin-node'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  optimizeDeps: {
    // Vite does not work well with optional dependencies,
    // mark them as ignored for now
    exclude: [
      '@nestjs/microservices',
      '@nestjs/websockets',
      'cache-manager',
      'class-transformer',
      'class-validator',
      'fastify-swagger',
    ],
  },
  plugins: [
    /**
     * 바이트로 Nodejs 를 서비스 할 수 있는 플러그인 입니다
     */
    ...VitePluginNode({
      /**
       * 베이스 라이브러리는 express 입니다
       * nest
       */
      adapter: 'nest',
      appPath: './src/main.ts',
      /**
       * nestjs 기능을 온전히 컴파일 하기 위해 swc 트렌스파일러를 사용합니다 esbuild 는 데코레이터등 일부 기능을 컴파일 하지 않습니다
       * nest
       */
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
})
