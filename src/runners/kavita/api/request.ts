import { NetworkRequest, NetworkResponse } from "@suwatte/daisuke"
import { getHost, getJwt } from "./auth"
import { getCachedData, setCachedData } from "../utils/cache"
import { skip } from "node:test"

export async function request<T>(req: NetworkRequest) {
  const host = await getHost()
  const jwt = await getJwt()

  if (!host) throw new Error("You have not defined a server url!")
  if (!jwt) throw new Error("You are not signed in!")

  const client = new NetworkClient()

  console.log("Request to:", req.url, req.body, req.params)
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

/**
 * Cached request wrapper
 * Makes a network request with optional caching support
 * @param req The network request configuration
 * @param options Cache options
 * @param options.cacheKey Optional key to use for caching the response
 * @param options.ttl Time to live in milliseconds (required if cacheKey is provided)
 * @param options.skipCache If true, bypasses cache and always makes a fresh request
 * @returns The response data of type T
 */
export async function cachedRequest<T>(
  req: NetworkRequest,
  options?: {
    cacheKey?: string
    ttl?: number
    skipCache?: boolean
  }
): Promise<T> {
  const { cacheKey, ttl, skipCache = false } = options || {}

  if (skipCache) {
    if (!cacheKey) {
      return request<T>(req)
    }

    // Check cache first
    const cachedData = await getCachedData<T>(cacheKey)
    if (cachedData !== null) {
      return cachedData
    }
  }

  // Cache miss or expired, make the request
  const data = await request<T>(req)

  // Store in cache if TTL is provided
  if (cacheKey && ttl !== undefined) {
    await setCachedData(cacheKey, data, ttl)
  }

  return data
}
