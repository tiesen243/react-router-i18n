import { bot } from '@/lib/bot'

import type { Route } from './+types/discord'

export function action({ request }: Route.ActionArgs) {
  return bot.webhooks.discord(request)
}
