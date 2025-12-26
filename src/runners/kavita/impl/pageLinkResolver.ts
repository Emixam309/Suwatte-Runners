import {
  Generate,
  Highlight,
  PageLink,
  PageLinkResolver,
  PageSection,
  ResolvedPageSection,
  SectionStyle,
} from "@suwatte/daisuke"
import {
  getApiKey,
  getDashboardInfo as getDashboardSections,
  getHost,
  getLibrarySeries,
  getOnDeckSeries,
  getRecentlyAddedSeries,
  getRecentlyUpdatedSeries,
} from "../api"
import { getSectionTitle, seriesToHighlight } from "../utils"
import { KavitaStore } from "../store"

export const KavitaPageLinkResolver: PageLinkResolver = {
  getSectionsForPage: async function (link: PageLink): Promise<PageSection[]> {
    switch (link.id) {
      case "all":
      case "home":
      case "library": {
        return buildBrowseLibrarySections()
      }
    }

    throw new Error(`No Handler Providing sections for ${link.id}`)
  },
  resolvePageSection: function (
    link: PageLink,
    sectionID: string
  ): Promise<ResolvedPageSection> {
    switch (link.id) {
      case "all":
      case "home":
      case "library": {
        const libraryId =
          (link.context?.libraryId as string | undefined) ?? null
        return resolveLibrarySection(libraryId, sectionID)
      }
    }

    throw new Error(`No Handler Resolving ${link.id}`)
  },
}

// Library Sections
async function buildBrowseLibrarySections() {
  const sections: PageSection[] = []

  const dashboardSections = await getDashboardSections()

  for (const dashSection of dashboardSections) {
    sections.push({
      id: dashSection.name,
      title: getSectionTitle(dashSection.name),
      style: SectionStyle.DEFAULT,
    })
  }

  return sections
}

async function resolveLibrarySection(
  libraryId: string | null,
  sectionKey: string
) {
  let items: Highlight[] = []

  const host = await getHost()
  const apiKey = await getApiKey()

  const convertSeriesToItems = async (key: "new" | "updated") => {
    const openAsTitle = await KavitaStore.openSeriesAsTitle()

    const series = await getLibrarySeries(libraryId)

    const highlights: Highlight[] = (series ?? []).map((data) =>
      seriesToHighlight(data, host, apiKey, !openAsTitle)
    )
    return highlights
  }

  switch (sectionKey) {
    case "search_directory": {
      const highlights = [
        Generate<Highlight>({
          title: "All Books",
          cover: "",
          id: "all_books",
          link: {
            request: {
              page: 1,
              context: {
                isSeriesDirectory: false,
                libraryId,
              },
            },
          },
        }),

        Generate<Highlight>({
          title: "All Series",
          cover: "",
          id: "all_series",
          link: {
            request: {
              page: 1,
              context: {
                isSeriesDirectory: true,
                libraryId,
              },
            },
          },
        }),
      ]
      items = highlights
      break
    }
    // case "keep_reading": {
    //   const highlights = await getBooksForLibrary(
    //     libraryId,
    //     buildSort(Sort.ReadDate, false),
    //     { read_status: [ReadStatus.InProgress] }
    //   );
    //   items = highlights;
    //   break;
    // }
    case "on-deck": {
      const series = await getOnDeckSeries(libraryId)
      items = series.map((data) =>
        seriesToHighlight(data, host, apiKey, false)
      )
      break
    }
    case "recently-updated": {
      const series = await getRecentlyUpdatedSeries(libraryId)
      items = series.map((data) =>
        seriesToHighlight(data, host, apiKey, false)
      )
      break
    }
    case "newly-added": {
      const series = await getRecentlyAddedSeries(libraryId)
      items = series.map((data) =>
        seriesToHighlight(data, host, apiKey, false)
      )
      break
    }
  }

  return { items }
}
