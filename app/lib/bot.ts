import { createDiscordAdapter } from '@chat-adapter/discord'
import { createMemoryState } from '@chat-adapter/state-memory'
import { Chat } from 'chat'

const { env } = process

export const bot = new Chat({
  userName: 'YukiBot',
  adapters: {
    discord: createDiscordAdapter({
      applicationId: env.DISCORD_APPLICATION_ID,
      publicKey: env.DISCORD_PUBLIC_KEY,
      botToken: env.DISCORD_BOT_TOKEN,
      mentionRoleIds: [env.DISCORD_MENTION_ROLE_IDS ?? ''],
    }),
  },
  state: createMemoryState(),
})

bot.onNewMention(async (thread, _message) => {
  await thread.post('Hello from Discord!')
})
