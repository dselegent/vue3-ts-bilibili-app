import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';

import { resolve } from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
    hmr: true,
  },
  plugins: [
    vue({
      reactivityTransform: true,
    }),
    Components({
      resolvers: [VantResolver()],

    }),
  ],
  resolve: {
    // 配置别名
    alias: {
      "@": resolve(__dirname, "./src"),
      "@c": resolve(__dirname, "./src/components"),
      '@v': resolve(__dirname, './src/views')
    },
    extensions: ['.ts', '.js', '.mjs', '.jsx', '.tsx', '.json']
  },
});

