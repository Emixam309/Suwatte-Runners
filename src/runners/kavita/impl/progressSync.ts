import { ContentProgressState, ProgressSyncHandler } from "@suwatte/daisuke"
import { getSeriesChapters, getSeriesContinuePoint } from "../api"

export const KavitaProgressSyncHandler: ProgressSyncHandler = {
  getProgressState: async function (
    seriesId: string
  ): Promise<ContentProgressState> {
    const { allVolumes } = await getSeriesChapters(seriesId)
    const continuePointChapter = await getSeriesContinuePoint(seriesId)

    const readChapterIds: string[] = []

    for (const volume of allVolumes ?? []) {
      for (const chapter of volume.chapters ?? []) {
      if (chapter.pagesRead && chapter.pagesRead >= (chapter.pages ?? 0)) {
        readChapterIds.push(chapter.id.toString())
      }
      }
    }

    const readingProgressState = {
      readChapterIds,
      currentReadingState: {
        chapterId: continuePointChapter?.id.toString() ?? "",
        page: continuePointChapter?.pagesRead ?? 0,
        progress: continuePointChapter?.pagesRead
          ? Math.round(
              (continuePointChapter.pagesRead / continuePointChapter.pages) *
                100
            ) / 100
          : 0,
        readDate: continuePointChapter?.lastReadingProgress
          ? new Date(continuePointChapter.lastReadingProgress)
          : new Date(),
      },
    }

    return readingProgressState
  },
}
