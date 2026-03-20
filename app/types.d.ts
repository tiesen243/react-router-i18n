// oxlint-disable-next-line import/no-relative-parent-imports
import type { web } from '../alchemy.run.ts'

export type CloudflareEnv = typeof web.Env

declare global {
  type Env = CloudflareEnv
}

declare module 'cloudflare:workers' {
  namespace Cloudflare {
    // oxlint-disable-next-line typescript/no-empty-interface, typescript/no-empty-object-type
    export interface Env extends CloudflareEnv {}
  }
}
