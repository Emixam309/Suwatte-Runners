import { ChapterEventHandler } from "@suwatte/daisuke"
import { request } from "../api"
import { genURL } from "../utils"

export const KavitaChapterEvent: ChapterEventHandler = {
  onChaptersMarked: async function (
    seriesId: string,
    chapterIds: string[],
    completed: boolean
  ): Promise<void> {
    const chapterIdsNum = chapterIds.map((id) => Number(id))
    try {
      await markAsRead(Number(seriesId), chapterIdsNum, completed)
    } catch (error) {
      console.error(`Failed to mark ${chapterIds?.length ?? 0} chapters`)
    }
  },

  onChapterRead: async function (seriesId: string, chapterId: string): Promise<void> {
    return markAsRead(Number(seriesId), [Number(chapterId)], true)
  },

  async onPageRead(seriesId, chapterId, page) {
    return request<any>({
      url: await genURL(`/api/Reader/progress`),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        seriesId: Number(seriesId),
        chapterId: Number(chapterId),
        pageNum: page,
      },
    })
  },
}

const markAsRead = async (
  seriesId: number,
  chapterIds: number[],
  completed = true
) => {
  if (completed) {
    await request<any>({
      url: await genURL(`/api/Reader/mark-multiple-read`),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        seriesId,
        chapterIds,
      },
    })
  } else {
    await request<any>({
      url: await genURL(`/api/Reader/mark-multiple-unread`),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        seriesId,
        chapterIds,
      },
    })
  }
}
