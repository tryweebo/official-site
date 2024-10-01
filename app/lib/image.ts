import * as fs from 'fs/promises'
import { getPlaiceholder } from 'plaiceholder'

interface CreateImageBlur {
  url: string
}

/**
 * ## createImageBlur
 *
 * Create the blur placeholder for the images that used to loading animation
 * for the images and fill the blank space
 *
 * @param url The image url, can be the static and dynamic image url
 * @returns {string}
 */
export async function createImageBlur({
  url,
}: CreateImageBlur): Promise<string> {
  // Check if the images is static or the dynamic images from url
  const isDynamicImage = url.includes('https://') || url.includes('http://')
  let blurImage

  if (isDynamicImage) {
    const buffer = await fetch(url)
      .then((res) => res.arrayBuffer())
      .then((res) => Buffer.from(res))

    blurImage = (await getPlaiceholder(buffer)).base64
  } else {
    const buffer = await fs.readFile(`${process.cwd()}/public${url}`)
    blurImage = (await getPlaiceholder(buffer)).base64
  }

  return blurImage
}
