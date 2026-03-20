import type { RouteConfig } from '@react-router/dev/routes'

import { index, prefix, route } from '@react-router/dev/routes'

export default [
  route('/api/image', './routes/api/image.ts'),
  route('/api/webhooks/discord', './routes/api/webhooks/discord.ts'),

  ...prefix('/:lang?', [
    index('./routes/_index.tsx'),
    route('/about', './routes/about/_index.tsx'),
    route('/contact', './routes/contact/_index.tsx'),
  ]),
] satisfies RouteConfig
