import { request } from "."
import { GenreTagDto, LanguageDto, PersonDto, TagDto } from "../types"
import { genURL } from "../utils"

export const getGenres = async (libraryIds?: string[]) => {
  return await request<GenreTagDto[]>({
    url: await genURL("/api/Metadata/genres"),
    params: {
      ...(libraryIds && { libraryIds: libraryIds.join(',') }),
    },
  })
}

export const getPeoples = async (libraryIds?: string[]) => {
  return await request<PersonDto[]>({
    url: await genURL("/api/Metadata/people"),
    params: {
      ...(libraryIds && { libraryIds: libraryIds.join(',') }),
    },
  })
}

export const getTags = async (libraryIds?: string[]) => {
  return await request<TagDto[]>({
    url: await genURL("/api/Metadata/tags"),
    params: {
      ...(libraryIds && { libraryIds: libraryIds.join(',') }),
    },
  })
}

export const getLanguages = async (libraryIds?: string[]) => {
  return await request<LanguageDto[]>({
    url: await genURL("/api/Metadata/languages"),
    params: {
      ...(libraryIds && { libraryIds }),
    },
  })
}
