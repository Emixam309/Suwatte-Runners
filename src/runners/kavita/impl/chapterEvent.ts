import { ChapterEventHandler } from "@suwatte/daisuke"
import { request } from "../api"
import { genURL } from "../utils"

export const KavitaChapterEvent: ChapterEventHandler = {
  onChaptersMarked: async function (
    seriesId: string,
    chapterIds: string[],
    completed: boolean
  ): Promise<void> {
    const promises = chapterIds.map((chapterId) => markAsRead(Number(seriesId), Number(chapterId), completed))
    const state = await Promise.allSettled(promises)

    const failing = state.filter((v) => v.status === "rejected").length

    if (failing) {
      console.error(`Failed to mark ${failing} Books`)
    }
  },

  onChapterRead: async function (seriesId: string, chapterId: string): Promise<void> {
    return markAsRead(Number(seriesId), Number(chapterId))
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

const markAsRead = async (seriesId:number , chapterId: number, completed = true) => {
  await request<any>({
    url: await genURL(`/api/Reader/progress`),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      seriesId: seriesId,
      chapterId: chapterId,
      pageNum: completed ? Infinity : -1,
    },
  })
}
