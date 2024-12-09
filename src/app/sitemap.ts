import { config } from '@shared/libs'
import { MetadataRoute } from 'next'

const BASE_URL = config.app.host

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${BASE_URL}/works`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${BASE_URL}/plans`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${BASE_URL}/faqs`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: new Date().toISOString(),
    },
  ]
}
