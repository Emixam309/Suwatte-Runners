import {
  ContentType,
  DirectoryFilter,
  FilterType,
  Option,
} from "@suwatte/daisuke"

export enum DirectoryType {
  Series = "SERIES",
  Library = "LIBRARY",
}

export enum AgeRating {
  NotApplicable = -1,
  Unknown = 0,
  RatingPending = 1,
  EarlyChildhood = 2,
  Everyone = 3,
  G = 4,
  Everyone10Plus = 5,
  PG = 6,
  KidsToAdults = 7,
  Teen = 8,
  Mature15Plus = 9,
  Mature17Plus = 10,
  Mature = 11,
  R18Plus = 12,
  AdultsOnly = 13,
  X18Plus = 14,
}

export enum Sort {
  SortName = 1,
  Created = 2,
  lastModified = 3,
  ItemAdded = 4,
  TimeToRead = 5,
  ReleaseYear = 6,
  LastRead = 7,
  AverageRating = 8,
  Random = 9,
}

export const SortOptions: Option[] = [
  {
    id: String(Sort.SortName),
    title: "Name",
  },
  {
    id: String(Sort.Created),
    title: "Created",
  },
  {
    id: String(Sort.lastModified),
    title: "Last Modified",
  },
  {
    id: String(Sort.ItemAdded),
    title: "Item Added",
  },
  {
    id: String(Sort.TimeToRead),
    title: "Time to Read",
  },
  {
    id: String(Sort.ReleaseYear),
    title: "Release Year",
  },
  {
    id: String(Sort.LastRead),
    title: "Last Read",
  },
  {
    id: String(Sort.AverageRating),
    title: "Average Rating",
  },
  {
    id: String(Sort.Random),
    title: "Random",
  },
]

export enum FilterField {
  Summary = 0,
  SeriesName = 1,
  PublicationStatus = 2,
  Languages = 3,
  AgeRating = 4,
  UserRating = 5,
  Tags = 6,
  CollectionTags = 7,
  Translators = 8,
  Characters = 9,
  Publisher = 10,
  Editor = 11,
  CoverArtist = 12,
  Letterer = 13,
  Colorist = 14,
  Inker = 15,
  Penciller = 16,
  Writers = 17,
  Genres = 18,
  Libraries = 19,
  ReadProgress = 20,
  Formats = 21,
  ReleaseYear = 22,
  ReadTime = 23,
  Path = 24,
  FilePath = 25,
  WantToRead = 26,
  ReadingDate = 27,
  AverageRating = 28,
  Imprint = 29,
  Team = 30,
  Location = 31,
  ReadLast = 32,
  FileSize = 33,
}

export interface FilterInput {
  tags?: { excluded: string[]; included: string[] }
  genres?: { excluded: string[]; included: string[] }
  languages?: string[]
  peoples?: string | string[]
}

export const genreMap: { [key: string]: ContentType } = {
  Manga: ContentType.MANGA,
  Manhwa: ContentType.MANHWA,
  Webtoon: ContentType.MANHWA,
  Manhua: ContentType.MANHUA,
  Comic: ContentType.COMIC,
  Novel: ContentType.NOVEL,
}

export const RESULT_COUNT = 30
export enum SeriesStatus {
  Ended = "ENDED",
  Ongoing = "ONGOING",
  Abandoned = "ABANDONED",
  Hiatus = "HIATUS",
}

export enum ReadStatus {
  Unread = "UNREAD",
  InProgress = "IN_PROGRESS",
  Read = "READ",
}

export const creatorFields = [
  "writers",
  "coverArtists",
  "pencillers",
  "inkers",
  "colorists",
  "letterers",
  "editors",
]

export const metadataFields = [
  { key: "genres", title: "Genres", prop: "title", field: FilterField.Genres },
  {
    key: "writers",
    title: "Writers",
    prop: "name",
    field: FilterField.Writers,
  },
  {
    key: "coverArtists",
    title: "Cover Artists",
    prop: "name",
    field: FilterField.CoverArtist,
  },
  {
    key: "publishers",
    title: "Publishers",
    prop: "name",
    field: FilterField.Publisher,
  },
  {
    key: "characters",
    title: "Characters",
    prop: "name",
    field: FilterField.Characters,
  },
  {
    key: "pencillers",
    title: "Pencillers",
    prop: "name",
    field: FilterField.Penciller,
  },
  { key: "inkers", title: "Inkers", prop: "name", field: FilterField.Inker },
  {
    key: "imprints",
    title: "Imprints",
    prop: "name",
    field: FilterField.Imprint,
  },
  {
    key: "colorists",
    title: "Colorists",
    prop: "name",
    field: FilterField.Colorist,
  },
  {
    key: "letterers",
    title: "Letterers",
    prop: "name",
    field: FilterField.Letterer,
  },
  { key: "editors", title: "Editors", prop: "name", field: FilterField.Editor },
  {
    key: "translators",
    title: "Translators",
    prop: "name",
    field: FilterField.Translators,
  },
  { key: "teams", title: "Teams", prop: "name", field: FilterField.Team },
  {
    key: "locations",
    title: "Locations",
    prop: "name",
    field: FilterField.Location,
  },
  { key: "tags", title: "Tags", prop: "title", field: FilterField.Tags },
]

export const getAgeRatingTitle = (ageRating: AgeRating): string => {
  switch (ageRating) {
    case AgeRating.NotApplicable:
      return "Not Applicable"
    case AgeRating.RatingPending:
      return "Rating Pending"
    case AgeRating.EarlyChildhood:
      return "Early Childhood"
    case AgeRating.Everyone:
      return "Everyone"
    case AgeRating.G:
      return "G"
    case AgeRating.Everyone10Plus:
      return "Everyone 10+"
    case AgeRating.PG:
      return "PG"
    case AgeRating.KidsToAdults:
      return "Kids to Adults"
    case AgeRating.Teen:
      return "Teen"
    case AgeRating.Mature15Plus:
      return "MA15+"
    case AgeRating.Mature17Plus:
      return "Mature 17+"
    case AgeRating.Mature:
      return "M"
    case AgeRating.R18Plus:
      return "R18+"
    case AgeRating.AdultsOnly:
      return "Adults Only 18+"
    case AgeRating.X18Plus:
      return "X18+"
    case AgeRating.Unknown:
    default:
      return "Unknown"
  }
}
