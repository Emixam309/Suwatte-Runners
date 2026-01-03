import { PageLinkLabel, PageLinkProvider } from "@suwatte/daisuke"
import { getLibraries, getSideNavInfo } from "../api/library"
import { getApiKey, getHost } from "../api"

export const KavitaPageProvider: PageLinkProvider = {
  async getLibraryPageLinks(): Promise<PageLinkLabel[]> {
    const library = await getLibraries()
    const host = await getHost()
    const apiKey = await getApiKey()

    return library.map((lib) => ({
      id: lib.id?.toString() ?? lib.name,
      title: lib.name ?? "Untitled",
      cover: lib.coverImage
        ? `${host}/api/image/library-cover?libraryId=${lib.id}&apiKey=${apiKey}`
        : undefined,
      link: {
        request: {
          page: 1,
          context: {
            libraryId: lib.id,
          },
        },
      },
    }))
  },

  async getBrowsePageLinks(): Promise<PageLinkLabel[]> {
    // const library = await getLibraries()
    const sideNavInfo = await getSideNavInfo()
    const host = await getHost()
    const apiKey = await getApiKey()

    return [
      {
        title: "Home",
        link: {
          page: {
            id: "home",
          },
        },
      },
      ...sideNavInfo.map(
        (nav) =>
          ({
            id: nav.libraryId?.toString() ?? nav.name,
            title: nav.name ?? "Untitled",
            cover: nav.library?.coverImage
              ? `${host}/api/image/library-cover?libraryId=${nav.libraryId}&apiKey=${apiKey}`
              : undefined,
            link: {
              request: {
                page: 1,
                context: {
                  libraryId: nav.libraryId,
                },
                configID: nav.libraryId ? nav.libraryId.toString() : undefined,
              },
            },
          }) as PageLinkLabel
      ),
    ]
  },
}

// const getPageLinkLabel = (nav): PageLinkLabel => {
//   switch (nav.name) {
//   }
// }