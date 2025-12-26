import {
  DirectoryConfig,
  DirectoryHandler,
  DirectoryRequest,
  Highlight,
  PagedResult,
} from "@suwatte/daisuke"
import {
  RESULT_COUNT,
  FilterItems,
  FilterOptions,
  SortOptions,
  buildSort,
  seriesToHighlight,
  chapterToHighlight,
  Sort,
  convertSort,
} from "../utils"
import { getApiKey, getHost, getLibrarySeries, getSeriesChapters } from "../api"
import { KavitaStore } from "../store"

/**
 * Implementation of the DirectoryHandler Methods
 */
export const KavitaDirectoryHandler: DirectoryHandler = {
  getDirectory: function (request: DirectoryRequest): Promise<PagedResult> {
    return fetchDirectory(request)
  },
  getDirectoryConfig: async function (
    _: string | undefined
  ): Promise<DirectoryConfig> {
    return buildDirectoryConfig()
  },
}

/**
 * Builds the Directory View Sort Options & Filters
 */
function buildDirectoryConfig(): DirectoryConfig {
  return {
    searchable: true,
    filters: FilterOptions,
    sort: {
      options: SortOptions,
      canChangeOrder: true,
    },
  }
}

type IResponse = Promise<PagedResult>
async function fetchDirectory(request: DirectoryRequest): IResponse {
  const filters: FilterItems = request.filters ?? {}
  const seriesId = request.context?.seriesId
  const libraryId = request.context?.libraryId

  const host = await getHost()
  const apiKey = await getApiKey()
  if (!host) {
    throw new Error("Host not defined")
  }
  const asTitle = await KavitaStore.openSeriesAsTitle()

  if (seriesId) {
    const sort = convertSort(request.sort?.id) ?? Sort.Number
    const chapters = (
      await getSeriesChapters(
        seriesId
        // buildSort(sort, request.sort?.ascending),
        // filters,
        // request.page
      )
    ).chapters.map((chapter) => chapterToHighlight(chapter, host, apiKey))

    return {
      results: chapters,
      isLastPage: chapters.length < RESULT_COUNT,
    }
  } else if (libraryId) {
    const sort = convertSort(request.sort?.id) ?? Sort.DateUpdated
    const results = (
      await getLibrarySeries(
        libraryId,
        // buildSort(sort, request.sort?.ascending),
        // filters,
        request.page,
        // request.query
      )
    ).map((v) => seriesToHighlight(v, host, apiKey, !(asTitle ?? false)))
    return {
      results,
      isLastPage: results.length < RESULT_COUNT,
    }
  }

  const isSeriesDirectory = request.context?.isSeriesDirectory ?? false
  if (isSeriesDirectory) {
    const sort = convertSort(request.sort?.id) ?? Sort.DateUpdated
    const results = (
      await getLibrarySeries(
        libraryId,
        // buildSort(sort, request.sort?.ascending),
        // filters,
        request.page,
        // request.query
      )
    ).map((v) => seriesToHighlight(v, host, apiKey, !(asTitle ?? false)))
    return {
      results,
      isLastPage: results.length < RESULT_COUNT,
    }
  }
  // } else {
  //   const sort = convertSort(request.sort?.id) ?? Sort.DateAdded;
  //   const results = (
  //     await getSeriesChapters(
  //       series:
  //     )
  //     )
  //   ).map((v) => chapterToHighlight(v, host, apiKey));

  return {
    results: [],
    isLastPage: true,
  }
}
