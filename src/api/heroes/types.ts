export type HeroCategory = {
  available: number;
  collectionURI: string;
  items: { resourceURI: string; name: string; type?: string }[];
  returned: number;
};

export type Hero = {
  id: number;
  name: string;
  description: string;
  modified?: string;
  thumbnail?: { path: string; extension: string };
  resourceURI?: string;
  comics: HeroCategory;
  series: HeroCategory;
  stories: HeroCategory;
  events?: HeroCategory;
  urls?: { type: string; url: string }[];
};

export type Heroes = Hero[];
