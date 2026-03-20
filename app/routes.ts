import type { RouteConfig } from '@react-router/dev/routes'

import { index, prefix, route } from '@react-router/dev/routes'

export default [
  ...prefix('/:lang?', [
    route('/api/image', './routes/api/image.ts'),

    index('./routes/_index.tsx'),
    route('/about', './routes/about/_index.tsx'),
    route('/contact', './routes/contact/_index.tsx'),
  ]),
] satisfies RouteConfig
