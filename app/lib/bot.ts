import { createDiscordAdapter } from '@chat-adapter/discord'
import { createMemoryState } from '@chat-adapter/state-memory'
import { generateText } from 'ai'
import { Chat } from 'chat'

import { openrouter } from '@/lib/ai'

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
  await thread.subscribe()
  await thread.post('Hello from Discord!')
})

bot.onDirectMessage(async (thread, _message) => {
  await thread.subscribe()
  await thread.post('Hello from Discord!')
})

bot.onNewMessage(/^!yuki/, async (thread, message) => {
  await thread.startTyping()

  const [_prefix, command, ...args] = message.text.split(' ')

  let msg = `Hey ${thread.mentionUser(message.author.userId)}! `

  switch (command) {
    case 'ping': {
      msg += 'Pong!'
      break
    }
    case 'echo': {
      msg += `You said: ${args.join(' ')}`
      break
    }
    case 'ask': {
      const { text } = await generateText({
        model: openrouter.chat('openrouter/free'),
        prompt: args.join(' '),
      })
      msg += text
      break
    }
    default: {
      msg += "I don't recognize that command."
    }
  }

  await thread.post(msg)
})
