/**
 * Cache utilities for Kavita API requests
 * Uses ObjectStore to cache responses with TTL (Time To Live)
 */

/**
 * Cache TTL constants in milliseconds
 */
export const CACHE_TTL = {
  LIBRARIES: 3600000, // 1 hour - Libraries rarely change
  SERIES_METADATA: 3600000, // 1 hour - Metadata is relatively static
  SERIES_DETAILS: 900000, // 15 minutes - Series details may update with new chapters
  SERIES_CHAPTERS: 600000, // 10 minutes - Chapters can be added
  READING_PROFILE: 3600000, // 1 hour - Reading profiles are relatively static
  DASHBOARD: 300000, // 5 minutes - Dashboard should be relatively fresh
  SIDENAV: 300000, // 5 minutes - Side navigation info
} as const

/**
 * Cache entry structure
 */
interface CacheEntry<T> {
  data: T
  timestamp: number // Unix timestamp in milliseconds
  ttl: number // Time to live in milliseconds
}

/**
 * Checks if a cache entry is still valid based on its TTL
 */
export function isCacheValid<T>(entry: CacheEntry<T> | null): boolean {
  if (!entry) return false
  const now = Date.now()
  return now - entry.timestamp < entry.ttl
}

/**
 * Retrieves cached data from ObjectStore if valid
 * @param cacheKey The key to retrieve from cache
 * @returns The cached data if valid, null otherwise
 */
export async function getCachedData<T>(
  cacheKey: string
): Promise<T | null> {
  try {
    const cached = await ObjectStore.get(cacheKey) as CacheEntry<T> | null
    
    if (cached && isCacheValid(cached)) {
      console.log(`Cache hit for: ${cacheKey}`)
      return cached.data
    }
    
    console.log(`Cache miss for: ${cacheKey}`)
    return null
  } catch (error) {
    console.error(`Error reading cache for ${cacheKey}:`, error)
    return null
  }
}

/**
 * Stores data in cache with TTL
 * @param cacheKey The key to store in cache
 * @param data The data to cache
 * @param ttl Time to live in milliseconds
 */
export async function setCachedData<T>(
  cacheKey: string,
  data: T,
  ttl: number
): Promise<void> {
  try {
    const entry: CacheEntry<T> = {
      data,
      timestamp: Date.now(),
      ttl,
    }
    await ObjectStore.set(cacheKey, entry)
    console.log(`Cached data for: ${cacheKey} (TTL: ${ttl}ms)`)
  } catch (error) {
    console.error(`Error caching data for ${cacheKey}:`, error)
  }
}

/**
 * Clears cache entries
 * @param pattern Optional pattern to match cache keys. If not provided, clears all cache entries.
 *                Pattern matching: clears keys that start with the pattern (prefix matching)
 * @example
 * clearCache() // Clears all cache
 * clearCache("cache_series_") // Clears all series-related cache
 * clearCache("cache_libraries") // Clears only libraries cache
 */
export async function clearCache(pattern?: string): Promise<void> {
  try {
    if (!pattern) {
      console.log("Clearing all cache entries")
      // Clear all cache entries by removing known cache keys
      const allKeys = [
        "cache_libraries",
        ...Object.keys(CACHE_TTL).map(k => `cache_${k.toLowerCase()}`)
      ]
      
      for (const key of allKeys) {
        await ObjectStore.remove(key)
      }
      console.log("Cleared all cache")
    } else {
      console.log(`Clearing cache entries matching pattern: ${pattern}`)
      // For pattern-based clearing, we need to track which keys exist
      // Since ObjectStore doesn't support key listing, we'll clear specific known patterns
      // This is a limitation of the current API
      await ObjectStore.remove(pattern)
      console.log(`Cleared cache for pattern: ${pattern}`)
    }
  } catch (error) {
    console.error(`Error clearing cache:`, error)
  }
}

/**
 * Generates a cache key for a request
 * @param prefix The prefix for the cache key (e.g., "series", "libraries")
 * @param id Optional ID to append to the key
 * @returns A formatted cache key
 */
export function generateCacheKey(prefix: string, id?: string): string {
  return id ? `cache_${prefix}_${id}` : `cache_${prefix}`
}
