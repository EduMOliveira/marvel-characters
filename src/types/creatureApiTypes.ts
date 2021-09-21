// Types of the entire API endpoint return -> GET /v1/public/characters
// Types of the entire API endpoint return -> GET /v1/public/characters/{characterId}
// Same type for both endpoints

export type CreaturesType = {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: CreatureResultsType;
};

export type CreatureResultsType = {
  offset: number;
  limit?: number;
  total: number;
  count?: number;
  results: ResultType[];
};

export type ResultType = {
  id: number;
  name: string;
  description: string;
  modified?: string;
  resourceURI?: string;
  thumbnail: ThumbType;
  comics?: ComicType;
  series: SerieType;
  stories?: StoriesType;
  events?: EventsType;
  urls?: UrlType[];
};

type ThumbType = {
  path: string;
  extension: string;
};

type ComicType = {
  available: number;
  collectionURI: string;
  returned: number;
  items: ComicItem[];
};

type ComicItem = {
  resourceURI: string;
  name: string;
};

type SerieType = {
  available?: number;
  collectionURI?: string;
  returned?: number;
  items: SerieItemType[];
};

type SerieItemType = {
  resourceURI?: string;
  name: string;
};

type StoriesType = {
  available: number;
  collectionURI: string;
  returned: number;
  items: StoriesItemType[];
};

type StoriesItemType = {
  resourceURI: string;
  name: string;
  type: string;
};

type EventsType = {
  available: number;
  collectionURI: string;
  returned: number;
  items: EventsItemType[];
};

type EventsItemType = {
  resourceURI: string;
  name: string;
};

type UrlType = {
  type: string;
  url: string;
};
