export const KavitaStore = {
  host: () => ObjectStore.string("host"),
  apiKey: () => SecureStore.string("apiKey"),
  jwt: () => SecureStore.string("jwt"),
  authenticated: () => ObjectStore.get("authenticated"),
  continuePointCover: () => ObjectStore.boolean("continuePointCover"),
  enableLogging: () => ObjectStore.boolean("enableLogging"),
  clearCache: () => ObjectStore.boolean("clearCache"),
};
