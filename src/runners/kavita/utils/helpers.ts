import {
  Chapter,
  ChapterData,
  ChapterPage,
  Content,
  ContentType,
  DefinedLanguages,
  Highlight,
  Property,
  Provider,
  PublicationStatus,
  ReadingMode,
  SortSelection,
} from "@suwatte/daisuke"
import {
  getApiKey,
  getHost,
  getSeries,
  getSeriesChapters,
  getSeriesContinuePoint,
  getSeriesMetadata,
  SeriesChaptersResult,
} from "../api"
import {
  ChapterDto,
  FilterStatementDto,
  GenreTagDto,
  RecentlyAddedItemDto,
  SeriesDto,
  SeriesMetadataDto,
  SortOptions,
  UserReadingProfileDto,
  VolumeDto,
} from "../types"
import {
  AgeRating,
  creatorFields,
  FilterField,
  FilterInput,
  genreMap,
  getAgeRatingTitle,
  metadataFields,
  Sort,
} from "./constants"
import { KavitaStore } from "../store"
// import { BookDto, SeriesDto } from "../types";
// import { Sort } from "./constants";

export const buildSort = (sort: SortSelection): SortOptions => {
  return {
    sortField: parseInt(sort.id) as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9,
    isAscending: sort.ascending ? true : false,
  }
}

export const buildFilterStatements = (
  filters: FilterInput
): FilterStatementDto[] => {
  const statements: FilterStatementDto[] = []

  // Process tags
  if (filters?.tags) {
    filters.tags.included.forEach((value) => {
      statements.push({
        field: FilterField.Tags,
        value,
        comparison: 0, // included
      })
    })
    filters.tags.excluded.forEach((value) => {
      statements.push({
        field: FilterField.Tags,
        value,
        comparison: 9, // excluded
      })
    })
  }

  // Process genres
  if (filters?.genres) {
    filters.genres.included.forEach((value) => {
      statements.push({
        field: FilterField.Genres,
        value,
        comparison: 0, // included
      })
    })
    filters?.genres.excluded.forEach((value) => {
      statements.push({
        field: FilterField.Genres,
        value,
        comparison: 9, // excluded
      })
    })
  }

  // Process languages
  if (filters?.languages && filters.languages.length > 0) {
    filters.languages.forEach((value) => {
      statements.push({
        field: FilterField.Languages,
        value,
        comparison: 0, // included
      })
    })
  }

  // Process peoples
  if (filters?.peoples) {
    const peopleArray = Array.isArray(filters.peoples)
      ? filters.peoples
      : [filters.peoples]
    peopleArray.forEach((value) => {
      statements.push({
        field: FilterField.Writers,
        value,
        comparison: 0, // included
      })
    })
  }

  return statements
}

export const buildTagFilterStatement = (
  tagId: string,
  propertyId: string
): FilterStatementDto => {
  const metadataField = metadataFields.find((field) => field.key === propertyId)

  return {
    field: metadataField?.field ?? FilterField.Tags,
    value: tagId,
    comparison: 0,
  }
}

/**
 * Generates a url using the user specified host
 */
export const genURL = async (url: string) => {
  return `${await getHost()}${url}`
}

const getSeriesSubtitle = (
  volumes: VolumeDto[],
  chapters: ChapterDto[]
): string => {
  const volumeCount = volumes.length
  const chapterCount = chapters?.length ?? 0

  const subtitleParts: string[] = []
  if (volumeCount > 0) {
    subtitleParts.push(`${volumeCount} Volume${volumeCount !== 1 ? "s" : ""}`)
  }
  if (chapterCount > 0) {
    subtitleParts.push(
      `${chapterCount} Chapter${chapterCount !== 1 ? "s" : ""}`
    )
  }
  return subtitleParts.join(" • ")
}

const getUnreadChapterCount = (chapters: ChapterDto[]) => {
  const unreadCount = chapters.filter(
    (chapter) => (chapter.pagesRead ?? 0) < (chapter.pages ?? 0)
  ).length
  const readCount = chapters.length - unreadCount
  return { unreadCount, readCount }
}

export const seriesToHighlight = async (
  series: SeriesDto,
  host: string,
  apiKey: string,
  asChapter: boolean = false
): Promise<Highlight> => {
  const { volumes, allVolumes } = await getSeriesChapters(series.id?.toString())
  const allChapters = allVolumes.flatMap((v) => v.chapters || [])

  const cover = await getCurrentVolumeSeriesCover(series, volumes, host, apiKey)

  const title =
    series.name ?? series.originalName ?? series.localizedName ?? "Untitled"
  let subtitle = ""
  if (asChapter) {
    const continuePointChapter = await getSeriesContinuePoint(
      series.id?.toString()
    )
    subtitle = continuePointChapter?.titleName ?? ""
  } else {
    subtitle = getSeriesSubtitle(volumes, allChapters)
  }
  const { unreadCount, readCount } = getUnreadChapterCount(allChapters)
  return {
    id: series.id?.toString(),
    title: title,
    subtitle: subtitle,
    cover,
    ...(readCount > 0 &&
      unreadCount > 0 && {
        badge: {
          color: "#4ac694",
          count: unreadCount,
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

const getCurrentVolumeSeriesCover = async (
  series: SeriesDto,
  volumes: VolumeDto[],
  host: string,
  apiKey: string,
  continuePoint?: ChapterDto
) => {
  let cover = `${host}/api/Image/series-cover?seriesId=${series.id}&apiKey=${apiKey}`
  const continuePointCover = await KavitaStore.continuePointCover()
  if (!continuePointCover) return cover
  const continuePointChapter =
    continuePoint ?? (await getSeriesContinuePoint(series.id?.toString() ?? ""))
  if (!continuePointChapter) return cover
  const isChapterAlreadyRead =
    continuePointChapter.pagesRead >= continuePointChapter.pages
  const allChapters = volumes.flatMap((v) => v.chapters || [])
  if (isChapterAlreadyRead && checkAllChaptersRead(allChapters)) {
    const seriesMetadata = await getSeriesMetadata(series.id?.toString() ?? "")
    if (seriesMetadata?.publicationStatus === PublicationStatus.COMPLETED) {
      return cover
    }
    const lastVolume = volumes[volumes.length - 1]
    cover = lastVolume?.id
      ? `${host}/api/Image/volume-cover?volumeId=${lastVolume.id}&apiKey=${apiKey}`
      : cover
  } else {
    const volumeId = continuePointChapter?.volumeId
    const volume =
      volumes.find((v) => v.id === volumeId) ?? volumes[volumes.length - 1]
    cover = volume?.id
      ? `${host}/api/Image/volume-cover?volumeId=${volume?.id}&apiKey=${apiKey}`
      : cover
  }

  return cover
}

const checkAllChaptersRead = (chapters: ChapterDto[]) => {
  return chapters.every(
    (chapter) => (chapter.pagesRead ?? 0) >= (chapter.pages ?? 0)
  )
}

export const getKavitaChapters = async (
  seriesId: string,
  volumesList?: SeriesChaptersResult
): Promise<Chapter[]> => {
  const { chaptersVolume, volumes, specialsVolume } =
    volumesList ?? (await getSeriesChapters(seriesId, true))
  const chapters = [
    ...volumes.flatMap((v) => v.chapters || []),
    ...(chaptersVolume?.chapters || []),
    ...(specialsVolume?.chapters || []),
  ].reverse()
  const host = await getHost()
  const apiKey = await getApiKey()
  return chapters.map((chapter, index) => {
    const pages = getChapterPages(chapter, host, apiKey)
    const volume = volumes.find((v) => v.id === chapter.volumeId)

    return {
      chapterId: chapter.id?.toString(),
      title:
        chapter.titleName ||
        (chapter.minNumber !== chapter.maxNumber ? chapter.title : undefined) ||
        undefined,
      date: chapter.releaseDate
        ? new Date(chapter.releaseDate)
        : chapter.created
        ? new Date(chapter.created)
        : new Date(),
      number:
        chapter.sortOrder === -100000
          ? volume?.minNumber ?? 0
          : chapter.sortOrder ?? 0,
      volume: volume ? volume.minNumber : undefined,
      index,
      webUrl: chapter.webLinks?.[0],
      thumbnail: `${host}/api/Image/chapter-cover?chapterId=${chapter.id}&apiKey=${apiKey}`,
      language: convertLanguage(chapter.language),
      data: {
        pages,
      },
    }
  })
}

export const getChapterPages = (
  chapter: ChapterDto,
  host: string,
  apiKey: string
): ChapterPage[] => {
  const pages: ChapterPage[] = []
  for (let page = 0; page < (chapter.pages ?? 0); page++) {
    pages.push({
      url: `${host}/api/Reader/image?chapterId=${chapter.id}&page=${page}&apiKey=${apiKey}`,
    })
  }
  return pages
}

export const volumeToChapter = (
  volume: VolumeDto,
  host: string,
  apiKey: string,
  index: number
): Chapter => {
  const chapter = volume.chapters![0]
  const pages = getChapterPages(chapter, host, apiKey)

  return {
    chapterId: chapter.id?.toString() ?? "",
    date: chapter.releaseDate
      ? new Date(chapter.releaseDate)
      : volume.created
      ? new Date(volume.created)
      : new Date(),
    number: volume.minNumber ?? 0,
    volume: volume.minNumber,
    index,
    thumbnail: `${host}/api/Image/volume-cover?volumeId=${volume.id}&apiKey=${apiKey}`,
    language: convertLanguage(chapter.language),
    data: {
      pages,
    },
  }
}

export const detailedSeriesToContent = async (
  series: SeriesDto,
  seriesMetadata: SeriesMetadataDto,
  seriesChapters: SeriesChaptersResult,
  readingProfile: UserReadingProfileDto
): Promise<Content> => {
  const host = await getHost()
  const apiKey = await getApiKey()
  const cover = await getCurrentVolumeSeriesCover(
    series,
    seriesChapters.volumes,
    host,
    apiKey
  )

  const info: string[] = []
  if (seriesMetadata.language) {
    const lang = new Intl.DisplayNames([], { type: "language" })
    info.push(lang.of(seriesMetadata.language) ?? "")
  }

  if (
    seriesMetadata.ageRating !== undefined &&
    seriesMetadata.ageRating !== AgeRating.Unknown
  )
    info.push(getAgeRatingTitle(seriesMetadata.ageRating))

  if (seriesMetadata.releaseYear)
    info.push(seriesMetadata.releaseYear?.toString())
  info.push(`${series.pages ?? 0} Page${series.pages === 1 ? "" : "s"}`)

  const properties: Property[] = []

  const creators: string[] = []

  creatorFields.forEach((field) => {
    const data = seriesMetadata[field as keyof SeriesMetadataDto] as any[]
    if (data && data.length > 0) {
      data.forEach((item) => {
        const name = item.name ?? ""
        if (name && !creators.includes(name)) {
          creators.push(name)
        }
      })
    }
  })

  metadataFields.forEach(({ key, title, prop }) => {
    const data = seriesMetadata[key as keyof SeriesMetadataDto] as any[]
    if (data && data.length > 0) {
      properties.push({
        id: key.replace(/([A-Z])/g, "-$1").toLowerCase(),
        title,
        tags: data.map((tag) => ({
          id: tag.id?.toString() ?? "",
          title: tag[prop] ?? "",
          nsfw: [12, 13, 14].includes(seriesMetadata.ageRating ?? 0),
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
  const additionalTitles: string[] = []
  if (series.localizedName && series.localizedName !== series.name) {
    additionalTitles.push(series.localizedName)
  }
  if (series.originalName && series.originalName !== series.name) {
    additionalTitles.push(series.originalName)
  }

  const chapters = await getKavitaChapters(
    series.id?.toString(),
    seriesChapters
  )

  return {
    title: series.name ?? "Untitled",
    additionalTitles,
    summary: seriesMetadata?.summary || undefined,
    cover,
    creators,
    contentType:
      (series?.libraryName ? genreMap[series.libraryName] : undefined) ??
      getContentTypeFromGenre(seriesMetadata.genres ?? []),
    status: convertStatus(seriesMetadata.publicationStatus),
    info,
    properties,
    recommendedPanelMode: convertReadingMode(readingProfile),
    chapters,
  }
}

export const getContentTypeFromGenre = (
  genres: GenreTagDto[]
): ContentType | undefined => {
  for (const genre of genres) {
    const contentType = genreMap[genre.title ?? ""]
    if (contentType) {
      return contentType
    }
  }
  return undefined
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
        return ReadingMode.PAGED_COMIC
      case 1:
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
