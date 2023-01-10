import { Hero } from './../../api/heroes/types';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getHero } from '../../api/heroes';

export const useHero = () => {
  const { id } = useParams<'id'>();
  let hero: Hero | undefined;

  const { isLoading, data, isFetching } = useQuery({
    queryKey: ['hero', id],
    queryFn: () => getHero(id || ''),
    refetchOnWindowFocus: false,
    onError: () => {
      const heroes = JSON.parse(
        localStorage.getItem('heroes') || '[]'
      ) as Hero[];
      hero = heroes.find((it) => it.id === Number(id));
    },
  });

  return { isLoading: isFetching || isLoading, data: data || hero };
};
