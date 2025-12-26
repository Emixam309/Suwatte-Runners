import { Chapter, Highlight } from "@suwatte/daisuke"
import { request } from "."
import {
  BookInfoDto,
  LibraryDto,
  ChapterDto,
  SeriesDto,
  FilterV2Dto,
  UserReadingProfileDto,
  SeriesDetailDto,
  DashboardStreamDto,
  RecentlyAddedItemDto,
} from "../types"
import { getApiKey, getHost } from "./auth"
import {
  chapterToHighlight,
  genURL,
  KavitaChapterToChapter,
  recentlyAddedItemToSeries,
  RESULT_COUNT,
  seriesToHighlight,
} from "../utils"

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
  // sort: string,
  // filters: FilterV2Dto,
  page: number = 1
  // search?: string
) => {
  const librarySeries = await request<SeriesDto[]>({
    url: await genURL("/api/Series/v2"),
    method: "POST",
    body: {
      statements: libraryId
        ? [{ field: 19, value: libraryId.toString(), comparison: 0 }]
        : [],
      combination: 1,
      sortOptions: { isAscending: true, sortField: 1 },
    } satisfies FilterV2Dto,
    params: {
      PageNumber: page - 1,
      PageSize: RESULT_COUNT,
    },
  })

  return librarySeries
}

/**
 * Get Books on deck
 */
// export const getBooksOnDeck = async (libraryId: string | null) => {
//   const { content: data } = await request<PageBookDto>({
//     url: await genURL("/api/Series/on-deck"),
//     params: {
//       ...(libraryId && { libraryId }),
//     },
//   })
//   const host = await getHost()
//   const highlights: Highlight[] = (data ?? []).map((book) =>
//     seriesToHighlight(book, host)
//   )

//   return highlights
// }

/**
 * Gets all series within a library
 */
// export const getSeriesForLibraryWithState = async (
//   library_id: string | null,
//   state: string
// ) => {
//   const body = {
//     url: await genURL(`/api/v1/series/${state}`),
//     params: {
//       ...(library_id && { library_id }),
//     },
//   }
//   const { content: data } = await request<PageSeriesDto>(body)

//   return data ?? []
// }

// export const getSeriesForLibrary = async (
//   library_id: string | null,
//   sort: string,
//   filters: FilterItems,
//   page: number,
//   search?: string
// ) => {
//   const config = {
//     url: await genURL(`/api/v1/series`),
//     params: {
//       ...(library_id && { library_id }),
//       sort,
//       ...filters,
//       page: page - 1,
//       size: RESULT_COUNT,
//       search,
//     },
//   }

//   const { content: data } = await request<PageSeriesDto>(config)

//   return data ?? []
// }

/**
 * Get books within a series
 */
// export const getBooksForSeries = async (
//   series: string,
//   sort: string,
//   filters: FilterItems,
//   page: number
// ) => {
//   const { content: data, last } = await request<PageBookDto>({
//     url: await genURL(`/api/v1/series/${series}/books`),
//     params: {
//       page: page - 1,
//       size: RESULT_COUNT,
//       sort,
//       ...filters,
//     },
//   })
//   const host = await getHost()

//   const items: Highlight[] = (data ?? []).map((book) =>
//     seriesToHighlight(book, host)
//   )

//   return {
//     isLastPage: last ?? true,
//     items,
//   }
// }

export const getSeriesChapters = async (series: string) => {
  const seriesDetail = await request<SeriesDetailDto>({
    url: await genURL(`/api/Series/series-detail`),
    params: {
      seriesId: series,
    },
  })

  const chapters = [
    ...(seriesDetail.chapters ?? []),
    ...(seriesDetail.specials ?? []),
  ].reverse()

  return { chapters, volumes: seriesDetail.volumes }
}

export const getSeries = async (id: string) => {
  return request<SeriesDto>({
    url: await genURL(`/api/Series/${id}`),
  })
}

export const getSeriesReadingProfile = async (id: string) => {
  return request<UserReadingProfileDto>({
    url: await genURL(`/api/reading-profile/${id}`),
  })
}
export const getSeriesMetadata = async (id: string) => {
  return request<SeriesDto>({
    url: await genURL(`/api/Series/metadata`),
    params: {
      seriesId: id,
    },
  })
}

// export const getBooks = async (
//   series: string,
//   size: number,
//   sort: string = buildSort(Sort.Number, false)
// ) => {
//   const { content: data } = await request<PageBookDto>({
//     url: await genURL(`/api/v1/series/${series}/books`),
//     params: {
//       page: 0,
//       size,
//       sort,
//     },
//   })

//   return data ?? []
// }

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

export const getRecentlyUpdatedSeries = async (libraryId?: string | null) => {
  const items = await request<RecentlyAddedItemDto[]>({
    url: await genURL("/api/series/recently-updated-series"),
    method: "POST",
    params: {
      ...(libraryId && { libraryId }),
      pageSize: RESULT_COUNT,
      pageNumber: 0,
    },
  })

  const series: SeriesDto[] = await Promise.all(
    (items ?? []).map((item) => recentlyAddedItemToSeries(item))
  )
  return series
}

export const getRecentlyAddedSeries = async (libraryId?: string | null) => {
  return request<SeriesDto[]>({
    url: await genURL("/api/series/recently-added-v2"),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {},
    params: {
      ...(libraryId && { libraryId }),
      pageSize: RESULT_COUNT,
      pageNumber: 0,
    },
  })
}

export const getRecommendationGenre = async (genre: string) => {
  return request<SeriesDto[]>({
    url: await genURL(`/api/recommended/more-in`),
  })
}
