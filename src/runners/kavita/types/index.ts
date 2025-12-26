/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface ALMediaTitle {
  englishTitle?: string | null;
  romajiTitle?: string | null;
  nativeTitle?: string | null;
  preferredTitle?: string | null;
}

export interface AgeRatingDto {
  /**
   * Represents Age Rating for content.
   * @format int32
   */
  value?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | -1;
  title: string | null;
}

export interface AgeRestrictionDto {
  /**
   * The maximum age rating a user has access to. -1 if not applicable
   * @format int32
   */
  ageRating:
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | -1;
  /** Are Unknowns explicitly allowed against age rating */
  includeUnknowns: boolean;
}

export interface AniListUpdateDto {
  token?: string | null;
}

/** Represents an annotation on a book */
export interface AnnotationDto {
  /** @format int32 */
  id?: number;
  /** Starting point of the Highlight */
  xPath: string | null;
  /** Ending point of the Highlight. Can be the same as API.DTOs.Reader.AnnotationDto.XPath */
  endingXPath?: string | null;
  /** The text selected. */
  selectedText?: string | null;
  /** Rich text Comment */
  comment?: string | null;
  commentHtml?: string | null;
  commentPlainText?: string | null;
  /** Title of the TOC Chapter within Epub (not Chapter Entity) */
  chapterTitle?: string | null;
  /** A calculated selection of the surrounding text. This does not update after creation. */
  context?: string | null;
  /**
   * The number of characters selected
   * @format int32
   */
  highlightCount?: number;
  containsSpoiler?: boolean;
  /** @format int32 */
  pageNumber?: number;
  /**
   * Selected Highlight Slot Index [0-4]
   * @format int32
   */
  selectedSlotIndex?: number;
  likes?: number[] | null;
  seriesName?: string | null;
  libraryName?: string | null;
  /** @format int32 */
  chapterId: number;
  /** @format int32 */
  volumeId: number;
  /** @format int32 */
  seriesId: number;
  /** @format int32 */
  libraryId: number;
  /** @format int32 */
  ownerUserId: number;
  ownerUsername?: string | null;
  /**
   * The age rating of the series this annotation is linked to
   * @format int32
   */
  ageRating?:
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | -1;
  /** @format date-time */
  createdUtc?: string;
  /** @format date-time */
  lastModifiedUtc?: string;
}

export interface AnnotationFilterStatementDto {
  /** @format int32 */
  comparison?:
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16;
  /** @format int32 */
  field?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  value?: string | null;
}

/** All Sorting Options for a query related to Annotation Entity */
export interface AnnotationSortOptions {
  /** @format int32 */
  sortField?: 1 | 2 | 3 | 4;
  isAscending?: boolean;
}

export interface AppUserCollectionDto {
  /** @format int32 */
  id?: number;
  title?: string | null;
  summary?: string | null;
  promoted?: boolean;
  /**
   * Represents Age Rating for content.
   * @format int32
   */
  ageRating?:
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | -1;
  /** This is used to tell the UI if it should request a Cover Image or not. If null or empty, it has not been set. */
  coverImage?: string | null;
  primaryColor?: string | null;
  secondaryColor?: string | null;
  coverImageLocked?: boolean;
  /**
   * Number of Series in the Collection
   * @format int32
   */
  itemCount?: number;
  /** Owner of the Collection */
  owner?: string | null;
  /**
   * Last time Kavita Synced the Collection with an upstream source (for non Kavita sourced collections)
   * @format date-time
   */
  lastSyncUtc?: string;
  /**
   * Who created/manages the list. Non-Kavita lists are not editable by the user, except to promote
   * @format int32
   */
  source?: 0 | 1 | 2 | 3 | 4;
  /** For Non-Kavita sourced collections, the url to sync from */
  sourceUrl?: string | null;
  /**
   * Total number of items as of the last sync. Not applicable for Kavita managed collections.
   * @format int32
   */
  totalSourceCount?: number;
  /**
   * A
   *  separated string of all missing series
   */
  missingSeriesFromSource?: string | null;
}

export interface AppUserOpdsPreferences {
  /** Embed Progress Indicator in Title */
  embedProgressIndicator?: boolean;
  /** Insert a "Continue From X" entry in OPDS fields to avoid finding your last reading point (Emulates Kavita's Continue button) */
  includeContinueFrom?: boolean;
}

export interface AppUserSocialPreferences {
  /** UI Site Global Setting: Should series reviews be shared with all users in the server */
  shareReviews?: boolean;
  /** UI Site Global Setting: Share your annotations with other users */
  shareAnnotations?: boolean;
  /** UI Site Global Setting: See other users' annotations while reading */
  viewOtherAnnotations?: boolean;
  /** UI Site Global Setting: For which libraries should social features be enabled */
  socialLibraries?: number[] | null;
  /**
   * UI Site Global Setting: Highest age rating for which social features are enabled
   * @format int32
   */
  socialMaxAgeRating?:
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | -1;
  /** UI Site Global Setting: Enable social features for unknown age ratings */
  socialIncludeUnknowns?: boolean;
  /** UI Site Global Setting: Enable sharing of Profile with other users */
  shareProfile?: boolean;
}

export interface AuthKeyDto {
  /** @format int32 */
  id?: number;
  /** Actual key */
  key: string | null;
  /** Name of the key */
  name: string | null;
  /** @format date-time */
  createdAtUtc?: string;
  /**
   * An Optional time which the Key expires
   * @format date-time
   */
  expiresAtUtc?: string | null;
  /** @format date-time */
  lastAccessedAt?: string | null;
  /**
   * Kavita will have a short-lived key
   * @format int32
   */
  provider?: 0 | 1;
}

export interface AuthorChapterDto {
  /** @format int32 */
  libraryId?: number;
  /** @format int32 */
  seriesId?: number;
  /** @format int32 */
  chapterId?: number;
  title?: string | null;
}

export interface AuthorityValidationDto {
  authority?: string | null;
}

export interface BookChapterItem {
  /** Name of the Chapter */
  title?: string | null;
  /** A part represents the id of the anchor so we can scroll to it. 01_values.xhtml#h_sVZPaxUSy/ */
  part?: string | null;
  /**
   * Page Number to load for the chapter
   * @format int32
   */
  page?: number;
  children?: BookChapterItem[] | null;
}

export interface BookInfoDto {
  bookTitle?: string | null;
  /** @format int32 */
  seriesId?: number;
  /** @format int32 */
  volumeId?: number;
  /**
   * Represents the format of the file
   * @format int32
   */
  seriesFormat?: 0 | 1 | 2 | 3 | 4;
  seriesName?: string | null;
  chapterNumber?: string | null;
  volumeNumber?: string | null;
  /** @format int32 */
  libraryId?: number;
  /** @format int32 */
  pages?: number;
  isSpecial?: boolean;
  chapterTitle?: string | null;
}

export interface BookmarkDto {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  page: number;
  /** @format int32 */
  volumeId: number;
  /** @format int32 */
  seriesId: number;
  /** @format int32 */
  chapterId: number;
  /**
   * Only applicable for Epubs
   * @format int32
   */
  imageOffset?: number;
  /** Only applicable for Epubs */
  xPath?: string | null;
  series?: SeriesDto;
  /** Not required, will be filled out at API before saving to the DB */
  chapterTitle?: string | null;
}

export interface BookmarkInfoDto {
  seriesName?: string | null;
  /**
   * Represents the format of the file
   * @format int32
   */
  seriesFormat?: 0 | 1 | 2 | 3 | 4;
  /** @format int32 */
  seriesId?: number;
  /** @format int32 */
  libraryId?: number;
  /** @format int32 */
  libraryType?: 0 | 1 | 2 | 3 | 4 | 5;
  /** @format int32 */
  pages?: number;
  /** List of all files with their inner archive structure maintained in filename and dimensions */
  pageDimensions?: FileDimensionDto[] | null;
  /** For Double Page reader, this will contain snap points to ensure the reader always resumes on correct page */
  doublePairs?: Record<string, number>;
}

export interface BookmarkSearchResultDto {
  /** @format int32 */
  libraryId?: number;
  /** @format int32 */
  volumeId?: number;
  /** @format int32 */
  seriesId?: number;
  /** @format int32 */
  chapterId?: number;
  seriesName?: string | null;
  localizedSeriesName?: string | null;
}

export interface BrowseAnnotationFilterDto {
  /**
   * Not used - For parity with Series Filter
   * @format int32
   */
  id?: number;
  /** Not used - For parity with Series Filter */
  name?: string | null;
  statements?: AnnotationFilterStatementDto[] | null;
  /** @format int32 */
  combination?: 0 | 1;
  /** All Sorting Options for a query related to Annotation Entity */
  sortOptions?: AnnotationSortOptions;
  /**
   * Limit the number of rows returned. Defaults to not applying a limit (aka 0)
   * @format int32
   */
  limitTo?: number;
}

export interface BrowseGenreDto {
  /** @format int32 */
  id?: number;
  title: string | null;
  /**
   * Number of Series this Entity is on
   * @format int32
   */
  seriesCount?: number;
  /**
   * Number of Chapters this Entity is on
   * @format int32
   */
  chapterCount?: number;
}

/** Used to browse writers and click in to see their series */
export interface BrowsePersonDto {
  /** @format int32 */
  id?: number;
  name: string | null;
  coverImageLocked?: boolean;
  primaryColor?: string | null;
  secondaryColor?: string | null;
  coverImage?: string | null;
  aliases?: string[] | null;
  description?: string | null;
  /** ASIN for person */
  asin?: string | null;
  /**
   * https://anilist.co/staff/{AniListId}/
   * @format int32
   */
  aniListId?: number;
  /**
   * https://myanimelist.net/people/{MalId}/
   * https://myanimelist.net/character/{MalId}/CharacterName
   * @format int64
   */
  malId?: number;
  /** https://hardcover.app/authors/{HardcoverId} */
  hardcoverId?: string | null;
  /** Web links derived from the various id of external websites */
  webLinks?: string[] | null;
  /** All roles as if returned by the /api/person/roles endpoint */
  roles?:
    | (1 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15)[]
    | null;
  /**
   * Number of Series this Person is the Writer for
   * @format int32
   */
  seriesCount?: number;
  /**
   * Number of Issues this Person is the Writer for
   * @format int32
   */
  chapterCount?: number;
}

export interface BrowsePersonFilterDto {
  /**
   * Not used - For parity with Series Filter
   * @format int32
   */
  id?: number;
  /** Not used - For parity with Series Filter */
  name?: string | null;
  statements?: PersonFilterStatementDto[] | null;
  /** @format int32 */
  combination?: 0 | 1;
  /** All Sorting Options for a query related to Person Entity */
  sortOptions?: PersonSortOptions;
  /**
   * Limit the number of rows returned. Defaults to not applying a limit (aka 0)
   * @format int32
   */
  limitTo?: number;
}

export interface BrowseTagDto {
  /** @format int32 */
  id?: number;
  title: string | null;
  /**
   * Number of Series this Entity is on
   * @format int32
   */
  seriesCount?: number;
  /**
   * Number of Chapters this Entity is on
   * @format int32
   */
  chapterCount?: number;
}

export interface BulkActionDto {
  ids?: number[] | null;
  force?: boolean | null;
}

export interface BulkRemoveBookmarkForSeriesDto {
  seriesIds?: number[] | null;
}

export interface BulkUpdateSideNavStreamVisibilityDto {
  ids: number[] | null;
  visibility: boolean;
}

export interface ChapterDetailPlusDto {
  /** @format float */
  rating?: number;
  hasBeenRated?: boolean;
  reviews?: UserReviewDto[] | null;
  ratings?: RatingDto[] | null;
}

/**
 * A Chapter is the lowest grouping of a reading medium. A Chapter contains a set of MangaFiles which represents the underlying
 * file (abstracted from type).
 */
export interface ChapterDto {
  /** @format int32 */
  id: number;
  range?: string | null;
  /** @deprecated */
  number?: string | null;
  /** @format float */
  minNumber?: number;
  /** @format float */
  maxNumber?: number;
  /** @format float */
  sortOrder?: number;
  /** @format int32 */
  pages: number;
  isSpecial?: boolean;
  title?: string | null;
  /** The files that represent this Chapter */
  files?: MangaFileDto[] | null;
  /**
   * Calculated at API time. Number of pages read for this Chapter for logged-in user.
   * @format int32
   */
  pagesRead: number;
  /**
   * Total number of complete reads
   * @format int32
   */
  totalReads?: number;
  /**
   * The last time a chapter was read by current authenticated user
   * @format date-time
   */
  lastReadingProgressUtc?: string;
  /**
   * The last time a chapter was read by current authenticated user
   * @format date-time
   */
  lastReadingProgress?: string;
  coverImageLocked?: boolean;
  /** @format int32 */
  volumeId?: number;
  /** @format date-time */
  createdUtc?: string;
  /** @format date-time */
  lastModifiedUtc?: string;
  /** @format date-time */
  created?: string;
  /** @format date-time */
  releaseDate?: string;
  titleName?: string | null;
  summary?: string | null;
  /**
   * Represents Age Rating for content.
   * @format int32
   */
  ageRating?:
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | -1;
  /** @format int64 */
  wordCount?: number;
  /** Formatted Volume title ie) Volume 2. */
  volumeTitle?: string | null;
  /** @format int32 */
  minHoursToRead?: number;
  /** @format int32 */
  maxHoursToRead?: number;
  /** @format float */
  avgHoursToRead?: number;
  webLinks?: string | null;
  isbn?: string | null;
  writers?: PersonDto[] | null;
  coverArtists?: PersonDto[] | null;
  publishers?: PersonDto[] | null;
  characters?: PersonDto[] | null;
  pencillers?: PersonDto[] | null;
  inkers?: PersonDto[] | null;
  imprints?: PersonDto[] | null;
  colorists?: PersonDto[] | null;
  letterers?: PersonDto[] | null;
  editors?: PersonDto[] | null;
  translators?: PersonDto[] | null;
  teams?: PersonDto[] | null;
  locations?: PersonDto[] | null;
  genres?: GenreTagDto[] | null;
  /** Collection of all Tags from underlying chapters for a Series */
  tags?: TagDto[] | null;
  /** @format int32 */
  publicationStatus?: 0 | 1 | 2 | 3 | 4;
  language?: string | null;
  /** @format int32 */
  count?: number;
  /** @format int32 */
  totalCount?: number;
  languageLocked?: boolean;
  summaryLocked?: boolean;
  ageRatingLocked?: boolean;
  publicationStatusLocked?: boolean;
  genresLocked?: boolean;
  tagsLocked?: boolean;
  writerLocked?: boolean;
  characterLocked?: boolean;
  coloristLocked?: boolean;
  editorLocked?: boolean;
  inkerLocked?: boolean;
  imprintLocked?: boolean;
  lettererLocked?: boolean;
  pencillerLocked?: boolean;
  publisherLocked?: boolean;
  translatorLocked?: boolean;
  teamLocked?: boolean;
  locationLocked?: boolean;
  coverArtistLocked?: boolean;
  releaseDateLocked?: boolean;
  titleNameLocked?: boolean;
  sortOrderLocked?: boolean;
  coverImage?: string | null;
  primaryColor?: string | null;
  secondaryColor?: string | null;
  /** @format int32 */
  format?: 0 | 1 | 2 | 3 | 4 | null;
}

/** Information about the Chapter for the Reader to render */
export interface ChapterInfoDto {
  /** The Chapter Number */
  chapterNumber?: string | null;
  /** The Volume Number */
  volumeNumber?: string | null;
  /**
   * Volume entity Id
   * @format int32
   */
  volumeId?: number;
  /** Series Name */
  seriesName?: string | null;
  /**
   * Series Format
   * @format int32
   */
  seriesFormat?: 0 | 1 | 2 | 3 | 4;
  /**
   * Series entity Id
   * @format int32
   */
  seriesId?: number;
  /**
   * Library entity Id
   * @format int32
   */
  libraryId?: number;
  /**
   * Library type
   * @format int32
   */
  libraryType?: 0 | 1 | 2 | 3 | 4 | 5;
  /** Chapter's title if set via ComicInfo.xml (Title field) */
  chapterTitle?: string | null;
  /**
   * Total Number of pages in this Chapter
   * @format int32
   */
  pages?: number;
  /** File name of the chapter */
  fileName?: string | null;
  /** If this is marked as a special in Kavita */
  isSpecial?: boolean;
  /** The subtitle to render on the reader */
  subtitle?: string | null;
  /** Series Title */
  title?: string | null;
  /**
   * Total pages for the series
   * @format int32
   */
  seriesTotalPages?: number;
  /**
   * Total pages read for the series
   * @format int32
   */
  seriesTotalPagesRead?: number;
  /** List of all files with their inner archive structure maintained in filename and dimensions */
  pageDimensions?: FileDimensionDto[] | null;
  /** For Double Page reader, this will contain snap points to ensure the reader always resumes on correct page */
  doublePairs?: Record<string, number>;
}

/** Exclusively metadata about a given chapter */
export interface ChapterMetadataDto {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  chapterId?: number;
  title?: string | null;
  writers?: PersonDto[] | null;
  coverArtists?: PersonDto[] | null;
  publishers?: PersonDto[] | null;
  characters?: PersonDto[] | null;
  pencillers?: PersonDto[] | null;
  inkers?: PersonDto[] | null;
  imprints?: PersonDto[] | null;
  colorists?: PersonDto[] | null;
  letterers?: PersonDto[] | null;
  editors?: PersonDto[] | null;
  translators?: PersonDto[] | null;
  teams?: PersonDto[] | null;
  locations?: PersonDto[] | null;
  genres?: GenreTagDto[] | null;
  /** Collection of all Tags from underlying chapters for a Series */
  tags?: TagDto[] | null;
  /**
   * Represents Age Rating for content.
   * @format int32
   */
  ageRating?:
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | -1;
  releaseDate?: string | null;
  /** @format int32 */
  publicationStatus?: 0 | 1 | 2 | 3 | 4;
  /** Summary for the Chapter/Issue */
  summary?: string | null;
  /** Language for the Chapter/Issue */
  language?: string | null;
  /**
   * Number in the TotalCount of issues
   * @format int32
   */
  count?: number;
  /**
   * Total number of issues for the series
   * @format int32
   */
  totalCount?: number;
  /**
   * Number of Words for this chapter. Only applies to Epub
   * @format int64
   */
  wordCount?: number;
}

export interface CheckForFilesInFolderRootsDto {
  roots?: string[] | null;
}

export interface ClientDeviceDto {
  /** @format int32 */
  id?: number;
  /** User-friendly name, defaults to generated name like "Chrome on Windows" */
  friendlyName?: string | null;
  currentClientInfo?: ClientInfoDto;
  /** @format date-time */
  firstSeenUtc?: string;
  /** @format date-time */
  lastSeenUtc?: string;
  ownerUsername?: string | null;
  /** @format int32 */
  ownerUserId?: number;
}

export interface ClientDeviceTypeStatCount {
  /** @format int32 */
  value?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  /** @format int64 */
  count?: number;
}

export interface ClientInfoDto {
  /** Raw User-Agent string from request header */
  userAgent?: string | null;
  /** Client IP address (respecting X-Forwarded-For if present) */
  ipAddress?: string | null;
  /**
   * How the user authenticated (JWT token vs API key)
   * @format int32
   */
  authType?: 0 | 1 | 2 | 3;
  /**
   * Parsed client type from User-Agent or custom Kavita header
   * Examples: Web App, OPDS Reader, KOReader, Tachiyomi, etc.
   * @format int32
   */
  clientType?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  /** Application version (from web app or mobile app) */
  appVersion?: string | null;
  /** Browser name (Chrome, Firefox, Safari, Edge) - Web clients only */
  browser?: string | null;
  /** Browser version - Web clients only */
  browserVersion?: string | null;
  /**
   * Platform/OS (Windows, macOS, Linux, iOS, Android)
   * @format int32
   */
  platform?: 0 | 1 | 2 | 3 | 4 | 5;
  /** Device type (Desktop, Mobile, Tablet) */
  deviceType?: string | null;
  /**
   * Screen width in pixels - Web clients only
   * @format int32
   */
  screenWidth?: number | null;
  /**
   * Screen height in pixels - Web clients only
   * @format int32
   */
  screenHeight?: number | null;
  /** Screen orientation (portrait, landscape) - Web clients only */
  orientation?: string | null;
}

export interface CollectionTagBulkAddDto {
  /**
   * Collection Tag Id
   * @format int32
   */
  collectionTagId?: number;
  collectionTagTitle?: string | null;
  /** Series Ids to add onto Collection Tag */
  seriesIds?: number[] | null;
}

/** A set of colors for the color scape system in the UI */
export interface ColorScapeDto {
  primary?: string | null;
  secondary?: string | null;
}

export interface ConfirmEmailDto {
  /** @minLength 1 */
  email: string;
  /** @minLength 1 */
  token: string;
  /**
   * @minLength 6
   * @maxLength 256
   */
  password: string;
  /** @minLength 1 */
  username: string;
}

export interface ConfirmEmailUpdateDto {
  /** @minLength 1 */
  email: string;
  /** @minLength 1 */
  token: string;
}

export interface ConfirmMigrationEmailDto {
  email?: string | null;
  token?: string | null;
}

export interface ConfirmPasswordResetDto {
  /** @minLength 1 */
  email: string;
  /** @minLength 1 */
  token: string;
  /**
   * @minLength 6
   * @maxLength 256
   */
  password: string;
}

export interface CopySettingsFromLibraryDto {
  /** @format int32 */
  sourceLibraryId?: number;
  targetLibraryIds?: number[] | null;
  /** Include copying over the type */
  includeType?: boolean;
}

export interface CreateEmailDeviceDto {
  /** @minLength 1 */
  name: string;
  /**
   * Platform of the device. If not know, defaults to "Custom"
   * @format int32
   */
  platform: 0 | 1 | 2 | 3;
  /** @minLength 1 */
  emailAddress: string;
}

export interface CreatePersonalToCDto {
  /** @format int32 */
  chapterId: number;
  /** @format int32 */
  volumeId: number;
  /** @format int32 */
  seriesId: number;
  /** @format int32 */
  libraryId: number;
  /** @format int32 */
  pageNumber: number;
  title: string | null;
  bookScrollId?: string | null;
  selectedText?: string | null;
}

export interface CreateReadingListDto {
  title?: string | null;
}

export interface DashboardStreamDto {
  /** @format int32 */
  id?: number;
  name: string;
  /** Is System Provided */
  isProvided?: boolean;
  /**
   * Sort Order on the Dashboard
   * @format int32
   */
  order?: number;
  /** If Not IsProvided, the appropriate smart filter */
  smartFilterEncoded?: string | null;
  /** @format int32 */
  smartFilterId?: number | null;
  /**
   * For system provided
   * @format int32
   */
  streamType?: 1 | 2 | 3 | 4 | 5;
  visible?: boolean;
}

export interface DateTimeStatCountWithFormat {
  /**
   * The day of the readings
   * @format date-time
   */
  value?: string;
  /**
   * Number of pages read
   * @format int64
   */
  count?: number;
  /**
   * Format of those files
   * @format int32
   */
  format?: 0 | 1 | 2 | 3 | 4;
}

export interface DayOfWeekStatCount {
  /** @format int32 */
  value?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  /** @format int64 */
  count?: number;
}

/** For requesting an encoded filter to be decoded */
export interface DecodeFilterDto {
  encodedFilter?: string | null;
}

export interface DeleteChaptersDto {
  chapterIds?: number[] | null;
}

export interface DeleteCollectionsDto {
  collectionIds: number[];
}

export interface DeleteReadingListsDto {
  readingListIds: number[];
}

export interface DeleteSeriesDto {
  seriesIds?: number[] | null;
}

export interface DeviceClientBreakdownDto {
  records?: ClientDeviceTypeStatCount[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface DirectoryDto {
  /** Name of the directory */
  name?: string | null;
  /** Full Directory Path */
  fullPath?: string | null;
}

export interface DownloadBookmarkDto {
  bookmarks: BookmarkDto[];
}

export interface DownloadableSiteThemeDto {
  /** Theme Name */
  name?: string | null;
  /** Url to download css file */
  cssUrl?: string | null;
  cssFile?: string | null;
  /** Url to preview image */
  previewUrls?: string[] | null;
  /** If Already downloaded */
  alreadyDownloaded?: boolean;
  /** Sha of the file */
  sha?: string | null;
  /** Path of the Folder the files reside in */
  path?: string | null;
  /** Author of the theme */
  author?: string | null;
  /** Last version tested against */
  lastCompatibleVersion?: string | null;
  /** If version compatible with version */
  isCompatible?: boolean;
  /** Small blurb about the Theme */
  description?: string | null;
}

/** A Device is an entity that can receive data from Kavita (kindle) */
export interface EmailDeviceDto {
  /**
   * The device Id
   * @format int32
   */
  id?: number;
  /**
   * A name given to this device
   * @example "Pixel 3a, John's Kindle"
   */
  name?: string | null;
  /** An email address associated with the device (ie Kindle). Will be used with Send to functionality */
  emailAddress?: string | null;
  /**
   * Platform (ie) Windows 10
   * @format int32
   */
  platform?: 0 | 1 | 2 | 3;
}

export interface EmailHistoryDto {
  /** @format int64 */
  id?: number;
  sent?: boolean;
  /** @format date-time */
  sendDate?: string;
  emailTemplate?: string | null;
  errorMessage?: string | null;
  toUserName?: string | null;
}

/** Represents if Test Email Service URL was successful or not and if any error occured */
export interface EmailTestResultDto {
  successful?: boolean;
  errorMessage?: string | null;
  emailAddress?: string | null;
}

export interface EpubFontDto {
  /** @format int32 */
  id?: number;
  name?: string | null;
  /** @format int32 */
  provider?: 1 | 2;
  fileName?: string | null;
}

/** Information about an individual issue/chapter/book from Kavita+ */
export interface ExternalChapterDto {
  title?: string | null;
  issueNumber?: string | null;
  /** @format double */
  criticRating?: number | null;
  /** @format double */
  userRating?: number | null;
  summary?: string | null;
  writers?: string[] | null;
  artists?: string[] | null;
  /** @format date-time */
  releaseDate?: string | null;
  publisher?: string | null;
  coverImageUrl?: string | null;
  issueUrl?: string | null;
  criticReviews?: UserReviewDto[] | null;
  userReviews?: UserReviewDto[] | null;
}

/** This is AniListSeries */
export interface ExternalSeriesDetailDto {
  name?: string | null;
  /** @format int32 */
  aniListId?: number | null;
  /** @format int64 */
  malId?: number | null;
  /** @format int32 */
  cbrId?: number | null;
  synonyms?: string[] | null;
  /**
   * Represents PlusMediaFormat
   * @format int32
   */
  plusMediaFormat?: 1 | 2 | 3 | 4 | 5;
  siteUrl?: string | null;
  coverUrl?: string | null;
  genres?: string[] | null;
  staff?: SeriesStaffDto[] | null;
  tags?: MetadataTagDto[] | null;
  summary?: string | null;
  /**
   * Misleading name but is the source of data (like a review coming from AniList)
   * @format int32
   */
  provider?: 0 | 1 | 2 | 3 | 4;
  /** @format date-time */
  startDate?: string | null;
  /** @format date-time */
  endDate?: string | null;
  /** @format int32 */
  averageScore?: number;
  /** @format int32 */
  chapters?: number;
  /** @format int32 */
  volumes?: number;
  relations?: SeriesRelationship[] | null;
  characters?: SeriesCharacter[] | null;
  publisher?: string | null;
  /** Only from CBR for API.Services.Plus.ScrobbleProvider.Cbr. Full metadata about issues */
  chapterDtos?: ExternalChapterDto[] | null;
}

export interface ExternalSeriesDto {
  name: string | null;
  coverUrl: string | null;
  url: string | null;
  summary?: string | null;
  /** @format int32 */
  aniListId?: number | null;
  /** @format int64 */
  malId?: number | null;
  /**
   * Misleading name but is the source of data (like a review coming from AniList)
   * @format int32
   */
  provider?: 0 | 1 | 2 | 3 | 4;
}

export interface ExternalSeriesMatchDto {
  /** This is AniListSeries */
  series?: ExternalSeriesDetailDto;
  /** @format float */
  matchRating?: number;
}

export interface ExternalSourceDto {
  /** @format int32 */
  id: number;
  name: string | null;
  host: string | null;
  apiKey: string | null;
}

/**
 * Decoupled from API.DTOs.KavitaPlus.Metadata.MetadataSettingsDto to allow reuse without requiring the full metadata settings in
 * API.DTOs.Settings.ImportFieldMappingsDto
 */
export interface FieldMappingsDto {
  /** Do not allow any Genre/Tag in this list to be written to Kavita */
  blacklist?: string[] | null;
  /** Only allow these Tags to be written to Kavita */
  whitelist?: string[] | null;
  /** Any Genres or Tags that if present, will trigger an Age Rating Override. Highest rating will be prioritized for matching. */
  ageRatingMappings?: Record<
    string,
    0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | -1
  >;
  /** A list of rules that allow mapping a genre/tag to another genre/tag */
  fieldMappings?: MetadataFieldMappingDto[] | null;
}

export interface FieldMappingsImportResultDto {
  success?: boolean;
  resultingMetadataSettings?: MetadataSettingsDto;
  /** Keys of the conflicting age ratings mappings */
  ageRatingConflicts?: string[] | null;
}

export interface FileDimensionDto {
  /** @format int32 */
  width?: number;
  /** @format int32 */
  height?: number;
  /** @format int32 */
  pageNumber?: number;
  /**
   * The filename of the cached file. If this was nested in a subfolder, the foldername will be appended with _
   * @example "chapter01_page01.png"
   */
  fileName?: string | null;
  isWide?: boolean;
}

export interface FileExtensionBreakdownDto {
  /**
   * Total bytes for all files
   * @format int64
   */
  totalFileSize?: number;
  fileBreakdown?: FileExtensionDto[] | null;
}

export interface FileExtensionDto {
  extension?: string | null;
  /**
   * Represents the format of the file
   * @format int32
   */
  format?: 0 | 1 | 2 | 3 | 4;
  /** @format int64 */
  totalSize?: number;
  /** @format int64 */
  totalFiles?: number;
}

export interface FilterDto {
  /** The type of Formats you want to be returned. An empty list will return all formats back */
  formats?: (0 | 1 | 2 | 3 | 4)[] | null;
  /** Represents the Reading Status. This is a flag and allows multiple statues */
  readStatus?: ReadStatus;
  /** A list of library ids to restrict search to. Defaults to all libraries by passing empty list */
  libraries?: number[] | null;
  /** A list of Genre ids to restrict search to. Defaults to all genres by passing an empty list */
  genres?: number[] | null;
  /** A list of Writers to restrict search to. Defaults to all Writers by passing an empty list */
  writers?: number[] | null;
  /** A list of Penciller ids to restrict search to. Defaults to all Pencillers by passing an empty list */
  penciller?: number[] | null;
  /** A list of Inker ids to restrict search to. Defaults to all Inkers by passing an empty list */
  inker?: number[] | null;
  /** A list of Colorist ids to restrict search to. Defaults to all Colorists by passing an empty list */
  colorist?: number[] | null;
  /** A list of Letterer ids to restrict search to. Defaults to all Letterers by passing an empty list */
  letterer?: number[] | null;
  /** A list of CoverArtist ids to restrict search to. Defaults to all CoverArtists by passing an empty list */
  coverArtist?: number[] | null;
  /** A list of Editor ids to restrict search to. Defaults to all Editors by passing an empty list */
  editor?: number[] | null;
  /** A list of Publisher ids to restrict search to. Defaults to all Publishers by passing an empty list */
  publisher?: number[] | null;
  /** A list of Character ids to restrict search to. Defaults to all Characters by passing an empty list */
  character?: number[] | null;
  /** A list of Translator ids to restrict search to. Defaults to all Translatorss by passing an empty list */
  translators?: number[] | null;
  /** A list of Collection Tag ids to restrict search to. Defaults to all Collection Tags by passing an empty list */
  collectionTags?: number[] | null;
  /** A list of Tag ids to restrict search to. Defaults to all Tags by passing an empty list */
  tags?: number[] | null;
  /**
   * Will return back everything with the rating and above
   * API.Entities.AppUserRating.Rating
   * @format int32
   */
  rating?: number;
  /** Sorting Options for a query */
  sortOptions?: SortOptions;
  /** Age Ratings. Empty list will return everything back */
  ageRating?:
    | (0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | -1)[]
    | null;
  /** Languages (ISO 639-1 code) to filter by. Empty list will return everything back */
  languages?: string[] | null;
  /** Publication statuses to filter by. Empty list will return everything back */
  publicationStatus?: (0 | 1 | 2 | 3 | 4)[] | null;
  /** An optional name string to filter by. Empty string will ignore. */
  seriesNameQuery?: string | null;
  /** Represents a range between two int/float/double */
  releaseYearRange?: Int32Range;
}

export interface FilterStatementDto {
  /** @format int32 */
  comparison?:
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16;
  /**
   * Represents the field which will dictate the value type and the Extension used for filtering
   * @format int32
   */
  field?:
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 18
    | 19
    | 20
    | 21
    | 22
    | 23
    | 24
    | 25
    | 26
    | 27
    | 28
    | 29
    | 30
    | 31
    | 32
    | 33;
  value?: string | null;
}

/** Metadata filtering for v2 API only */
export interface FilterV2Dto {
  /**
   * Not used in the UI.
   * @format int32
   */
  id?: number;
  /** The name of the filter */
  name?: string | null;
  statements?: FilterStatementDto[] | null;
  /** @format int32 */
  combination?: 0 | 1;
  /** Sorting Options for a query */
  sortOptions?: SortOptions;
  /**
   * Limit the number of rows returned. Defaults to not applying a limit (aka 0)
   * @format int32
   */
  limitTo?: number;
}

/** A full progress Record from the DB (not all data, only what's needed for API) */
export interface FullProgressDto {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  chapterId?: number;
  /** @format int32 */
  pagesRead?: number;
  /** @format date-time */
  lastModified?: string;
  /** @format date-time */
  lastModifiedUtc?: string;
  /** @format date-time */
  created?: string;
  /** @format date-time */
  createdUtc?: string;
  /** @format int32 */
  appUserId?: number;
  userName?: string | null;
}

export interface GenreTagDto {
  /** @format int32 */
  id?: number;
  title: string | null;
}

export interface GenreTagDtoStatCount {
  value?: GenreTagDto;
  /** @format int64 */
  count?: number;
}

export interface HighlightSlot {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  slotNumber?: number;
  color?: RgbaColor;
}

/** A range of time to read a selection (series, chapter, etc) */
export interface HourEstimateRangeDto {
  /**
   * Min hours to read the selection
   * @format int32
   */
  minHours?: number;
  /**
   * Max hours to read the selection
   * @format int32
   */
  maxHours?: number;
  /**
   * Estimated average hours to read the selection
   * @format float
   */
  avgHours?: number;
}

export interface ImportFieldMappingsDto {
  settings?: ImportSettingsDto;
  /**
   * Decoupled from API.DTOs.KavitaPlus.Metadata.MetadataSettingsDto to allow reuse without requiring the full metadata settings in
   * API.DTOs.Settings.ImportFieldMappingsDto
   */
  data?: FieldMappingsDto;
}

export interface ImportSettingsDto {
  /**
   * How Kavita should import the new settings
   * @format int32
   */
  importMode?: 0 | 1;
  /**
   * Default conflict resolution, override with API.DTOs.ImportSettingsDto.AgeRatingConflictResolutions and !:FieldMappingsConflictResolutions
   * @format int32
   */
  resolution?: 0 | 1 | 2;
  /** Import !:MetadataSettingsDto.Whitelist */
  whitelist?: boolean;
  /** Import !:MetadataSettingsDto.Blacklist */
  blacklist?: boolean;
  /** Import !:MetadataSettingsDto.AgeRatingMappings */
  ageRatings?: boolean;
  /** Import !:MetadataSettingsDto.FieldMappings */
  fieldMappings?: boolean;
  /** Override the API.DTOs.ImportSettingsDto.Resolution for specific age ratings */
  ageRatingConflictResolutions?: Record<string, 0 | 1 | 2>;
}

/** Represents a range between two int/float/double */
export interface Int32Range {
  /** @format int32 */
  min?: number;
  /** @format int32 */
  max?: number;
}

export interface Int32StatCount {
  /** @format int32 */
  value?: number;
  /** @format int64 */
  count?: number;
}

export interface InviteUserDto {
  /** @minLength 1 */
  email: string;
  /**
   * List of Roles to assign to user. If admin not present, Pleb will be applied.
   * If admin present, all libraries will be granted access and will ignore those from DTO.
   */
  roles?: string[] | null;
  /** A list of libraries to grant access to */
  libraries?: number[] | null;
  ageRestriction?: AgeRestrictionDto;
}

export interface InviteUserResponse {
  /** Email link used to setup the user account */
  emailLink?: string | null;
  /** Was an email sent (ie is this server accessible) */
  emailSent?: boolean;
  /** When a user has an invalid email and is attempting to perform a flow. */
  invalidEmail?: boolean;
}

export interface JobDto {
  /** Job Id */
  id?: string | null;
  /** Human Readable title for the Job */
  title?: string | null;
  /**
   * When the job was created
   * @format date-time
   */
  createdAtUtc?: string | null;
  /**
   * Last time the job was run
   * @format date-time
   */
  lastExecutionUtc?: string | null;
  cron?: string | null;
}

/** Represents an individual button in a Jump Bar */
export interface JumpKeyDto {
  /**
   * Number of items in this Key
   * @format int32
   */
  size?: number;
  /** Code to use in URL (url encoded) */
  key?: string | null;
  /** What is visible to user */
  title?: string | null;
}

export interface KavitaLocale {
  fileName?: string | null;
  renderName?: string | null;
  /** @format float */
  translationCompletion?: number;
  isRtL?: boolean;
  hash?: string | null;
}

export interface KeyBind {
  key?: string | null;
  control?: boolean;
  shift?: boolean;
  meta?: boolean;
  alt?: boolean;
  controllerSequence?: string[] | null;
}

/**
 * This is the interface for receiving and sending updates to Koreader. The only fields
 * that are actually used are the Document and Progress fields.
 */
export interface KoreaderBookDto {
  /** This is the Koreader hash of the book. It is used to identify the book. */
  document?: string | null;
  /** A randomly generated id from the koreader device. Only used to maintain the Koreader interface. */
  device_id?: string | null;
  /** The Koreader device name. Only used to maintain the Koreader interface. */
  device?: string | null;
  /**
   * Percent progress of the book. Only used to maintain the Koreader interface.
   * @format float
   */
  percentage?: number;
  /**
   * An XPath string read by Koreader to determine the location within the epub.
   * Essentially, it is Koreader's equivalent to ProgressDto.BookScrollId.
   */
  progress?: string | null;
  /**
   * Last Progress in Unix seconds since epoch
   * @format int64
   */
  timestamp?: number;
}

export interface KoreaderProgressUpdateDto {
  /** This is the Koreader hash of the book. It is used to identify the book. */
  document?: string | null;
  /**
   * UTC Timestamp to return to KOReader
   * @format date-time
   */
  timestamp?: string;
}

export interface LanguageDto {
  isoCode: string | null;
  title: string | null;
}

export interface LibraryDto {
  /** @format int32 */
  id: number;
  name: string | null;
  /**
   * Last time Library was scanned
   * @format date-time
   */
  lastScanned?: string;
  /** @format int32 */
  type?: 0 | 1 | 2 | 3 | 4 | 5;
  /** An optional Cover Image or null */
  coverImage?: string | null;
  /** If Folder Watching is enabled for this library */
  folderWatching?: boolean;
  /** Include Library series on Dashboard Streams */
  includeInDashboard?: boolean;
  /** Include Library series on Recommended Streams */
  includeInRecommended?: boolean;
  /** Should this library create and manage collections from Metadata */
  manageCollections?: boolean;
  /** Should this library create and manage reading lists from Metadata */
  manageReadingLists?: boolean;
  /** Include library series in Search */
  includeInSearch?: boolean;
  /** Should this library allow Scrobble events to emit from it */
  allowScrobbling?: boolean;
  folders?: string[] | null;
  /** When showing series, only parent series or series with no relationships will be returned */
  collapseSeriesRelationships?: boolean;
  /** The types of file type groups the library will scan for */
  libraryFileTypes?: (1 | 2 | 3 | 4)[] | null;
  /** A set of globs that will exclude matching content from being scanned */
  excludePatterns?: string[] | null;
  /** Allow any series within this Library to download metadata. */
  allowMetadataMatching?: boolean;
  /** Allow Kavita to read metadata (ComicInfo.xml, Epub, PDF) */
  enableMetadata?: boolean;
  /** Should Kavita remove sort articles "The" for the sort name */
  removePrefixForSortName?: boolean;
  inheritWebLinksFromFirstChapter?: boolean;
  defaultLanguage?: string | null;
}

export interface LibraryDtoStatCount {
  value?: LibraryDto;
  /** @format int64 */
  count?: number;
}

export interface LicenseInfoDto {
  /**
   * If cancelled, will represent cancellation date. If not, will represent repayment date
   * @format date-time
   */
  expirationDate?: string;
  /** If cancelled or not */
  isActive?: boolean;
  /** If will be or is cancelled */
  isCancelled?: boolean;
  /** Is the installed version valid for Kavita+ (aka within 3 releases) */
  isValidVersion?: boolean;
  /** The email on file */
  registeredEmail?: string | null;
  /**
   * Number of months user has been subscribed
   * @format int32
   */
  totalMonthsSubbed?: number;
  /** A license is stored within Kavita */
  hasLicense?: boolean;
  /** InstallId which can be given to support */
  installId?: string | null;
}

export interface LoginDto {
  username?: string | null;
  password?: string | null;
  /** If ApiKey is passed, will ignore username/password for validation */
  apiKey?: string | null;
}

/** Represents an Interest Stack from MAL */
export interface MalStackDto {
  title: string | null;
  /** @format int64 */
  stackId: number;
  url: string | null;
  author: string | null;
  /** @format int32 */
  seriesCount: number;
  /** @format int32 */
  restackCount: number;
  /**
   * If an existing collection exists within Kavita
   * @format int32
   */
  existingId?: number;
}

/** Information about a User's MAL connection */
export interface MalUserInfoDto {
  username: string | null;
  /** This is actually the Client Id */
  accessToken: string | null;
}

export interface ManageMatchFilterDto {
  /**
   * Represents an option in the UI layer for Filtering
   * @format int32
   */
  matchStateOption?: 0 | 1 | 2 | 3 | 4;
  /**
   * Library Type in int form. -1 indicates to ignore the field.
   * @format int32
   */
  libraryType?: number;
  searchTerm?: string | null;
}

export interface ManageMatchSeriesDto {
  series?: SeriesDto;
  isMatched?: boolean;
  /** @format date-time */
  validUntilUtc?: string;
}

export interface MangaFileDto {
  /** @format int32 */
  id?: number;
  /** Absolute path to the archive file (normalized) */
  filePath?: string | null;
  /**
   * Number of pages for the given file
   * @format int32
   */
  pages?: number;
  /**
   * How many bytes make up this file
   * @format int64
   */
  bytes?: number;
  /**
   * Represents the format of the file
   * @format int32
   */
  format?: 0 | 1 | 2 | 3 | 4;
  /** @format date-time */
  created?: string;
  /** File extension */
  extension?: string | null;
}

export interface MangaFormatStatCount {
  /**
   * Represents the format of the file
   * @format int32
   */
  value?: 0 | 1 | 2 | 3 | 4;
  /** @format int64 */
  count?: number;
}

export interface MarkMultipleSeriesAsReadDto {
  seriesIds?: number[] | null;
}

export interface MarkReadDto {
  /** @format int32 */
  seriesId?: number;
}

export interface MarkVolumeReadDto {
  /** @format int32 */
  seriesId?: number;
  /** @format int32 */
  volumeId?: number;
}

/** This is used for bulk updating a set of volume and or chapters in one go */
export interface MarkVolumesReadDto {
  /** @format int32 */
  seriesId?: number;
  /** A list of Volumes to mark read */
  volumeIds?: number[] | null;
  /** A list of additional Chapters to mark as read */
  chapterIds?: number[] | null;
}

/** Used for matching a series with Kavita+ for metadata and scrobbling */
export interface MatchSeriesDto {
  /** When set, Kavita will stop attempting to match this series and will not perform any scrobbling */
  dontMatch?: boolean;
  /**
   * Series Id to pull internal metadata from to improve matching
   * @format int32
   */
  seriesId?: number;
  /** Free form text to query for. Can be a url and ids will be parsed from it */
  query?: string | null;
}

export interface MediaErrorDto {
  /** Format Type (RAR, ZIP, 7Zip, Epub, PDF) */
  extension: string | null;
  /** Full Filepath to the file that has some issue */
  filePath: string | null;
  /** Developer defined string */
  comment?: string | null;
  /** Exception message */
  details?: string | null;
  /** @format date-time */
  createdUtc?: string;
}

/** Represents a member of a Kavita server. */
export interface MemberDto {
  /** @format int32 */
  id?: number;
  username?: string | null;
  email?: string | null;
  /** If the member is still pending or not */
  isPending?: boolean;
  ageRestriction?: AgeRestrictionDto;
  /** @format date-time */
  created?: string;
  /** @format date-time */
  createdUtc?: string;
  /** @format date-time */
  lastActive?: string;
  /** @format date-time */
  lastActiveUtc?: string;
  libraries?: LibraryDto[] | null;
  roles?: string[] | null;
  /**
   * Who provides the identity of the user
   * @format int32
   */
  identityProvider?: 0 | 1;
}

export interface MemberInfoDto {
  /** @format int32 */
  id?: number;
  username?: string | null;
  /** @format date-time */
  created?: string;
  /** @format date-time */
  createdUtc?: string;
  coverImage?: string | null;
}

export interface MetadataFieldMappingDto {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  sourceType?: 0 | 1;
  /** @format int32 */
  destinationType?: 0 | 1;
  /** The string in the source */
  sourceValue?: string | null;
  /** Write the string as this in the Destination (can also just be the Source) */
  destinationValue?: string | null;
  /** If true, the tag will be Moved over vs Copied over */
  excludeFromSource?: boolean;
}

export interface MetadataSettingsDto {
  /** Do not allow any Genre/Tag in this list to be written to Kavita */
  blacklist?: string[] | null;
  /** Only allow these Tags to be written to Kavita */
  whitelist?: string[] | null;
  /** Any Genres or Tags that if present, will trigger an Age Rating Override. Highest rating will be prioritized for matching. */
  ageRatingMappings?: Record<
    string,
    0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | -1
  >;
  /** A list of rules that allow mapping a genre/tag to another genre/tag */
  fieldMappings?: MetadataFieldMappingDto[] | null;
  /** If writing any sort of metadata from upstream (AniList, Hardcover) source is allowed */
  enabled?: boolean;
  /** Enable processing of metadata outside K+; e.g. disk and API */
  enableExtendedMetadataProcessing?: boolean;
  /** Allow the Summary to be written */
  enableSummary?: boolean;
  /** Allow Publication status to be derived and updated */
  enablePublicationStatus?: boolean;
  /** Allow Relationships between series to be set */
  enableRelationships?: boolean;
  /** Allow People to be created (including downloading images) */
  enablePeople?: boolean;
  /** Allow Start date to be set within the Series */
  enableStartDate?: boolean;
  /** Allow setting the Localized name */
  enableLocalizedName?: boolean;
  /** Allow setting the cover image */
  enableCoverImage?: boolean;
  /** Allow Summary to be set within Chapter/Issue */
  enableChapterSummary?: boolean;
  /** Allow Release Date to be set within Chapter/Issue */
  enableChapterReleaseDate?: boolean;
  /** Allow Title to be set within Chapter/Issue */
  enableChapterTitle?: boolean;
  /** Allow Publisher to be set within Chapter/Issue */
  enableChapterPublisher?: boolean;
  /** Allow setting the cover image for the Chapter/Issue */
  enableChapterCoverImage?: boolean;
  enableGenres?: boolean;
  enableTags?: boolean;
  /** For Authors and Writers, how should names be stored (Exclusively applied for AniList). This does not affect Character names. */
  firstLastPeopleNaming?: boolean;
  /** A list of overrides that will enable writing to locked fields */
  overrides?:
    | (1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14)[]
    | null;
  /** Which Roles to allow metadata downloading for */
  personRoles?:
    | (1 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15)[]
    | null;
}

export interface MetadataTagDto {
  name?: string | null;
  description?: string | null;
  /** @format int32 */
  rank?: number | null;
  isGeneralSpoiler?: boolean;
  isMediaSpoiler?: boolean;
  isAdult?: boolean;
}

export interface MostReadAuthorsDto {
  /** @format int32 */
  authorId?: number;
  authorName?: string | null;
  /** @format int32 */
  totalChaptersRead?: number;
  chapters?: AuthorChapterDto[] | null;
}

export interface NextExpectedChapterDto {
  /** @format float */
  chapterNumber?: number;
  /** @format float */
  volumeNumber?: number;
  /**
   * Null if not applicable
   * @format date-time
   */
  expectedDate?: string | null;
  /** The localized title to render on the card */
  title?: string | null;
}

/** All configuration regarding OIDC */
export interface OidcConfigDto {
  /** Automatically redirect to the Oidc login screen */
  autoLogin?: boolean;
  /** Disables password authentication for non-admin users */
  disablePasswordAuthentication?: boolean;
  /** Name of your provider, used to display on the login screen */
  providerName?: string | null;
  /** Optional OpenID Connect Authority URL. Not managed in DB. Managed in appsettings.json and synced to DB. */
  authority?: string | null;
  /** Optional OpenID Connect ClientId, defaults to kavita. Not managed in DB. Managed in appsettings.json and synced to DB. */
  clientId?: string | null;
  /** Optional OpenID Connect Secret. Not managed in DB. Managed in appsettings.json and synced to DB. */
  secret?: string | null;
  /** If true, auto creates a new account when someone logs in via OpenID Connect */
  provisionAccounts?: boolean;
  /** Require emails to be verified by the OpenID Connect provider when creating accounts on login */
  requireVerifiedEmail?: boolean;
  /** Overwrite Kavita roles, libraries and age rating with OpenIDConnect provided roles on log in. */
  syncUserSettings?: boolean;
  /** A prefix that all roles Kavita checks for during sync must have */
  rolesPrefix?: string | null;
  /** The JWT claim roles are mapped under, defaults to System.Security.Claims.ClaimTypes.Role */
  rolesClaim?: string | null;
  /** Custom scopes Kavita should request from your OIDC provider */
  customScopes?: string[] | null;
  defaultRoles?: string[] | null;
  defaultLibraries?: number[] | null;
  /**
   * Represents Age Rating for content.
   * @format int32
   */
  defaultAgeRestriction?:
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | -1;
  defaultIncludeUnknowns?: boolean;
  /** Returns true if the !:OidcPublicConfigDto.Authority has been set */
  enabled?: boolean;
}

export interface OidcPublicConfigDto {
  /** Automatically redirect to the Oidc login screen */
  autoLogin?: boolean;
  /** Disables password authentication for non-admin users */
  disablePasswordAuthentication?: boolean;
  /** Name of your provider, used to display on the login screen */
  providerName?: string | null;
  enabled?: boolean;
}

export interface PersonAliasCheckDto {
  /**
   * The person to check against
   * @format int32
   */
  personId: number;
  /**
   * The persons name in the form. In case it differs from the one in the database
   * @minLength 1
   */
  name: string;
  /**
   * The alias to check
   * @minLength 1
   */
  alias: string;
}

export interface PersonDto {
  /** @format int32 */
  id?: number;
  name: string | null;
  coverImageLocked?: boolean;
  primaryColor?: string | null;
  secondaryColor?: string | null;
  coverImage?: string | null;
  aliases?: string[] | null;
  description?: string | null;
  /** ASIN for person */
  asin?: string | null;
  /**
   * https://anilist.co/staff/{AniListId}/
   * @format int32
   */
  aniListId?: number;
  /**
   * https://myanimelist.net/people/{MalId}/
   * https://myanimelist.net/character/{MalId}/CharacterName
   * @format int64
   */
  malId?: number;
  /** https://hardcover.app/authors/{HardcoverId} */
  hardcoverId?: string | null;
  /** Web links derived from the various id of external websites */
  webLinks?: string[] | null;
  /** All roles as if returned by the /api/person/roles endpoint */
  roles?:
    | (1 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15)[]
    | null;
}

export interface PersonDtoStatCount {
  value?: PersonDto;
  /** @format int64 */
  count?: number;
}

export interface PersonFilterStatementDto {
  /** @format int32 */
  comparison?:
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16;
  /** @format int32 */
  field?: 1 | 2 | 3 | 4;
  value?: string | null;
}

export interface PersonMergeDto {
  /**
   * The id of the person being merged into
   * @format int32
   */
  destId: number;
  /**
   * The id of the person being merged. This person will be removed, and become an alias of API.DTOs.PersonMergeDto.DestId
   * @format int32
   */
  srcId: number;
}

/** All Sorting Options for a query related to Person Entity */
export interface PersonSortOptions {
  /** @format int32 */
  sortField?: 1 | 2 | 3;
  isAscending?: boolean;
}

export interface PersonalToCDto {
  /** @format int32 */
  id: number;
  /** @format int32 */
  chapterId: number;
  /**
   * The page to bookmark
   * @format int32
   */
  pageNumber: number;
  /** The title of the bookmark. Defaults to Page {PageNumber} if not set */
  title: string | null;
  /** For Book Reader, represents the nearest passed anchor on the screen that can be used to resume scroll point. If empty, the ToC point is the beginning of the page */
  bookScrollId?: string | null;
  /** Text of the bookmark */
  selectedText?: string | null;
  /** Title of the Chapter this PToC was created in */
  chapterTitle?: string | null;
}

export interface ProfileStatBarDto {
  /** @format int32 */
  booksRead?: number;
  /** @format int32 */
  comicsRead?: number;
  /** @format int32 */
  pagesRead?: number;
  /** @format int32 */
  wordsRead?: number;
  /** @format int32 */
  authorsRead?: number;
  /** @format int32 */
  reviews?: number;
  /** @format int32 */
  ratings?: number;
}

export interface ProgressDto {
  /** @format int32 */
  volumeId: number;
  /** @format int32 */
  chapterId: number;
  /** @format int32 */
  pageNum: number;
  /** @format int32 */
  seriesId: number;
  /** @format int32 */
  libraryId: number;
  /**
   * For EPUB reader, this can be an optional string of the id of a part marker, to help resume reading position
   * on pages that combine multiple "chapters".
   */
  bookScrollId?: string | null;
  /** @format date-time */
  lastModifiedUtc?: string;
}

export interface PromoteCollectionsDto {
  collectionIds?: number[] | null;
  promoted?: boolean;
}

export interface PromoteReadingListsDto {
  readingListIds?: number[] | null;
  promoted?: boolean;
}

export interface PublicationStatusStatCount {
  /** @format int32 */
  value?: 0 | 1 | 2 | 3 | 4;
  /** @format int64 */
  count?: number;
}

export interface RatingDto {
  /** @format int32 */
  averageScore?: number;
  /** @format int32 */
  favoriteCount?: number;
  /**
   * Misleading name but is the source of data (like a review coming from AniList)
   * @format int32
   */
  provider?: 0 | 1 | 2 | 3 | 4;
  /** @format int32 */
  authority?: 0 | 1;
  providerUrl?: string | null;
}

/** Represents a single User's reading event */
export interface ReadHistoryEvent {
  /** @format int32 */
  userId?: number;
  userName: string | null;
  /** @format int32 */
  libraryId?: number;
  /** @format int32 */
  seriesId?: number;
  seriesName: string | null;
  /** @format date-time */
  readDate?: string;
  /** @format date-time */
  readDateUtc?: string;
  /** @format int32 */
  chapterId?: number;
  /** @format float */
  chapterNumber: number;
}

/** Represents the Reading Status. This is a flag and allows multiple statues */
export interface ReadStatus {
  notRead?: boolean;
  inProgress?: boolean;
  read?: boolean;
}

export interface ReadTimeByHourDto {
  /** @format date-time */
  dataSince?: string;
  stats?: Int32StatCount[] | null;
}

export interface ReadingActivityDataDto {
  /** @format int32 */
  chapterId?: number;
  /** @format int32 */
  volumeId?: number;
  /** @format int32 */
  seriesId?: number;
  /** @format int32 */
  libraryId?: number;
  /** @format int32 */
  startPage?: number;
  /** @format int32 */
  endPage?: number;
  /** @format date-time */
  startTimeUtc?: string;
  /** @format date-time */
  endTimeUtc?: string | null;
  /** @format int32 */
  pagesRead?: number;
  /**
   * Only applicable for Book entries
   * @format int32
   */
  wordsRead?: number;
  /** @format int32 */
  totalPages?: number;
  /** @format int32 */
  totalWords?: number;
  libraryName?: string | null;
  seriesName?: string | null;
  chapterTitle?: string | null;
  clientInfo?: ClientInfoDto;
}

export interface ReadingActivityGraphEntryDto {
  /** @format date-time */
  date?: string;
  /** @format int32 */
  totalTimeReadingSeconds?: number;
  /** @format int32 */
  totalPages?: number;
  /** @format int32 */
  totalWords?: number;
  /** @format int32 */
  totalChaptersFullyRead?: number;
}

export interface ReadingListDto {
  /** @format int32 */
  id?: number;
  title?: string | null;
  summary?: string | null;
  /** Reading lists that are promoted are only done by admins */
  promoted?: boolean;
  coverImageLocked?: boolean;
  /** This is used to tell the UI if it should request a Cover Image or not. If null or empty, it has not been set. */
  coverImage?: string | null;
  primaryColor?: string | null;
  secondaryColor?: string | null;
  /**
   * Number of Items in the Reading List
   * @format int32
   */
  itemCount?: number;
  /**
   * Minimum Year the Reading List starts
   * @format int32
   */
  startingYear?: number;
  /**
   * Minimum Month the Reading List starts
   * @format int32
   */
  startingMonth?: number;
  /**
   * Maximum Year the Reading List starts
   * @format int32
   */
  endingYear?: number;
  /**
   * Maximum Month the Reading List starts
   * @format int32
   */
  endingMonth?: number;
  /**
   * The highest age rating from all Series within the reading list
   * @format int32
   */
  ageRating:
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | -1;
  /** Username of the User that owns (in the case of a promoted list) */
  ownerUserName?: string | null;
}

export interface ReadingListInfoDto {
  /**
   * Total Pages across all Reading List Items
   * @format int32
   */
  pages?: number;
  /**
   * Total Word count across all Reading List Items
   * @format int64
   */
  wordCount?: number;
  /** Are ALL Reading List Items epub */
  isAllEpub?: boolean;
  /** @format int32 */
  minHoursToRead?: number;
  /** @format int32 */
  maxHoursToRead?: number;
  /** @format float */
  avgHoursToRead?: number;
}

export interface ReadingListItemDto {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  order?: number;
  /** @format int32 */
  chapterId?: number;
  /** @format int32 */
  seriesId?: number;
  seriesName?: string | null;
  seriesSortName?: string | null;
  /**
   * Represents the format of the file
   * @format int32
   */
  seriesFormat?: 0 | 1 | 2 | 3 | 4;
  /** @format int32 */
  pagesRead?: number;
  /** @format int32 */
  pagesTotal?: number;
  chapterNumber?: string | null;
  volumeNumber?: string | null;
  chapterTitleName?: string | null;
  /** @format int32 */
  volumeId?: number;
  /** @format int32 */
  libraryId?: number;
  title?: string | null;
  /** @format int32 */
  libraryType?: 0 | 1 | 2 | 3 | 4 | 5;
  libraryName?: string | null;
  /**
   * Release Date from Chapter
   * @format date-time
   */
  releaseDate?: string | null;
  /**
   * Used internally only
   * @format int32
   */
  readingListId?: number;
  /**
   * The last time a reading list item (underlying chapter) was read by current authenticated user
   * @format date-time
   */
  lastReadingProgressUtc?: string | null;
  /**
   * File size of underlying item
   * @format int64
   */
  fileSize?: number;
  /** The chapter summary */
  summary?: string | null;
  isSpecial?: boolean;
}

export interface ReadingPaceDto {
  /** @format int32 */
  hoursRead?: number;
  /** @format int32 */
  pagesRead?: number;
  /** @format int32 */
  wordsRead?: number;
  /** @format int32 */
  booksRead?: number;
  /** @format int32 */
  comicsRead?: number;
  /** @format int32 */
  daysInRange?: number;
}

export interface ReadingSessionDto {
  /** @format int32 */
  id?: number;
  /** @format date-time */
  startTimeUtc?: string;
  /** @format date-time */
  endTimeUtc?: string | null;
  isActive?: boolean;
  activityData?: ReadingActivityDataDto[] | null;
  /** @format int32 */
  userId?: number;
  username?: string | null;
}

/** A mesh of data for Recently added volume/chapters */
export interface RecentlyAddedItemDto {
  seriesName?: string | null;
  /** @format int32 */
  seriesId: number;
  /** @format int32 */
  libraryId?: number;
  /** @format int32 */
  libraryType?: 0 | 1 | 2 | 3 | 4 | 5;
  /** This will automatically map to Volume X, Chapter Y, etc. */
  title?: string | null;
  /** @format date-time */
  created?: string;
  /**
   * Chapter Id if this is a chapter. Not guaranteed to be set.
   * @format int32
   */
  chapterId: number;
  /**
   * Volume Id if this is a chapter. Not guaranteed to be set.
   * @format int32
   */
  volumeId?: number;
  /**
   * This is used only on the UI. It is just index of being added.
   * @format int32
   */
  id?: number;
  /**
   * Represents the format of the file
   * @format int32
   */
  format?: 0 | 1 | 2 | 3 | 4;
}

export interface RecommendationDto {
  ownedSeries?: SeriesDto[] | null;
  externalSeries?: ExternalSeriesDto[] | null;
}

/** Used for running some task against a Series. */
export interface RefreshSeriesDto {
  /**
   * Library Id series belongs to
   * @format int32
   */
  libraryId?: number;
  /**
   * Series Id
   * @format int32
   */
  seriesId?: number;
  /** Should the task force opening/re-calculation. */
  forceUpdate?: boolean;
  /** Should the task force re-calculation of colorscape. */
  forceColorscape?: boolean;
}

export interface RegisterDto {
  /** @minLength 1 */
  username: string;
  /** An email to register with. Optional. Provides Forgot Password functionality */
  email?: string | null;
  /**
   * @minLength 6
   * @maxLength 256
   */
  password: string;
}

export interface RelatedSeriesDto {
  /**
   * The parent relationship Series
   * @format int32
   */
  sourceSeriesId?: number;
  sequels?: SeriesDto[] | null;
  prequels?: SeriesDto[] | null;
  spinOffs?: SeriesDto[] | null;
  adaptations?: SeriesDto[] | null;
  sideStories?: SeriesDto[] | null;
  characters?: SeriesDto[] | null;
  contains?: SeriesDto[] | null;
  others?: SeriesDto[] | null;
  alternativeSettings?: SeriesDto[] | null;
  alternativeVersions?: SeriesDto[] | null;
  doujinshis?: SeriesDto[] | null;
  parent?: SeriesDto[] | null;
  editions?: SeriesDto[] | null;
  annuals?: SeriesDto[] | null;
}

export interface RemoveBookmarkForSeriesDto {
  /** @format int32 */
  seriesId?: number;
}

export interface RereadChapterDto {
  /** @format int32 */
  libraryId?: number;
  /** @format int32 */
  seriesId?: number;
  /** @format int32 */
  volumeId?: number;
  /** @format int32 */
  chapterId?: number;
  label?: string | null;
  /** @format int32 */
  format?: 0 | 1 | 2 | 3 | 4 | null;
}

export interface RereadDto {
  /** Should the prompt be shown */
  shouldPrompt: boolean;
  /** If the prompt is triggered because of time, false when triggered because of fully read */
  timePrompt?: boolean;
  /** True if the entity is not atomic and will be fully reread on reread (I.e. rereading a series on volume) */
  fullReread?: boolean;
  /**
   * Days elapsed since API.DTOs.Reader.RereadDto.ChapterOnReread was last read
   * @format int32
   */
  daysSinceLastRead?: number;
  chapterOnContinue?: RereadChapterDto;
  chapterOnReread?: RereadChapterDto;
}

export interface ResetPasswordDto {
  /**
   * The Username of the User
   * @minLength 1
   */
  userName: string;
  /**
   * The new password
   * @minLength 6
   * @maxLength 256
   */
  password: string;
  /** The old, existing password. If an admin is performing the change, this is not required. Otherwise, it is. */
  oldPassword?: string | null;
}

export interface RgbaColor {
  /** @format int32 */
  r?: number;
  /** @format int32 */
  g?: number;
  /** @format int32 */
  b?: number;
  /** @format float */
  a?: number;
}

export interface RotateAuthKeyRequestDto {
  /**
   * @format int32
   * @min 8
   * @max 32
   */
  keyLength: number;
  /** @minLength 1 */
  name: string;
  expiresUtc?: string | null;
}

/** DTO for requesting a folder to be scanned */
export interface ScanFolderDto {
  /** Api key for a user with Admin permissions */
  apiKey?: string | null;
  /** Folder Path to Scan */
  folderPath?: string | null;
}

export interface ScrobbleErrorDto {
  /** Developer defined string */
  comment?: string | null;
  /** List of providers that could not */
  details?: string | null;
  /** @format int32 */
  seriesId?: number;
  /** @format int32 */
  libraryId?: number;
  /** @format date-time */
  created?: string;
}

export interface ScrobbleEventDto {
  /** @format int64 */
  id?: number;
  seriesName?: string | null;
  /** @format int32 */
  seriesId?: number;
  /** @format int32 */
  libraryId?: number;
  isProcessed?: boolean;
  /** @format float */
  volumeNumber?: number | null;
  /** @format int32 */
  chapterNumber?: number | null;
  /** @format date-time */
  lastModifiedUtc?: string;
  /** @format date-time */
  createdUtc?: string;
  /** @format float */
  rating?: number | null;
  /** @format int32 */
  scrobbleEventType?: 0 | 1 | 2 | 3 | 4;
  isErrored?: boolean;
  errorDetails?: string | null;
}

export interface ScrobbleEventFilter {
  /**
   * Which field to sort on
   * @format int32
   */
  field?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  /** If the sort should be a descending sort */
  isDescending?: boolean;
  /** A query to search against */
  query?: string | null;
  /** Include reviews in the result - Note: Review Scrobbling is disabled */
  includeReviews?: boolean;
}

export interface ScrobbleHoldDto {
  seriesName?: string | null;
  /** @format int32 */
  seriesId?: number;
  /** @format int32 */
  libraryId?: number;
  /** @format date-time */
  created?: string;
  /** @format date-time */
  createdUtc?: string;
}

export interface SearchResultDto {
  /** @format int32 */
  seriesId?: number;
  name?: string | null;
  originalName?: string | null;
  sortName?: string | null;
  localizedName?: string | null;
  /**
   * Represents the format of the file
   * @format int32
   */
  format?: 0 | 1 | 2 | 3 | 4;
  libraryName?: string | null;
  /** @format int32 */
  libraryId?: number;
}

/** Represents all Search results for a query */
export interface SearchResultGroupDto {
  libraries?: LibraryDto[] | null;
  series?: SearchResultDto[] | null;
  collections?: AppUserCollectionDto[] | null;
  readingLists?: ReadingListDto[] | null;
  persons?: PersonDto[] | null;
  genres?: GenreTagDto[] | null;
  tags?: TagDto[] | null;
  files?: MangaFileDto[] | null;
  chapters?: ChapterDto[] | null;
  bookmarks?: BookmarkSearchResultDto[] | null;
  annotations?: AnnotationDto[] | null;
}

export interface SendSeriesToEmailDeviceDto {
  /** @format int32 */
  deviceId?: number;
  /** @format int32 */
  seriesId?: number;
}

export interface SendToEmailDeviceDto {
  /** @format int32 */
  deviceId?: number;
  chapterIds?: number[] | null;
}

export interface SeriesByIdsDto {
  seriesIds?: number[] | null;
}

export interface SeriesCharacter {
  name?: string | null;
  description: string | null;
  url: string | null;
  imageUrl?: string | null;
  /** @format int32 */
  role?: 0 | 1 | 2;
}

/**
 * This is a special DTO for a UI page in Kavita. This performs sorting and grouping and returns exactly what UI requires for layout.
 * This is subject to change, do not rely on this Data model.
 */
export interface SeriesDetailDto {
  /** Specials for the Series. These will have their title and range cleaned to remove the special marker and prepare */
  specials?: ChapterDto[] | null;
  /** All Chapters, excluding Specials and single chapters (0 chapter) for a volume */
  chapters?: ChapterDto[] | null;
  /** Just the Volumes for the Series (Excludes Volume 0) */
  volumes?: VolumeDto[] | null;
  /** These are chapters that are in Volume 0 and should be read AFTER the volumes */
  storylineChapters?: ChapterDto[] | null;
  /**
   * How many chapters are unread
   * @format int32
   */
  unreadCount?: number;
  /**
   * How many chapters are there
   * @format int32
   */
  totalCount?: number;
}

/** All the data from Kavita+ for Series Detail */
export interface SeriesDetailPlusDto {
  recommendations?: RecommendationDto;
  reviews?: UserReviewDto[] | null;
  ratings?: RatingDto[] | null;
  /** This is AniListSeries */
  series?: ExternalSeriesDetailDto;
}

export interface SeriesDto {
  /** @format int32 */
  id?: number;
  name: string | null;
  originalName?: string | null;
  localizedName?: string | null;
  sortName?: string | null;
  /** @format int32 */
  pages: number;
  coverImageLocked?: boolean;
  /** @format date-time */
  lastChapterAdded?: string;
  /** @format date-time */
  lastChapterAddedUtc?: string;
  /**
   * Rating from logged-in user
   * @format float
   */
  userRating?: number;
  /** If the user has set the rating or not */
  hasUserRated?: boolean;
  /**
   * Min API.DTOs.ChapterDto.TotalReads across the series
   * @format int32
   */
  totalReads?: number;
  /**
   * Sum of pages read from linked Volumes. Calculated at API-time.
   * @format int32
   */
  pagesRead: number;
  /**
   * DateTime representing last time the series was Read. Calculated at API-time.
   * @format date-time
   */
  latestReadDate?: string;
  /**
   * Represents the format of the file
   * @format int32
   */
  format?: 0 | 1 | 2 | 3 | 4;
  /** @format date-time */
  created?: string;
  sortNameLocked?: boolean;
  localizedNameLocked?: boolean;
  /** @format int64 */
  wordCount?: number;
  /** @format int32 */
  libraryId?: number;
  libraryName?: string | null;
  /** @format int32 */
  minHoursToRead?: number;
  /** @format int32 */
  maxHoursToRead?: number;
  /** @format float */
  avgHoursToRead?: number;
  folderPath?: string | null;
  lowestFolderPath?: string | null;
  /** @format date-time */
  lastFolderScanned?: string;
  dontMatch?: boolean;
  isBlacklisted?: boolean;
  coverImage?: string | null;
  primaryColor?: string | null;
  secondaryColor?: string | null;
}

export interface SeriesDtoStatCount {
  value?: SeriesDto;
  /** @format int64 */
  count?: number;
}

export interface SeriesMetadataDto {
  /** @format int32 */
  id?: number;
  summary?: string | null;
  /** Genres for the Series */
  genres?: GenreTagDto[] | null;
  /** Collection of all Tags from underlying chapters for a Series */
  tags?: TagDto[] | null;
  writers?: PersonDto[] | null;
  coverArtists?: PersonDto[] | null;
  publishers?: PersonDto[] | null;
  characters?: PersonDto[] | null;
  pencillers?: PersonDto[] | null;
  inkers?: PersonDto[] | null;
  imprints?: PersonDto[] | null;
  colorists?: PersonDto[] | null;
  letterers?: PersonDto[] | null;
  editors?: PersonDto[] | null;
  translators?: PersonDto[] | null;
  teams?: PersonDto[] | null;
  locations?: PersonDto[] | null;
  /**
   * Highest Age Rating from all Chapters
   * @format int32
   */
  ageRating?:
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | -1;
  /**
   * Earliest Year from all chapters
   * @format int32
   */
  releaseYear?: number;
  /** Language of the content (BCP-47 code) */
  language?: string | null;
  /**
   * Max number of issues/volumes in the series (Max of Volume/Issue field in ComicInfo)
   * @format int32
   */
  maxCount?: number;
  /**
   * Total number of issues/volumes for the series
   * @format int32
   */
  totalCount?: number;
  /**
   * Publication status of the Series
   * @format int32
   */
  publicationStatus?: 0 | 1 | 2 | 3 | 4;
  /** A comma-separated list of Urls */
  webLinks?: string | null;
  languageLocked?: boolean;
  summaryLocked?: boolean;
  /** Locked by user so metadata updates from scan loop will not override AgeRating */
  ageRatingLocked?: boolean;
  /** Locked by user so metadata updates from scan loop will not override PublicationStatus */
  publicationStatusLocked?: boolean;
  genresLocked?: boolean;
  tagsLocked?: boolean;
  writerLocked?: boolean;
  characterLocked?: boolean;
  coloristLocked?: boolean;
  editorLocked?: boolean;
  inkerLocked?: boolean;
  imprintLocked?: boolean;
  lettererLocked?: boolean;
  pencillerLocked?: boolean;
  publisherLocked?: boolean;
  translatorLocked?: boolean;
  teamLocked?: boolean;
  locationLocked?: boolean;
  coverArtistLocked?: boolean;
  releaseYearLocked?: boolean;
  /** @format int32 */
  seriesId?: number;
}

export interface SeriesRelationship {
  /** @format int32 */
  aniListId?: number;
  /** @format int32 */
  malId?: number | null;
  seriesName?: ALMediaTitle;
  /**
   * Represents a relationship between Series
   * @format int32
   */
  relation?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14;
  /**
   * Misleading name but is the source of data (like a review coming from AniList)
   * @format int32
   */
  provider?: 0 | 1 | 2 | 3 | 4;
  /**
   * Represents PlusMediaFormat
   * @format int32
   */
  plusMediaFormat?: 1 | 2 | 3 | 4 | 5;
}

export interface SeriesStaffDto {
  name: string | null;
  firstName?: string | null;
  lastName?: string | null;
  url: string | null;
  role: string | null;
  imageUrl?: string | null;
  gender?: string | null;
  description?: string | null;
}

/** This is just for the Server tab on UI */
export interface ServerInfoSlimDto {
  /** Unique Id that represents a unique install */
  installId: string | null;
  /** If the Kavita install is using Docker */
  isDocker?: boolean;
  /** Version of Kavita */
  kavitaVersion: string | null;
  /**
   * The Date Kavita was first installed
   * @format date-time
   */
  firstInstallDate?: string | null;
  /** The Version of Kavita on the first run */
  firstInstallVersion?: string | null;
}

export interface ServerSettingDto {
  cacheDirectory?: string | null;
  taskScan?: string | null;
  taskBackup?: string | null;
  taskCleanup?: string | null;
  /** Logging level for server. Managed in appsettings.json. */
  loggingLevel?: string | null;
  /**
   * Port the server listens on. Managed in appsettings.json.
   * @format int32
   */
  port?: number;
  /** Comma separated list of ip addresses the server listens on. Managed in appsettings.json */
  ipAddresses?: string | null;
  /** Allows anonymous information to be collected and sent to KavitaStats */
  allowStatCollection?: boolean;
  /** Enables OPDS connections to be made to the server. */
  enableOpds?: boolean;
  /** Base Url for the kavita. Requires restart to take effect. */
  baseUrl?: string | null;
  /** Where Bookmarks are stored. */
  bookmarksDirectory?: string | null;
  installVersion?: string | null;
  /** Represents a unique Id to this Kavita installation. Only used in Stats to identify unique installs. */
  installId?: string | null;
  /**
   * The format that should be used when saving media for Kavita
   * @format int32
   * @example "This includes things like: Covers, Bookmarks, Favicons"
   */
  encodeMediaAs?: 0 | 1 | 2;
  /**
   * The amount of Backups before cleanup
   * @format int32
   */
  totalBackups?: number;
  /** If Kavita should watch the library folders and process changes */
  enableFolderWatching?: boolean;
  /**
   * Total number of days worth of logs to keep at a given time.
   * @format int32
   */
  totalLogs?: number;
  /** The Host name (ie Reverse proxy domain name) for the server */
  hostName?: string | null;
  /**
   * The size in MB for Caching API data
   * @format int64
   */
  cacheSize?: number;
  /**
   * How many Days since today in the past for reading progress, should content be considered for On Deck, before it gets removed automatically
   * @format int32
   */
  onDeckProgressDays?: number;
  /**
   * How many Days since today in the past for chapter updates, should content be considered for On Deck, before it gets removed automatically
   * @format int32
   */
  onDeckUpdateDays?: number;
  /**
   * How large the cover images should be
   * @format int32
   */
  coverImageSize?: 1 | 2 | 3 | 4;
  smtpConfig?: SmtpConfigDto;
  /** All configuration regarding OIDC */
  oidcConfig?: OidcConfigDto;
  /**
   * The Date Kavita was first installed
   * @format date-time
   */
  firstInstallDate?: string | null;
  /** The Version of Kavita on the first run */
  firstInstallVersion?: string | null;
}

export interface ServerStatisticsDto {
  /** @format int64 */
  chapterCount?: number;
  /** @format int64 */
  volumeCount?: number;
  /** @format int64 */
  seriesCount?: number;
  /** @format int64 */
  totalFiles?: number;
  /** @format int64 */
  totalSize?: number;
  /** @format int64 */
  totalGenres?: number;
  /** @format int64 */
  totalTags?: number;
  /** @format int64 */
  totalPeople?: number;
  /** @format int64 */
  totalReadingTime?: number;
}

export interface SideNavStreamDto {
  /** @format int32 */
  id?: number;
  name: string | null;
  /** Is System Provided */
  isProvided?: boolean;
  /**
   * Sort Order on the Dashboard
   * @format int32
   */
  order?: number;
  /** If Not IsProvided, the appropriate smart filter */
  smartFilterEncoded?: string | null;
  /** @format int32 */
  smartFilterId?: number | null;
  /**
   * External Source Url if configured
   * @format int32
   */
  externalSourceId?: number;
  externalSource?: ExternalSourceDto;
  /**
   * For system provided
   * @format int32
   */
  streamType?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  visible?: boolean;
  /** @format int32 */
  libraryId?: number | null;
  library?: LibraryDto;
}

/** Represents a set of css overrides the user can upload to Kavita and will load into webui */
export interface SiteThemeDto {
  /** @format int32 */
  id?: number;
  /** Name of the Theme */
  name: string | null;
  /** Normalized name for lookups */
  normalizedName: string | null;
  /**
   * File path to the content. Stored under API.Services.DirectoryService.SiteThemeDirectory.
   * Must be a .css file
   */
  fileName: string | null;
  /** Only one theme can have this. Will auto-set this as default for new user accounts */
  isDefault?: boolean;
  /**
   * Where did the theme come from
   * @format int32
   */
  provider?: 1 | 2;
  previewUrls?: string[] | null;
  /** Information about the theme */
  description?: string | null;
  /** Author of the Theme (only applies to non-system provided themes) */
  author?: string | null;
  /** Last compatible version. System provided will always be most current */
  compatibleVersion?: string | null;
  selector?: string | null;
}

export interface SmartFilterDto {
  /** @format int32 */
  id?: number;
  name: string | null;
  /** This is the Filter url encoded. It is decoded and reconstructed into a API.DTOs.Filtering.v2.FilterV2Dto */
  filter: string | null;
}

export interface SmtpConfigDto {
  senderAddress?: string | null;
  senderDisplayName?: string | null;
  userName?: string | null;
  password?: string | null;
  host?: string | null;
  /** @format int32 */
  port?: number;
  enableSsl?: boolean;
  /**
   * Limit in bytes for allowing files to be added as attachments. Defaults to 25MB
   * @format int32
   */
  sizeLimit?: number;
  /** Should Kavita use config/templates for Email templates or the default ones */
  customizedTemplates?: boolean;
}

/** Sorting Options for a query */
export interface SortOptions {
  /** @format int32 */
  sortField?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  isAscending?: boolean;
}

export interface SpreadStatsDto {
  buckets?: StatBucketDto[] | null;
  /** @format int32 */
  totalCount?: number;
}

/** Used on Person Profile page */
export interface StandaloneChapterDto {
  /** @format int32 */
  id?: number;
  range?: string | null;
  /** @deprecated */
  number?: string | null;
  /** @format float */
  minNumber?: number;
  /** @format float */
  maxNumber?: number;
  /** @format float */
  sortOrder?: number;
  /** @format int32 */
  pages?: number;
  isSpecial?: boolean;
  title?: string | null;
  /** The files that represent this Chapter */
  files?: MangaFileDto[] | null;
  /**
   * Calculated at API time. Number of pages read for this Chapter for logged-in user.
   * @format int32
   */
  pagesRead?: number;
  /**
   * Total number of complete reads
   * @format int32
   */
  totalReads?: number;
  /**
   * The last time a chapter was read by current authenticated user
   * @format date-time
   */
  lastReadingProgressUtc?: string;
  /**
   * The last time a chapter was read by current authenticated user
   * @format date-time
   */
  lastReadingProgress?: string;
  coverImageLocked?: boolean;
  /** @format int32 */
  volumeId?: number;
  /** @format date-time */
  createdUtc?: string;
  /** @format date-time */
  lastModifiedUtc?: string;
  /** @format date-time */
  created?: string;
  /** @format date-time */
  releaseDate?: string;
  titleName?: string | null;
  summary?: string | null;
  /**
   * Represents Age Rating for content.
   * @format int32
   */
  ageRating?:
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | -1;
  /** @format int64 */
  wordCount?: number;
  /** @format int32 */
  minHoursToRead?: number;
  /** @format int32 */
  maxHoursToRead?: number;
  /** @format float */
  avgHoursToRead?: number;
  webLinks?: string | null;
  isbn?: string | null;
  writers?: PersonDto[] | null;
  coverArtists?: PersonDto[] | null;
  publishers?: PersonDto[] | null;
  characters?: PersonDto[] | null;
  pencillers?: PersonDto[] | null;
  inkers?: PersonDto[] | null;
  imprints?: PersonDto[] | null;
  colorists?: PersonDto[] | null;
  letterers?: PersonDto[] | null;
  editors?: PersonDto[] | null;
  translators?: PersonDto[] | null;
  teams?: PersonDto[] | null;
  locations?: PersonDto[] | null;
  genres?: GenreTagDto[] | null;
  /** Collection of all Tags from underlying chapters for a Series */
  tags?: TagDto[] | null;
  /** @format int32 */
  publicationStatus?: 0 | 1 | 2 | 3 | 4;
  language?: string | null;
  /** @format int32 */
  count?: number;
  /** @format int32 */
  totalCount?: number;
  languageLocked?: boolean;
  summaryLocked?: boolean;
  ageRatingLocked?: boolean;
  publicationStatusLocked?: boolean;
  genresLocked?: boolean;
  tagsLocked?: boolean;
  writerLocked?: boolean;
  characterLocked?: boolean;
  coloristLocked?: boolean;
  editorLocked?: boolean;
  inkerLocked?: boolean;
  imprintLocked?: boolean;
  lettererLocked?: boolean;
  pencillerLocked?: boolean;
  publisherLocked?: boolean;
  translatorLocked?: boolean;
  teamLocked?: boolean;
  locationLocked?: boolean;
  coverArtistLocked?: boolean;
  releaseDateLocked?: boolean;
  titleNameLocked?: boolean;
  sortOrderLocked?: boolean;
  coverImage?: string | null;
  primaryColor?: string | null;
  secondaryColor?: string | null;
  /** @format int32 */
  format?: 0 | 1 | 2 | 3 | 4 | null;
  /** @format int32 */
  seriesId?: number;
  /** @format int32 */
  libraryId?: number;
  /** @format int32 */
  libraryType?: 0 | 1 | 2 | 3 | 4 | 5;
  volumeTitle?: string | null;
}

/** A bucket of items (fixed) from 0-X, X-X*2 */
export interface StatBucketDto {
  /** @format int32 */
  rangeStart?: number;
  /**
   * Null for the last range (1000+)
   * @format int32
   */
  rangeEnd?: number | null;
  /** @format int32 */
  count?: number;
  /**
   * Percentage of total chapters
   * @format double
   */
  percentage?: number;
}

export interface StringBreakDownDto {
  data?: StringStatCount[] | null;
  /** @format int32 */
  total?: number;
  /** @format int32 */
  totalOptions?: number;
  /** @format int32 */
  missing?: number;
}

export interface StringStatCount {
  value?: string | null;
  /** @format int64 */
  count?: number;
}

export interface TagDto {
  /** @format int32 */
  id?: number;
  title: string | null;
}

export interface TagDtoStatCount {
  value?: TagDto;
  /** @format int64 */
  count?: number;
}

export interface TokenRequestDto {
  token?: string | null;
  refreshToken?: string | null;
}

export interface TopReadDto {
  /** @format int32 */
  userId?: number;
  username?: string | null;
  /**
   * Amount of time read on Comic libraries
   * @format float
   */
  comicsTime?: number;
  /**
   * Amount of time read on
   * @format float
   */
  booksTime?: number;
  /** @format float */
  mangaTime?: number;
}

export interface UpdateAgeRestrictionDto {
  /**
   * Represents Age Rating for content.
   * @format int32
   */
  ageRating:
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | -1;
  includeUnknowns: boolean;
}

export interface UpdateChapterDto {
  /** @format int32 */
  id?: number;
  summary?: string | null;
  /** Genres for the Chapter */
  genres?: GenreTagDto[] | null;
  /** Collection of all Tags from underlying chapters for a Chapter */
  tags?: TagDto[] | null;
  writers?: PersonDto[] | null;
  coverArtists?: PersonDto[] | null;
  publishers?: PersonDto[] | null;
  characters?: PersonDto[] | null;
  pencillers?: PersonDto[] | null;
  inkers?: PersonDto[] | null;
  imprints?: PersonDto[] | null;
  colorists?: PersonDto[] | null;
  letterers?: PersonDto[] | null;
  editors?: PersonDto[] | null;
  translators?: PersonDto[] | null;
  teams?: PersonDto[] | null;
  locations?: PersonDto[] | null;
  /**
   * Highest Age Rating from all Chapters
   * @format int32
   */
  ageRating?:
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | -1;
  /** Language of the content (BCP-47 code) */
  language?: string | null;
  /** Locked by user so metadata updates from scan loop will not override AgeRating */
  ageRatingLocked?: boolean;
  titleNameLocked?: boolean;
  genresLocked?: boolean;
  tagsLocked?: boolean;
  writerLocked?: boolean;
  characterLocked?: boolean;
  coloristLocked?: boolean;
  editorLocked?: boolean;
  inkerLocked?: boolean;
  imprintLocked?: boolean;
  lettererLocked?: boolean;
  pencillerLocked?: boolean;
  publisherLocked?: boolean;
  translatorLocked?: boolean;
  teamLocked?: boolean;
  locationLocked?: boolean;
  coverArtistLocked?: boolean;
  languageLocked?: boolean;
  summaryLocked?: boolean;
  isbnLocked?: boolean;
  releaseDateLocked?: boolean;
  /**
   * The sorting order of the Chapter. Inherits from MinNumber, but can be overridden.
   * @format float
   */
  sortOrder?: number;
  /** Can the sort order be updated on scan or is it locked from UI */
  sortOrderLocked?: boolean;
  /** Comma-separated link of urls to external services that have some relation to the Chapter */
  webLinks?: string | null;
  isbn?: string | null;
  /**
   * Date which chapter was released
   * @format date-time
   */
  releaseDate?: string;
  /** Chapter title */
  titleName?: string | null;
}

export interface UpdateClientDeviceNameDto {
  /** @format int32 */
  deviceId?: number;
  name?: string | null;
}

export interface UpdateDefaultThemeDto {
  /** @format int32 */
  themeId?: number;
}

export interface UpdateEmailDeviceDto {
  /** @format int32 */
  id: number;
  /** @minLength 1 */
  name: string;
  /**
   * Platform of the device. If not know, defaults to "Custom"
   * @format int32
   */
  platform: 0 | 1 | 2 | 3;
  /** @minLength 1 */
  emailAddress: string;
}

export interface UpdateEmailDto {
  email?: string | null;
  password?: string | null;
}

export interface UpdateLibraryDto {
  /** @format int32 */
  id: number;
  /** @minLength 1 */
  name: string;
  /** @format int32 */
  type: 0 | 1 | 2 | 3 | 4 | 5;
  folders: string[];
  folderWatching: boolean;
  includeInDashboard: boolean;
  includeInSearch: boolean;
  manageCollections: boolean;
  manageReadingLists: boolean;
  allowScrobbling: boolean;
  allowMetadataMatching: boolean;
  enableMetadata: boolean;
  removePrefixForSortName: boolean;
  inheritWebLinksFromFirstChapter: boolean;
  defaultLanguage?: string | null;
  /** What types of files to allow the scanner to pickup */
  fileGroupTypes: (1 | 2 | 3 | 4)[];
  /** A set of Glob patterns that the scanner will exclude processing */
  excludePatterns: string[];
}

export interface UpdateLibraryForUserDto {
  username: string | null;
  selectedLibraries: LibraryDto[] | null;
}

export interface UpdateLicenseDto {
  /** License Key received from Kavita+ */
  license: string | null;
  /** Email registered with Stripe */
  email: string | null;
  /** Optional DiscordId */
  discordId?: string | null;
}

/** Update Notification denoting a new release available for user to update to */
export interface UpdateNotificationDto {
  /** Current installed Version */
  currentVersion: string | null;
  /**
   * Semver of the release version
   * <example>0.4.3</example>
   */
  updateVersion: string | null;
  /** Release body in HTML */
  updateBody: string | null;
  /** Title of the release */
  updateTitle: string | null;
  /** Github Url */
  updateUrl: string | null;
  /** If this install is within Docker */
  isDocker?: boolean;
  /** Is this a pre-release */
  isPrerelease?: boolean;
  /** Date of the publish */
  publishDate: string | null;
  /** Is the server on a nightly within this release */
  isOnNightlyInRelease?: boolean;
  /** Is the server on an older version */
  isReleaseNewer?: boolean;
  /** Is the server on this version */
  isReleaseEqual?: boolean;
  added?: string[] | null;
  removed?: string[] | null;
  changed?: string[] | null;
  fixed?: string[] | null;
  theme?: string[] | null;
  developer?: string[] | null;
  api?: string[] | null;
  featureRequests?: string[] | null;
  knownIssues?: string[] | null;
  /** The part above the changelog part */
  blogPart?: string | null;
}

export interface UpdatePersonDto {
  /** @format int32 */
  id: number;
  coverImageLocked: boolean;
  /** @minLength 1 */
  name: string;
  aliases?: string[] | null;
  description?: string | null;
  /** @format int32 */
  aniListId?: number | null;
  /** @format int64 */
  malId?: number | null;
  hardcoverId?: string | null;
  asin?: string | null;
}

export interface UpdateRatingDto {
  /** @format int32 */
  seriesId?: number;
  /** @format int32 */
  chapterId?: number | null;
  /** @format float */
  userRating?: number;
}

export interface UpdateReadingListByChapterDto {
  /** @format int32 */
  chapterId?: number;
  /** @format int32 */
  seriesId?: number;
  /** @format int32 */
  readingListId?: number;
}

export interface UpdateReadingListByMultipleDto {
  /** @format int32 */
  seriesId?: number;
  /** @format int32 */
  readingListId?: number;
  volumeIds?: number[] | null;
  chapterIds?: number[] | null;
}

export interface UpdateReadingListByMultipleSeriesDto {
  /** @format int32 */
  readingListId?: number;
  seriesIds?: number[] | null;
}

export interface UpdateReadingListBySeriesDto {
  /** @format int32 */
  seriesId?: number;
  /** @format int32 */
  readingListId?: number;
}

export interface UpdateReadingListByVolumeDto {
  /** @format int32 */
  volumeId?: number;
  /** @format int32 */
  seriesId?: number;
  /** @format int32 */
  readingListId?: number;
}

export interface UpdateReadingListDto {
  /** @format int32 */
  readingListId: number;
  title?: string | null;
  summary?: string | null;
  promoted?: boolean;
  coverImageLocked?: boolean;
  /** @format int32 */
  startingMonth?: number;
  /** @format int32 */
  startingYear?: number;
  /** @format int32 */
  endingMonth?: number;
  /** @format int32 */
  endingYear?: number;
}

/** DTO for moving a reading list item to another position within the same list */
export interface UpdateReadingListPosition {
  /** @format int32 */
  readingListId: number;
  /** @format int32 */
  readingListItemId: number;
  /** @format int32 */
  fromPosition?: number;
  /** @format int32 */
  toPosition: number;
}

export interface UpdateRelatedSeriesDto {
  /** @format int32 */
  seriesId?: number;
  adaptations?: number[] | null;
  characters?: number[] | null;
  contains?: number[] | null;
  others?: number[] | null;
  prequels?: number[] | null;
  sequels?: number[] | null;
  sideStories?: number[] | null;
  spinOffs?: number[] | null;
  alternativeSettings?: number[] | null;
  alternativeVersions?: number[] | null;
  doujinshis?: number[] | null;
  editions?: number[] | null;
  annuals?: number[] | null;
}

export interface UpdateSeriesDto {
  /** @format int32 */
  id?: number;
  localizedName?: string | null;
  sortName?: string | null;
  coverImageLocked?: boolean;
  sortNameLocked?: boolean;
  localizedNameLocked?: boolean;
}

export interface UpdateSeriesForTagDto {
  tag?: AppUserCollectionDto;
  seriesIdsToRemove?: number[] | null;
}

export interface UpdateSeriesMetadataDto {
  seriesMetadata?: SeriesMetadataDto;
}

export interface UpdateStreamPositionDto {
  streamName?: string | null;
  /** @format int32 */
  id?: number;
  /** @format int32 */
  fromPosition?: number;
  /** @format int32 */
  toPosition?: number;
  /** If the API.DTOs.Dashboard.UpdateStreamPositionDto.ToPosition has taken into account non-visible items */
  positionIncludesInvisible?: boolean;
}

export interface UpdateUserDto {
  /** @format int32 */
  userId?: number;
  username?: string | null;
  /**
   * List of Roles to assign to user. If admin not present, Pleb will be applied.
   * If admin present, all libraries will be granted access and will ignore those from DTO.
   */
  roles?: string[] | null;
  /** A list of libraries to grant access to */
  libraries?: number[] | null;
  ageRestriction?: AgeRestrictionDto;
  email?: string | null;
  /**
   * Who provides the identity of the user
   * @format int32
   */
  identityProvider?: 0 | 1;
}

export interface UpdateUserReviewDto {
  /** @format int32 */
  seriesId?: number;
  /** @format int32 */
  chapterId?: number | null;
  body?: string | null;
}

/** A list of Series to pass when working with Want To Read APIs */
export interface UpdateWantToReadDto {
  /** List of Series Ids that will be Added/Removed */
  seriesIds?: number[] | null;
}

export interface UploadFileDto {
  /**
   * Id of the Entity
   * @format int32
   */
  id: number;
  /** Base Url encoding of the file to upload from (can be null) */
  url: string | null;
  /** Lock the cover or not */
  lockCover?: boolean;
}

export interface UploadUrlDto {
  /**
   * External url
   * @minLength 1
   */
  url: string;
}

export interface UserDto {
  /** @format int32 */
  id?: number;
  username?: string | null;
  email?: string | null;
  roles?: string[] | null;
  token?: string | null;
  refreshToken?: string | null;
  apiKey?: string | null;
  preferences?: UserPreferencesDto;
  ageRestriction?: AgeRestrictionDto;
  kavitaVersion?: string | null;
  /**
   * Who provides the identity of the user
   * @format int32
   */
  identityProvider?: 0 | 1;
  /** @format date-time */
  created?: string;
  /** @format date-time */
  createdUtc?: string;
  /** Only System-provided Auth Keys */
  authKeys?: AuthKeyDto[] | null;
  coverImage?: string | null;
  primaryColor?: string | null;
  secondaryColor?: string | null;
}

/**
 * User params should be used together with [FromQuery] to add optional pagination to endpoint. If no pagination params are
 * provided, the default (int.MaxValue) will be used. When adding pagination to an endpoint, ensure the UI sets the correct
 * query params.
 */
export interface UserParams {
  /** @format int32 */
  pageNumber?: number;
  /**
   * If set to 0, will set as MaxInt
   * @format int32
   */
  pageSize?: number;
}

export interface UserPreferencesDto {
  /** Represents a set of css overrides the user can upload to Kavita and will load into webui */
  theme: SiteThemeDto;
  /** @format int32 */
  globalPageLayoutMode?: 0 | 1;
  blurUnreadSummaries: boolean;
  promptForDownloadSize: boolean;
  noTransitions: boolean;
  collapseSeriesRelationships: boolean;
  /** @minLength 1 */
  locale: string;
  colorScapeEnabled: boolean;
  dataSaver: boolean;
  /** @format int32 */
  promptForRereadsAfter: number;
  customKeyBinds: {
    NavigateToSettings?: KeyBind[];
    OpenSearch?: KeyBind[];
    NavigateToScrobbling?: KeyBind[];
    ToggleFullScreen?: KeyBind[];
    BookmarkPage?: KeyBind[];
    OpenHelp?: KeyBind[];
    GoTo?: KeyBind[];
    ToggleMenu?: KeyBind[];
    PageLeft?: KeyBind[];
    PageRight?: KeyBind[];
    Escape?: KeyBind[];
    PageUp?: KeyBind[];
    PageDown?: KeyBind[];
  };
  aniListScrobblingEnabled?: boolean;
  wantToReadSync?: boolean;
  bookReaderHighlightSlots: HighlightSlot[];
  socialPreferences: AppUserSocialPreferences;
  opdsPreferences: AppUserOpdsPreferences;
}

export interface UserReadStatistics {
  /**
   * Total number of pages read
   * @format int64
   */
  totalPagesRead?: number;
  /**
   * Total number of words read
   * @format int64
   */
  totalWordsRead?: number;
  /**
   * Total time spent reading
   * @format int64
   */
  timeSpentReading?: number;
  /**
   * Last time user read anything
   * @format date-time
   */
  lastActiveUtc?: string | null;
  /** @format double */
  avgHoursPerWeekSpentReading?: number;
}

export interface UserReadingProfileDto {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  userId?: number;
  name?: string | null;
  /** @format int32 */
  kind?: 0 | 1 | 2;
  /** @format int32 */
  readingDirection: 0 | 1;
  /** @format int32 */
  scalingOption: 0 | 1 | 2 | 3;
  /** @format int32 */
  pageSplitOption: 0 | 1 | 2 | 3;
  /** @format int32 */
  readerMode: 0 | 1 | 2;
  autoCloseMenu: boolean;
  showScreenHints: boolean;
  emulateBook: boolean;
  /** @format int32 */
  layoutMode: 1 | 2 | 3;
  /** @minLength 1 */
  backgroundColor: string;
  swipeToPaginate: boolean;
  allowAutomaticWebtoonReaderDetection: boolean;
  /** @format int32 */
  widthOverride?: number | null;
  /** @format int32 */
  disableWidthOverride?: 0 | 1 | 2 | 3;
  /** @format int32 */
  bookReaderMargin: number;
  /** @format int32 */
  bookReaderLineSpacing: number;
  /** @format int32 */
  bookReaderFontSize: number;
  /** @minLength 1 */
  bookReaderFontFamily: string;
  bookReaderTapToPaginate: boolean;
  /** @format int32 */
  bookReaderReadingDirection: 0 | 1;
  /**
   * Represents the writing styles for the book-reader
   * @format int32
   */
  bookReaderWritingStyle: 0 | 1;
  /** @minLength 1 */
  bookReaderThemeName: string;
  /** @format int32 */
  bookReaderLayoutMode: 0 | 1 | 2;
  bookReaderImmersiveMode: boolean;
  /** @format int32 */
  pdfTheme: 0 | 1;
  /**
   * Enum values match PdfViewer's enums
   * @format int32
   */
  pdfScrollMode: 0 | 1 | 3;
  /** @format int32 */
  pdfSpreadMode: 0 | 1 | 2;
}

/** Represents a User Review for a given Series */
export interface UserReviewDto {
  /** A tagline for the review */
  tagline?: string | null;
  /** The main review */
  body?: string | null;
  /** The main body with just text, for review preview */
  bodyJustText?: string | null;
  /**
   * The series this is for
   * @format int32
   */
  seriesId?: number;
  /** @format int32 */
  chapterId?: number | null;
  /**
   * The library this series belongs in
   * @format int32
   */
  libraryId?: number;
  /** The user who wrote this */
  username?: string | null;
  /**
   * UserId of the reviewer, only applicable for API.Services.Plus.ScrobbleProvider.Kavita
   * @format int32
   */
  userId?: number;
  /** @format int32 */
  totalVotes?: number;
  /** @format float */
  rating?: number;
  rawBody?: string | null;
  /**
   * How many upvotes this review has gotten
   * @format int32
   */
  score?: number;
  /** If External, the url of the review */
  siteUrl?: string | null;
  /** Does this review come from an external Source */
  isExternal?: boolean;
  /**
   * If this review is External, which Provider did it come from
   * @format int32
   */
  provider?: 0 | 1 | 2 | 3 | 4;
  /**
   * Source of the Rating
   * @format int32
   */
  authority?: 0 | 1;
}

export interface UserReviewExtendedDto {
  /** @format int32 */
  id?: number;
  /** The main review */
  body?: string | null;
  /**
   * The series this is for
   * @format int32
   */
  seriesId?: number;
  /** @format int32 */
  chapterId?: number | null;
  /**
   * The library this series belongs in
   * @format int32
   */
  libraryId?: number;
  /** The user who wrote this */
  username?: string | null;
  /** @format float */
  rating?: number;
  series?: SeriesDto;
  /**
   * A Chapter is the lowest grouping of a reading medium. A Chapter contains a set of MangaFiles which represents the underlying
   * file (abstracted from type).
   */
  chapter?: ChapterDto;
  /** @format date-time */
  createdUtc?: string;
  writers?: PersonDto[] | null;
}

/** Represents information around a user's tokens and their status */
export interface UserTokenInfo {
  /** @format int32 */
  userId?: number;
  username?: string | null;
  isAniListTokenSet?: boolean;
  isAniListTokenValid?: boolean;
  /** @format date-time */
  aniListValidUntilUtc?: string;
  isMalTokenSet?: boolean;
}

export interface VolumeDto {
  /** @format int32 */
  id?: number;
  /** @format float */
  minNumber?: number;
  /** @format float */
  maxNumber?: number;
  name?: string | null;
  /**
   * This will map to MinNumber. Number was removed in v0.7.13.8/v0.7.14
   * @deprecated
   * @format int32
   */
  number?: number;
  /** @format int32 */
  pages?: number;
  /** @format int32 */
  pagesRead?: number;
  /** @format date-time */
  lastModifiedUtc?: string;
  /** @format date-time */
  createdUtc?: string;
  /**
   * When chapter was created in local server time
   * @format date-time
   */
  created?: string;
  /**
   * When chapter was last modified in local server time
   * @format date-time
   */
  lastModified?: string;
  /** @format int32 */
  seriesId?: number;
  chapters?: ChapterDto[] | null;
  /** @format int32 */
  minHoursToRead?: number;
  /** @format int32 */
  maxHoursToRead?: number;
  /** @format float */
  avgHoursToRead?: number;
  /** @format int64 */
  wordCount?: number;
  coverImage?: string | null;
  primaryColor?: string | null;
  secondaryColor?: string | null;
}

export interface YearMonthGroupingDto {
  /** @format int32 */
  year?: number;
  /** @format int32 */
  month?: number;
}

export interface YearMonthGroupingDtoStatCount {
  value?: YearMonthGroupingDto;
  /** @format int64 */
  count?: number;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface HttpResponse<D extends unknown, E extends unknown = unknown>
  extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  JsonApi = "application/vnd.api+json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}
