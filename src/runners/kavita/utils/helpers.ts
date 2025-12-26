import {
  Chapter,
  ChapterData,
  ChapterPage,
  Content,
  DefinedLanguages,
  Highlight,
  Property,
  Provider,
  PublicationStatus,
  ReadingMode,
} from "@suwatte/daisuke"
import { getApiKey, getHost, getSeries } from "../api"
import {
  ChapterDto,
  RecentlyAddedItemDto,
  SeriesDto,
  SeriesMetadataDto,
  UserReadingProfileDto,
  VolumeDto,
} from "../types"
import { Sort } from "./constants"
// import { BookDto, SeriesDto } from "../types";
// import { Sort } from "./constants";

export const convertSort = (val: string | undefined): Sort | undefined => {
  switch (val) {
    case "nameSort":
      return Sort.Name
    case "created":
      return Sort.DateAdded
    case "lastModifiedDate":
      return Sort.DateUpdated
    case "booksMetadata.releaseDate":
      return Sort.ReleaseDate
    case "booksCount":
      return Sort.BooksCount
    case "readProgress.readDate":
      return Sort.ReadDate
    case "metadata.numberSort":
      return Sort.Number
    default:
      return undefined
  }
}

/**
 * builds the sort query param using the key and its order
 */
export const buildSort = (key: Sort, asc: boolean | undefined) =>
  `${key},${asc ? "asc" : "desc"}`

/**
 * Generates a url using the user specified host
 */
export const genURL = async (url: string) => {
  return `${await getHost()}${url}`
}

export const seriesToHighlight = (
  series: SeriesDto,
  // seriesMetadata: SeriesMetadataDto,
  host: string,
  apiKey: string,
  asRequest: boolean
): Highlight => {
  const cover = `${host}/api/image/series-cover?seriesId=${series.id}&apiKey=${apiKey}`
  // const subtitle = `${seriesMetadata.totalCount} Chapter${
  //   seriesMetadata.totalCount != 1 ? "s" : ""
  // }`
  const title =
    series.name ?? series.originalName ?? series.localizedName ?? "Untitled"
  return {
    id: series.id?.toString() ?? "",
    title: title,
    // subtitle,
    cover,
    // ...(series.totalReads && series.totalReads > 0 && seriesMetadata.totalCount !== undefined && {
    //   badge: {
    //     color: "#0096FF",
    //     count: seriesMetadata.totalCount - (series.totalReads ?? 0),
    //   },
    // }),
    ...(asRequest && {
      link: {
        request: {
          configID: "series",
          page: 1,
          context: {
            seriesId: series.id,
          },
        },
      },
    }),
  }
}

export const chapterToHighlight = (
  chapter: ChapterDto,
  host: string,
  apiKey: string
): Highlight => {
  return {
    id: chapter.id?.toString() ?? "",
    title: chapter.titleName ?? "Untitled",
    subtitle: `${chapter.title} • ${chapter.pages} Pages`,
    cover: `${host}/api/Image/chapter-cover?chapterId=${chapter.id}&apiKey=${apiKey}`,
    acquisitionLink: `${host}/api/Download/chapter?chapterId=${chapter.id}`,
    streamable: true,
    // Badge if book has not been started
    ...(chapter.pagesRead < chapter.pages && {
      badge: {
        color: "#49c694",
      },
    }),
  }
}

// export const seriesToContinueChapter = async (
//   series: SeriesDto,
//   host: string
// ): Promise<ChapterDto> => {}

export const KavitaChapterToChapter = (
  chapter: ChapterDto,
  volumes: VolumeDto[],
  host: string,
  apiKey: string,
  index: number
): Chapter => {
  const pages: ChapterPage[] = []
  for (let page = 1; page <= (chapter.pages ?? 0); page++) {
    pages.push({
      url: `${host}/api/Reader/image?chapterId=${chapter.id}&page=${page}&apiKey=${apiKey}`,
    })
  }
  const volume = volumes.find((v) => v.id === chapter.volumeId)
  return {
    chapterId: chapter.id?.toString(),
    title: chapter.titleName ?? undefined,
    date: chapter.created ? new Date(chapter.created) : new Date(1970, 0, 1),
    number: chapter.sortOrder ?? 0,
    volume: volume ? volume.minNumber : undefined,
    index,
    webUrl: chapter.webLinks?.[0],
    thumbnail: `${host}/api/Image/chapter-cover?chapterId=${chapter.id}&apiKey=${apiKey}`,
    language: convertLanguage(chapter.language),
    data: {
      pages,
    },
  }
}

export const detailedSeriesToContent = async (
  series: SeriesDto,
  seriesMetadata: SeriesMetadataDto,
  readingProfile: UserReadingProfileDto
): Promise<Content> => {
  const host = await getHost()
  const apiKey = await getApiKey()
  const cover = `${host}/api/Image/series-cover?seriesId=${series.id}&apiKey=${apiKey}`

  const info: string[] = []
  if (series.pagesRead == series.pages) {
    info.push("Finished Reading")
  } else if (series.pagesRead == 0) {
    info.push("Not Started")
  } else if (series.pagesRead != 0) {
    info.push("Started Reading")
  }

  const properties: Property[] = []

  const creators: string[] = []
  
  const creatorFields = ['writers', 'coverArtists', 'pencillers', 'inkers', 'colorists', 'letterers', 'editors']
  
  creatorFields.forEach((field) => {
    const data = seriesMetadata[field as keyof SeriesMetadataDto] as any[]
    if (data && data.length > 0) {
      data.forEach((item) => {
        const name = item.name ?? ''
        if (name && !creators.includes(name)) {
          creators.push(name)
        }
      })
    }
  })

  const metadataFields = [
    { key: 'genres', title: 'Genres', prop: 'title' },
    { key: 'writers', title: 'Writers', prop: 'name' },
    { key: 'coverArtists', title: 'Cover Artists', prop: 'name' },
    { key: 'publishers', title: 'Publishers', prop: 'name' },
    { key: 'characters', title: 'Characters', prop: 'name' },
    { key: 'pencillers', title: 'Pencillers', prop: 'name' },
    { key: 'inkers', title: 'Inkers', prop: 'name' },
    { key: 'imprints', title: 'Imprints', prop: 'name' },
    { key: 'colorists', title: 'Colorists', prop: 'name' },
    { key: 'letterers', title: 'Letterers', prop: 'name' },
    { key: 'editors', title: 'Editors', prop: 'name' },
    { key: 'translators', title: 'Translators', prop: 'name' },
    { key: 'teams', title: 'Teams', prop: 'name' },
    { key: 'locations', title: 'Locations', prop: 'name' },
  ] as const

  metadataFields.forEach(({ key, title, prop }) => {
    const data = seriesMetadata[key as keyof SeriesMetadataDto] as any[]
    if (data && data.length > 0) {
      properties.push({
        id: key.replace(/([A-Z])/g, '-$1').toLowerCase(),
        title,
        tags: data.map((tag) => ({
          id: tag.id?.toString() ?? '',
          title: tag[prop] ?? '',
        })),
      })
    }
  })

  if (seriesMetadata.tags && seriesMetadata.tags.length > 0) {
    const groupedTags: { [key: string]: { id: string; title: string }[] } = {}

    seriesMetadata.tags.forEach((tag) => {
      const tagTitle = tag.title ?? ""
      if (tagTitle.includes(":")) {
        const [parent, child] = tagTitle.split(":", 2)
        if (!groupedTags[parent]) {
          groupedTags[parent] = []
        }
        groupedTags[parent].push({
          id: tag.id?.toString() ?? "",
          title: child.trim(),
        })
      } else {
        if (!groupedTags["tags"]) {
          groupedTags["tags"] = []
        }
        groupedTags["tags"].push({
          id: tag.id?.toString() ?? "",
          title: tagTitle,
        })
      }
    })

    Object.entries(groupedTags).forEach(([key, tags]) => {
      properties.push({
        id: key.toLowerCase().replace(/\s+/g, "-"),
        title: key === "tags" ? "Tags" : key,
        tags,
      })
    })
  }
  return {
    title: series.name ?? "Untitled",
    additionalTitles: [series.localizedName ?? ""],
    summary: seriesMetadata?.summary || undefined,
    cover,
    creators,
    status: convertStatus(seriesMetadata.publicationStatus),
    info,
    properties,
    recommendedPanelMode: convertReadingMode(readingProfile),
  }
}

export const recentlyAddedItemToSeries = async (
  item: RecentlyAddedItemDto
): Promise<SeriesDto> => {
  return await getSeries(item.seriesId.toString())
}

const convertStatus = (val: number | undefined) => {
  switch (val) {
    case 0:
      return PublicationStatus.ONGOING
    case 1:
      return PublicationStatus.HIATUS
    case 3:
      return PublicationStatus.CANCELLED
    case 2:
    case 4:
      return PublicationStatus.COMPLETED
    default:
      return undefined
  }
}

const convertReadingMode = (readingProfile: UserReadingProfileDto) => {
  if (readingProfile.readerMode === 0) {
    switch (readingProfile.readingDirection) {
      case 0:
        console.log("Returning Paged Comic")
        return ReadingMode.PAGED_COMIC
      case 1:
        console.log("Returning Paged Manga")
        return ReadingMode.PAGED_MANGA
    }
  }

  switch (readingProfile.readerMode) {
    case 1:
      return ReadingMode.PAGED_VERTICAL
    case 2:
      return ReadingMode.WEBTOON
  }

  return undefined
}

export const getSectionTitle = (id: string) => {
  switch (id) {
    case "on-deck":
      return "Keep Reading"
    case "recently-updated":
      return "Recently Updated Series"
    case "newly-added":
      return "Recently Added Series"
    default:
      return "Unknown Section"
  }
}

const convertLanguage = (lang: string | null | undefined) => {
  switch (lang) {
    case "en":
      return DefinedLanguages.ENGLISH
    case "jp":
      return DefinedLanguages.JAPANESE
    case "zh":
      return DefinedLanguages.CHINESE
    case "ko":
      return DefinedLanguages.KOREAN
    case "fr":
      return DefinedLanguages.FRENCH
    case "es":
      return DefinedLanguages.SPANISH
    case "pt":
      return DefinedLanguages.PORTUGUESE
    default:
      return DefinedLanguages.UNIVERSAL
  }
}
