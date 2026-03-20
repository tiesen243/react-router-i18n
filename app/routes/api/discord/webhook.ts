import { bot } from '@/lib/bot'

import type { Route } from './+types/webhook'

export function action({ request, context }: Route.ActionArgs) {
  return bot.webhooks.discord(request, {
    waitUntil: (task) => context.cloudflare.ctx.waitUntil(task),
  })
}
