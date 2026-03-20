import { bot } from '@/lib/bot'

import type { Route } from './+types/gateway'

export async function loader({ context }: Route.LoaderArgs) {
  await bot.initialize()

  const discord = bot.getAdapter('discord')
  if (!discord)
    return new Response('Discord adapter not found', { status: 404 })

  const webhookUrl = `${context.cloudflare.env.APP_URL}/api/discord/webhook`

  const durationMs = 10 * 60 * 1000 // 10 minutes

  return discord.startGatewayListener(
    { waitUntil: (task) => context.cloudflare.ctx.waitUntil(task) },
    durationMs,
    undefined,
    webhookUrl
  )
}
