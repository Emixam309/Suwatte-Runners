import {
  CatalogRating,
  ContentSource,
  RunnerInfo,
  SourceConfig,
} from "@suwatte/daisuke"
import { KavitaContentSource } from "./impl/contentSource"
import { KavitaAuthentication } from "./impl/auth"
import { KavitaSetupProvider } from "./impl/setup"
import { KavitaDirectoryHandler } from "./impl/directoryHandler"
import { KavitaPageLinkResolver } from "./impl/pageLinkResolver"
import { KavitaPageProvider } from "./impl/pageLinkProvider"
import { KavitaChapterEvent } from "./impl/chapterEvent"
import { KavitaProgressSyncHandler } from "./impl/progressSync"
import { KavitaPreferenceProvider } from "./impl/preference"
import { KavitaStore } from "./store"

// Define
type Kavita = ContentSource

// Info
const info: RunnerInfo = {
  id: "org.kavita",
  name: "Kavita",
  version: 0.2,
  minSupportedAppVersion: "6.0.0",
  thumbnail: "kavita.png",
  website: "https://www.kavitareader.com",
  supportedLanguages: ["UNIVERSAL"],
  rating: CatalogRating.SAFE,
}

// Config
const config: SourceConfig = {
  disableChapterDataCaching: false, // Refetch image list each time
  disableLibraryActions: false, // Disable being able to add to user library
  disableContentLinking: true,
  disableCustomThumbnails: true,
  disableMigrationDestination: true,
  disableTrackerLinking: true,
  disableUpdateChecks: true,
  allowsMultipleInstances: true,
}

export const Target: Kavita = {
  info,
  config,
  ...KavitaAuthentication,
  ...KavitaContentSource,
  ...KavitaSetupProvider,
  ...KavitaDirectoryHandler,
  ...KavitaPageProvider,
  ...KavitaPageLinkResolver,
  ...KavitaChapterEvent,
  ...KavitaProgressSyncHandler,
  ...KavitaPreferenceProvider,
}
