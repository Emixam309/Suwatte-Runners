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
      case "home":
        return buildHomeLibrarySections()
      case "library":
        return [
          {
            id: "all_series",
            title: "Series",
            style: SectionStyle.STANDARD_GRID,
          },
        ]
    }

    throw new Error(`No Handler Providing sections for ${link.id}`)
  },
  resolvePageSection: function (
    link: PageLink,
    sectionID: string
  ): Promise<ResolvedPageSection> {
    switch (link.id) {
      case "home": {
        const libraryId =
          (link.context?.libraryId as string | undefined) ?? null
        return resolveLibrarySection(libraryId, sectionID)
      }
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
async function buildHomeLibrarySections() {
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

  switch (sectionKey) {
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
      items = await Promise.all(series.map((data) => seriesToHighlight(data, host, apiKey, true)))
      break
    }
    case "recently-updated": {
      const series = await getRecentlyUpdatedSeries()
      items = await Promise.all(series.map((data) => seriesToHighlight(data, host, apiKey)))
      break
    }
    case "newly-added": {
      const series = await getRecentlyAddedSeries()
      items = await Promise.all(series.map((data) => seriesToHighlight(data, host, apiKey)))
      break
    }
  }

  return { items }
}
