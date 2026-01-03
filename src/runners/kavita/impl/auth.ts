import {
  RunnerAuthenticatable,
} from "@suwatte/daisuke"
import { getApiKey, getUser } from "../api/auth"
import { genURL } from "../utils"
import { KavitaStore } from "../store"

export const KavitaAuthentication: RunnerAuthenticatable = {
  getAuthenticatedUser: async () => {
    const host = await KavitaStore.host()
    if (!host)
      throw new Error(
        "You have not set your server url. You must do this to use the runner"
      )
    const authenticated = await KavitaStore.jwt()
    if (!authenticated) return null

    try {
      const data = await getUser()

      return {
        handle: data.email,
      }
    } catch (err: any) {
      console.error(err.message)
      await SecureStore.remove("jwt")
    }

    return null
  },
  handleUserSignOut: async () => {
    throw "Not ready"
  },
}
