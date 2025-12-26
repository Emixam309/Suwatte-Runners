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
import { detailedSeriesToContent, KavitaChapterToChapter } from "../utils"
import { ChapterDto } from "../types"

type OmittedKeys = "info" | "getDirectory" | "getDirectoryConfig"
export const KavitaContentSource: Omit<ContentSource, OmittedKeys> = {
  getContent: async function (contentId: string): Promise<Content> {
    // * NOTE: `contentId` in our case will always refer to Series and not Books.
    const series = await getSeries(contentId)
    const seriesMetadata = await getSeriesMetadata(contentId)
    const readingProfile = await getSeriesReadingProfile(contentId)
    return detailedSeriesToContent(series, seriesMetadata, readingProfile)
  },
  getChapters: async function (contentId: string): Promise<Chapter[]> {
    const { chapters, volumes } = await getSeriesChapters(contentId)
    const host = await getHost()
    const apiKey = await getApiKey()
    const items: Chapter[] = (chapters ?? []).map((chapter, index) =>
      KavitaChapterToChapter(chapter, volumes ?? [], host, apiKey, index)
    )

    return items
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

    const pages: ChapterPage[] = []

    for (let page = 1; page <= (chapter.pages ?? 0); page++) {
      pages.push({
        url: `${host}/api/Reader/image?chapterId=${chapterId}&page=${page}&apiKey=${apiKey}`,
      })
    }
    return {
      pages,
    }
  },
}
