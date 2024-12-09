import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types'
import { Twitter } from 'next/dist/lib/metadata/types/twitter-types'

const openGraph: OpenGraph = {
  images: [
    'https://cdn.hashnode.com/res/hashnode/image/upload/v1732187828243/cc1d78a8-387f-457e-841e-20f9528588e9.png',
  ],
  locale: 'en_US',
  type: 'website',
  siteName: 'Weebo',
}

const twitter: Twitter = {
  images: [
    'https://cdn.hashnode.com/res/hashnode/image/upload/v1732187828243/cc1d78a8-387f-457e-841e-20f9528588e9.png',
  ],
  card: 'summary_large_image',
  creator: '@nyomansunima',
  site: 'Weebo',
}

export const sharedMetadata = {
  openGraph,
  twitter,
}
