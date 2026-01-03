import {
  DirectoryConfig,
  DirectoryFilter,
  DirectoryHandler,
  DirectoryRequest,
  FilterType,
  Highlight,
  PagedResult,
} from "@suwatte/daisuke"
import {
  RESULT_COUNT,
  SortOptions,
  buildSort,
  seriesToHighlight,
  chapterToHighlight,
  Sort,
} from "../utils"
import { getApiKey, getHost, getLibrarySeries } from "../api"
import { getGenres, getLanguages, getPeoples, getTags } from "../api/metadata"

/**
 * Implementation of the DirectoryHandler Methods
 */
export const KavitaDirectoryHandler: DirectoryHandler = {
  getDirectory: function (request: DirectoryRequest): Promise<PagedResult> {
    return fetchDirectory(request)
  },
  getDirectoryConfig: async function (
    configId: string | undefined
  ): Promise<DirectoryConfig> {
    const filterOptions = await fetchFilterOptions(configId)

    return {
      searchable: true,
      filters: filterOptions,

      sort: {
        options: SortOptions,
        canChangeOrder: true,
        default: {
          id: Sort.SortName.toString(),
          ascending: true,
        },
      },
    }
  },
}

async function fetchDirectory(request: DirectoryRequest): Promise<PagedResult> {
  const libraryId = request.context?.libraryId

  const host = await getHost()
  const apiKey = await getApiKey()
  if (!host) {
    throw new Error("Host not defined")
  }
  const results = await Promise.all(
    (
      await getLibrarySeries(
        libraryId,
        request
      )
    ).map(async (v) => await seriesToHighlight(v, host, apiKey))
  )
  return {
    results,
    isLastPage: results.length < RESULT_COUNT,
  }
}

async function fetchFilterOptions(
  libraryId?: string
): Promise<DirectoryFilter[]> {
  const genres = await getGenres(libraryId ? [libraryId] : undefined)
  const peoples = await getPeoples(libraryId ? [libraryId] : undefined)
  const tags = await getTags(libraryId ? [libraryId] : undefined)
  const languages = await getLanguages(libraryId ? [libraryId] : undefined)

  return [
    {
      id: "genres",
      title: "Genres",
      type: FilterType.EXCLUDABLE_MULTISELECT,
      options: genres.map((genre) => ({
        id: genre.id?.toString() ?? "",
        title: genre.title ?? "Untitled",
      })),
    },
    {
      id: "languages",
      title: "Languages",
      type: FilterType.MULTISELECT,
      options: languages.map((lang) => ({
        id: lang.isoCode ?? "",
        title: lang.title ?? "Untitled",
      })),
    },
    {
      id: "peoples",
      title: "People",
      type: FilterType.SELECT,
      options: peoples.map((person) => ({
        id: person.id?.toString() ?? "",
        title: person.name ?? "Untitled",
      })),
    },
    {
      id: "tags",

      title: "Tags",
      type: FilterType.EXCLUDABLE_MULTISELECT,
      options: tags.map((tag) => ({
        id: tag.id?.toString() ?? "",
        title: tag.title ?? "Untitled",
      })),
    },
  ]
}
