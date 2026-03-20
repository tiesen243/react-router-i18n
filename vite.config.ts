import { reactRouter } from '@react-router/dev/vite'
import tailwindcss from '@tailwindcss/vite'
import alchemy from 'alchemy/cloudflare/react-router'
import { defineConfig } from 'vite'
import { intlayer, intlayerCompiler } from 'vite-intlayer'

export default defineConfig({
  plugins: [
    alchemy(),

    reactRouter(),
    tailwindcss(),

    intlayerCompiler(),
    intlayer(),
  ],
  resolve: { tsconfigPaths: true },
  build: {
    rolldownOptions: {
      external: ['zlib-sync'],
    },
  },
})
