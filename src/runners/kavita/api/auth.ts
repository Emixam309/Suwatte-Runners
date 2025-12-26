import { request, simpleReq } from "."
import { KavitaStore } from "../store"
import { UserDto } from "../types"
import { genURL } from "../utils"

export const getUser = async () => {
  const user = await request<any>({ url: await genURL("/api/Account") })
  return user
}

export const getHost = async () => {
  const host = await KavitaStore.host()
  if (!host) throw new Error("You have not defined a server url!")
  if (host.endsWith("/")) return host.slice(0, -1)
  return host
}

export const getApiKey = async () => {
  const apiKey = await KavitaStore.apiKey()
  if (!apiKey) throw new Error("You have not defined an API Key!")
  return apiKey
}

export const getJwt = async () => {
  const apiKey = await getApiKey()
  const jwt = await KavitaStore.jwt()
  if (!jwt) {

    const res = await simpleReq<UserDto>({
      url: await genURL("/api/Plugin/authenticate"),
      method: "POST",
      params: { apiKey: apiKey, pluginName: "Suwatte" },
    })
    const newJwt = res.token
    await SecureStore.set("jwt", newJwt)
    return newJwt
  }
  return jwt
}

export const healthCheck = async () => {
  return await simpleReq<string>({ url: await genURL("/api/Health") })
}
