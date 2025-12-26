import { NetworkRequest, NetworkResponse } from "@suwatte/daisuke"
import { getHost, getJwt } from "./auth"

export async function request<T>(req: NetworkRequest) {
  const host = await getHost()
  const jwt = await getJwt()

  if (!host) throw new Error("You have not defined a server url!")
  if (!jwt) throw new Error("You are not signed in!")

  const client = new NetworkClient()

  const { data } = await client.request({
    ...req,
    headers: {
      ...req.headers,
      ...(jwt ? { Authorization: `Bearer ${jwt}` } : {}),
    },
    transformResponse: async (res: NetworkResponse) => {
      if (res.status === 401) {
        throw new Error("Unauthorized: JWT may be invalid or expired")
      }
      return res
    },
  })

  if (!data) return {} as T
  const object = JSON.parse(data)
  return object as T
}

export async function simpleReq<T>(req: NetworkRequest) {
  const client = new NetworkClient()
  const { data } = await client.request(req)
  if (!data) return {} as T
  try {
    const object = JSON.parse(data)
    return object as T
  } catch {
    return data as T
  }
}
