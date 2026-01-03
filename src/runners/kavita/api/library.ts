import {
  Chapter,
  DirectoryRequest,
  Highlight,
  SortSelection,
  Tag,
} from "@suwatte/daisuke"
import { request, cachedRequest } from "."
import {
  LibraryDto,
  ChapterDto,
  SeriesDto,
  FilterV2Dto,
  UserReadingProfileDto,
  DashboardStreamDto,
  RecentlyAddedItemDto,
  SideNavStreamDto,
  VolumeDto,
  SeriesMetadataDto,
} from "../types"
import {
  buildFilterStatements,
  buildSort,
  buildTagFilterStatement,
  FilterInput,
  genURL,
  recentlyAddedItemToSeries,
  RESULT_COUNT,
} from "../utils"
import { CACHE_TTL, generateCacheKey } from "../utils/cache"

/**
 * Returns all libraries.
 */
export const getLibraries = async () => {
  return await request<LibraryDto[]>({
    url: await genURL("/api/Library/libraries"),
  })
}

/**
 * Gets All Books within a library
 */
export const getLibrarySeries = async (
  libraryId: string | null,
  dirRequest: DirectoryRequest
) => {
  const { sort, filters, page = 1, query, tag } = dirRequest
  const filtersStatements = buildFilterStatements(filters)
  const librarySeries = await request<SeriesDto[]>({
    url: await genURL("/api/Series/v2"),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      statements: tag?.propertyId
        ? [buildTagFilterStatement(tag?.tagId, tag?.propertyId)]
        : [
            ...(libraryId
              ? [
                  {
                    field: 19 as const,
                    value: libraryId.toString(),
                    comparison: 0 as const,
                  },
                ]
              : []),
            ...(query
              ? [{ field: 1 as const, value: query, comparison: 7 as const }]
              : []),
            ...filtersStatements,
          ],
      combination: 1,
      sortOptions: sort ? buildSort(sort) : { isAscending: true, sortField: 1 },
    } satisfies FilterV2Dto,
    params: {
      pageNumber: page,
      pageSize: RESULT_COUNT,
    },
  })

  return librarySeries
}

export interface SeriesChaptersResult {
  chaptersVolume?: VolumeDto
  volumes: VolumeDto[]
  specialsVolume?: VolumeDto
  allVolumes: VolumeDto[]
}

export const getSeriesChapters = async (
  series: string,
  skipCache: boolean = false
): Promise<SeriesChaptersResult> => {
  const allVolumes = await cachedRequest<VolumeDto[]>(
    {
      url: await genURL(`/api/Series/volumes`),
      params: {
        seriesId: series,
      },
    },
    {
      cacheKey: generateCacheKey("series_chapters", series),
      ttl: CACHE_TTL.SERIES_DETAILS,
      skipCache,
    }
  )

  const volumes = allVolumes.filter(
    (v) =>
      v.minNumber !== -100000 &&
      v.minNumber !== 100000 &&
      v.chapters &&
      v.chapters.length > 0
  )
  const chaptersVolume = allVolumes.find((v) => v.minNumber <= -100000)
  const specialsVolume = allVolumes.find((v) => v.minNumber >= 100000)

  return { chaptersVolume, volumes, specialsVolume, allVolumes }
}

export const getSeries = async (id: string) => {
  return cachedRequest<SeriesDto>(
    {
      url: await genURL(`/api/Series/${id}`),
    },
    {
      cacheKey: generateCacheKey("series", id),
      ttl: CACHE_TTL.SERIES_DETAILS,
    }
  )
}

export const getSeriesReadingProfile = async (id: string) => {
  return cachedRequest<UserReadingProfileDto>(
    {
      url: await genURL(`/api/reading-profile/${id}`),
    },
    {
      cacheKey: generateCacheKey("reading_profile", id),
      ttl: CACHE_TTL.READING_PROFILE,
    }
  )
}
export const getSeriesMetadata = async (id: string) => {
  return cachedRequest<SeriesMetadataDto>(
    {
      url: await genURL(`/api/Series/metadata`),
      params: {
        seriesId: id,
      },
    },
    {
      cacheKey: generateCacheKey("series_metadata", id),
      ttl: CACHE_TTL.SERIES_METADATA,
    }
  )
}

export const getSideNavInfo = async () => {
  return request<SideNavStreamDto[]>({
    url: await genURL("/api/Stream/sidenav"),
  })
}

export const getDashboardInfo = async () => {
  return request<DashboardStreamDto[]>({
    url: await genURL("/api/stream/dashboard"),
  })
}

export const getOnDeckSeries = async (libraryId?: string | null) => {
  return request<SeriesDto[]>({
    url: await genURL("/api/Series/on-deck"),
    method: "POST",
    params: {
      ...(libraryId && { libraryId }),
    },
  })
}

export const getRecentlyUpdatedSeries = async () => {
  const items = await request<RecentlyAddedItemDto[]>({
    url: await genURL("/api/series/recently-updated-series"),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    params: {
      pageSize: RESULT_COUNT,
      pageNumber: 0,
    },
  })

  const series: SeriesDto[] = await Promise.all(
    (items ?? []).map((item) => recentlyAddedItemToSeries(item))
  )
  return series
}

export const getRecentlyAddedSeries = async () => {
  return request<SeriesDto[]>({
    url: await genURL("/api/series/recently-added-v2"),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {},
    params: {
      pageSize: RESULT_COUNT,
      pageNumber: 0,
    },
  })
}

export const getRecommendationGenre = async (genre: string) => {
  return request<SeriesDto[]>({
    url: await genURL(`/api/Recommended/more-in`),
  })
}

export const getSeriesContinuePoint = async (seriesId: string) => {
  const hasProgress = await request<boolean>({
    url: await genURL(`/api/Reader/has-progress`),
    params: {
      seriesId: seriesId,
    },
  })
  if (!hasProgress) {
    return null
  }
  return request<ChapterDto>({
    url: await genURL(`/api/Reader/continue-point`),
    params: {
      seriesId: seriesId,
    },
  })
}
