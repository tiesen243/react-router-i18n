import * as z from 'zod'

import type { Route } from './+types/image'

export async function action({ request, context }: Route.LoaderArgs) {
  const formData = await request.formData()

  try {
    const { image, quality, ...opts } = schema.parse(
      Object.fromEntries(formData.entries())
    )

    const buffer = new Uint8Array(await image.arrayBuffer())

    const transformedImage = await context.cloudflare.env.images
      .input(buffer as unknown as ReadableStream<Uint8Array>)
      .transform(opts)
      .output({ format: 'image/webp', quality })

    return transformedImage.response()
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : 'An unknown error occurred while processing the image.'
    return new Response(message, { status: 500 })
  }
}

const schema = z.object({
  image: z.instanceof(File, { message: 'The "image" field must be a file.' }),
  width: z.string().regex(/^\d+$/).transform(Number).optional(),
  height: z.string().regex(/^\d+$/).transform(Number).optional(),
  quality: z.string().regex(/^\d+$/).default('80').transform(Number),
})
