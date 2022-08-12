import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue2'
import Components from 'unplugin-vue-components/vite'
import { VuetifyResolver } from 'unplugin-vue-components/resolvers'
import viteCompression from 'vite-plugin-compression';
import path from 'path';

const HOST = "0.0.0.0"
const REPLACEMENT = `${path.resolve(__dirname, './src')}/`

export default (/** if you want to use mode : { mode }*/) => {
  return defineConfig({
    base: "./",
    server: {
      host: HOST,
      port: process.env.PORT,
    },
    resolve: {
      alias: [
        {
          find: '@/',
          replacement: REPLACEMENT,
        },
        {
          find: 'src/',
          replacement: REPLACEMENT,
        },
      ],
    },
    plugins: [
      vue(/* options */),
      Components({
        resolvers: [
          // Vuetify
          VuetifyResolver(),
        ],
      }),
      legacy({
        targets: ['ie >= 11'],
        additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
      }),
      viteCompression()
    ],
  })
}


