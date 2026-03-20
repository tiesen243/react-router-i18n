import alchemy from 'alchemy'
import { Images, ReactRouter } from 'alchemy/cloudflare'
import { GitHubComment } from 'alchemy/github'
import { CloudflareStateStore } from 'alchemy/state'
import { config } from 'dotenv'

config({ path: '.env' })

const app = await alchemy('react-router-i18n', {
  stateStore: (scope) => new CloudflareStateStore(scope),
})

export const images = Images()

export const web = await ReactRouter('web', {
  bindings: {
    images,

    APP_URL: alchemy.secret(process.env.APP_URL),
    OPENROUTER_API_KEY: alchemy.secret(process.env.OPENROUTER_API_KEY),
    DISCORD_APPLICATION_ID: alchemy.secret(process.env.DISCORD_APPLICATION_ID),
    DISCORD_PUBLIC_KEY: alchemy.secret(process.env.DISCORD_PUBLIC_KEY),
    DISCORD_BOT_TOKEN: alchemy.secret(process.env.DISCORD_BOT_TOKEN),
    DISCORD_MENTION_ROLE_IDS: alchemy.secret(
      process.env.DISCORD_MENTION_ROLE_IDS
    ),
  },
})

console.log(`Web deployed at: ${web.url}`)

if (process.env.PULL_REQUEST) {
  const previewUrl = web.url

  await GitHubComment('pr-preview-comment', {
    owner: process.env.GITHUB_REPOSITORY_OWNER || 'your-username',
    repository: process.env.GITHUB_REPOSITORY_NAME || 'my-react-router-app',
    issueNumber: Number(process.env.PULL_REQUEST),
    body: `
## 🚀 Preview Deployed

Your preview is ready!

**Preview URL:** ${previewUrl}

This preview was built from commit ${process.env.GITHUB_SHA}

---
<sub>🤖 This comment will be updated automatically when you push new commits to this PR.</sub>`,
  })
}

await app.finalize()
