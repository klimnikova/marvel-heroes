import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { getHeroesList } from '../../api/heroes';
import { getHeroes } from '../../store/selectors/heroes.selector';
import { setHeroes } from '../../store/slices/heroesSlice';

export const useHeroesList = (page: number, name?: string) => {
  const heroes = useSelector(getHeroes);
  const dispatch = useDispatch();
  const { isLoading, isFetching } = useQuery({
    queryKey: ['heroes', page, name],
    queryFn: () => getHeroesList(page, name),
    keepPreviousData: true,
    onSuccess: (data) => {
      if (page === 1) {
        const heroes = JSON.parse(localStorage.getItem('heroes') || '[]');
        return dispatch(setHeroes([...heroes, ...data]));
      }
      return dispatch(setHeroes(data));
    },
    onError: () => {
      toast.error('Something went wrong. Please try again later');
    },
  });

  return { isLoading: isFetching || isLoading, data: heroes };
};
