export const KavitaStore = {
  host: () => ObjectStore.string("host"),
  apiKey: () => ObjectStore.string("apiKey"),
  credentials: () => SecureStore.string("credentials"),
  jwt: () => SecureStore.string("jwt"),
  authenticated: () => ObjectStore.get("authenticated"),
  openSeriesAsTitle: () => ObjectStore.boolean("openAsTitle"),
};
