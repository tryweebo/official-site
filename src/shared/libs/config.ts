function isBrowser() {
  return typeof window !== "undefined" ? true : false
}

export function loadServerEnv() {
  const env = process.env
  return env
}

export function loadConfig() {
  const isOnBrowser = isBrowser()
  const ENV = isOnBrowser ? window.__ENV__ : process.env

  return {
    app: {
      host: ENV.APP_HOST || "http://localhost:5173",
    },
    posthog: {
      key: ENV.POSTHOG_KEY,
    },
    verification: {
      google: ENV.GOOGLE_VERIFICATION,
    },
    kit: {
      key: ENV.KIT_API_KEY,
    },
  } as const
}
