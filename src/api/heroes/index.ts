import { handlePublicRequest } from './../utils/handlePublicRequest';
import { URL } from './constants';

import { Heroes, Hero } from './types';

export const getHeroesList = (page: number, name?: string) =>
  handlePublicRequest<{ data: { results: Heroes } }>({
    url: URL(`v1/public/characters`),
    params: {
      limit: 50,
      offset: (page - 1) * 50,
      nameStartsWith: Boolean(name) ? name : undefined,
    },
  }).then(({ data }) => Promise.resolve(data.results));

export const getHero = (characterId: string) =>
  handlePublicRequest<{ data: { results: Hero[] } }>({
    url: URL(`/v1/public/characters/${characterId}`),
  }).then(({ data }) => Promise.resolve(data.results[0]));
