export const config = {
  app: {
    host: process.env.NEXT_PUBLIC_APP_HOST || 'http://localhost:3000',
  },
  posthog: {
    key: process.env.NEXT_PUBLIC_POSTHOG_KEY || '',
    host: process.env.NEXT_PUBLIC_POSTHOG_HOST || '',
    uiHost: process.env.NEXT_PUBLIC_POSTHOG_UI_HOST || '',
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || '',
  },
} as const
