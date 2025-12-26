import { PageLinkLabel, PageLinkProvider } from "@suwatte/daisuke"
import { getLibraries } from "../api/library"

export const KavitaPageProvider: PageLinkProvider = {
  async getLibraryPageLinks(): Promise<PageLinkLabel[]> {
    const library = await getLibraries()
    return library.map((lib) => ({
      title: lib.name ?? "Untitled",
      link: {
        request: {
          page: 1,
          configKey: "library",
          context: {
            libraryId: lib.id,
          },
        },
      },
    }))
  },

  async getBrowsePageLinks(): Promise<PageLinkLabel[]> {
    const library = await getLibraries()
    return [
      {
        title: "Home",
        link: {
          page: {
            id: "home",
          },
        },
      },
      ...library.map((lib) => ({
        title: lib.name ?? "Untitled",
        link: {
          page: {
            id: "library",
            context: {
              libraryId: lib.id,
            },
          },
        },
      })),
    ]
  },
}
