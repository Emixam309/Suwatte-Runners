import {
  CatalogRating,
  ContentSource,
  DirectoryConfig,
  DirectoryRequest,
  PagedResult,
  RunnerInfo,
  SourceConfig,
} from "@suwatte/daisuke";
import { KavitaContentSource } from "./impl/contentSource";
import { KavitaAuthentication } from "./impl/auth";
import { KavitaSetupProvider } from "./impl/setup";
import { KavitaDirectoryHandler } from "./impl/directoryHandler";
import { KavitaPageLinkResolver } from "./impl/pageLinkResolver";
import { KavitaPageProvider } from "./impl/pageLinkProvider";
import { KavitaChapterEvent } from "./impl/chapterEvent";


// Define
type Kavita = ContentSource;

// Info
const info: RunnerInfo = {
  id: "org.kavita",
  name: "Kavita",
  version: 0.01,
  minSupportedAppVersion: "6.0.0",
  thumbnail: "kavita.png",
  website: "https://www.kavitareader.com",
  supportedLanguages: ["UNIVERSAL"],
  rating: CatalogRating.SAFE,
};

// Config
const config: SourceConfig = {
  disableChapterDataCaching: false, // Refetch image list each time
  disableLibraryActions: false, // Disable being able to add to user library
  disableContentLinking: true,
  disableCustomThumbnails: true,
  disableLanguageFlags: true,
  disableMigrationDestination: true,
  disableTrackerLinking: true,
  disableUpdateChecks: true,
  allowsMultipleInstances: true,
  requiresAuthenticationToAccessContent: true,
};

export const Target: Kavita = {
  info,
  config,
  ...KavitaAuthentication,
  ...KavitaContentSource,
  ...KavitaSetupProvider,
  ...KavitaDirectoryHandler,
  // ...KavitaPageProvider,
  ...KavitaPageLinkResolver,
  ...KavitaChapterEvent,
};
