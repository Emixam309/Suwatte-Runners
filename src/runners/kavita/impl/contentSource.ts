import {
  Chapter,
  ChapterData,
  ChapterPage,
  Content,
  ContentSource,
} from "@suwatte/daisuke"
import {
  getSeriesChapters,
  getHost,
  getSeries,
  getSeriesMetadata,
  getSeriesReadingProfile,
  request,
  getApiKey,
} from "../api"
import {
  detailedSeriesToContent,
  getChapterPages,
  getKavitaChapters,
  volumeToChapter,
} from "../utils"
import { ChapterDto, VolumeDto } from "../types"

type OmittedKeys = "info" | "getDirectory" | "getDirectoryConfig"
export const KavitaContentSource: Omit<ContentSource, OmittedKeys> = {
  getContent: async function (seriesId: string): Promise<Content> {
    const series = await getSeries(seriesId)
    const seriesMetadata = await getSeriesMetadata(seriesId)
    const readingProfile = await getSeriesReadingProfile(seriesId)
    const seriesChapters = await getSeriesChapters(seriesId)
    return detailedSeriesToContent(series, seriesMetadata, seriesChapters, readingProfile)
  },
  getChapters: async function (seriesId: string): Promise<Chapter[]> {
    return getKavitaChapters(seriesId)
  },
  getChapterData: async function (
    contentId: string,
    chapterId: string
  ): Promise<ChapterData> {
    const host = await getHost()
    const apiKey = await getApiKey()

    const chapter = await request<ChapterDto>({
      url: `${host}/api/Chapter`,
      params: {
        chapterId: chapterId,
      },
    })

    const pages = getChapterPages(chapter, host, apiKey)

    return {
      pages,
    }
  },
}
