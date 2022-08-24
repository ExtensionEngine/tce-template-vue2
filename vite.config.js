import Components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';
import path from 'path';
import viteCompression from 'vite-plugin-compression';
import vue from '@vitejs/plugin-vue2';
import { VuetifyResolver } from 'unplugin-vue-components/resolvers';

const HOST = '0.0.0.0';
const REPLACEMENT = `${path.resolve(__dirname, './src')}/`;

export default (/** if you want to use mode : { mode } */) => {
  return defineConfig({
    root: './src/preview/',
    base: './',
    server: {
      host: HOST,
      port: process.env.PORT
    },
    build: {
      lib: {
        entry: '../content-element/index.js',
        name: 'TCE',
        fileName: 'content-element'
      },
      rollupOptions: {
        output: {
          dir: './dist'
        }
      }
    },
    resolve: {
      alias: [
        {
          find: '@/',
          replacement: REPLACEMENT
        },
        {
          find: 'src/',
          replacement: REPLACEMENT
        }
      ]
    },
    plugins: [
      vue(/* options */),
      Components({
        resolvers: [
          // Vuetify
          VuetifyResolver()
        ]
      }),
      viteCompression()
    ]
  });
};
