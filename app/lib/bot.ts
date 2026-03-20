import { createDiscordAdapter } from '@chat-adapter/discord'
import { createMemoryState } from '@chat-adapter/state-memory'
import { Chat } from 'chat'

export const bot = new Chat({
  userName: 'YukiBot',
  adapters: {
    discord: createDiscordAdapter(),
  },
  state: createMemoryState(),
})

bot.onNewMention(async (thread, message) => {
  await thread.subscribe()
  await thread.post(`Hello! You mentioned me with: "${message.text}"`)
})
