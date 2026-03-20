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

  const history = []
  for await (const m of thread.messages) history.push(m)

  console.log(history)

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
        system: SYSTEM_PROMPT,
        messages: history.map((m) => ({
          role: m.author.isBot ? 'assistant' : 'user',
          content: m.text,
        })),
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

const SYSTEM_PROMPT = `You are YukiBot, a helpful, friendly, and cheerful AI assistant.

CRITICAL INSTRUCTIONS:
1. ALWAYS respond natively and naturally in Vietnamese.
2. If you do not know the answer to a question, honestly admit it—do not hallucinate or make up information.
3. Users may interact with you via chat commands (e.g., "!yuki ask [question]"). Ignore the command syntax and focus solely on the user's actual question or intent.
4. Keep your answers concise, engaging, and well-formatted for a chat environment.`
