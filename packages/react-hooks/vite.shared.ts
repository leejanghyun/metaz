import react from '@vitejs/plugin-react'
import path from 'path'
import {ConfigEnv, UserConfig} from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export type UserConfigFn = (env: ConfigEnv) => UserConfig

export const sharedConfig: UserConfigFn = (): UserConfig => {
  return {
    define: {
      // eslint-disable-next-line prettier/prettier
      __DEV__: '(process.env.NODE_ENV !== \'production\')',
    },
    optimizeDeps: {
      exclude: [],
      include: [],
    },

    plugins: [react(), tsconfigPaths()],

    resolve: {
      alias: {
        'src/': `${path.resolve(__dirname, 'src')}/`,
      },
    },
  }
}
