import { reactRouter } from '@react-router/dev/vite'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import { intlayer, intlayerProxy, intlayerCompiler } from 'vite-intlayer'

export default defineConfig({
  plugins: [
    reactRouter(),
    tailwindcss(),

    intlayerCompiler(),
    intlayerProxy(),
    intlayer(),
  ],
  resolve: { tsconfigPaths: true },
})
