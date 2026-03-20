import { waitUntil } from '@vercel/functions'

import { bot } from '@/lib/bot'

import type { Route } from './+types/webhook'

export function action({ request }: Route.ActionArgs) {
  return bot.webhooks.discord(request, {
    waitUntil: (task) => waitUntil(task),
  })
}
