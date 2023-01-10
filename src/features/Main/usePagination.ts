import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const usePagination = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const tmp = searchParams.get('page');
  const pageQueryParam = tmp === null ? 1 : Number.parseInt(tmp, 10);

  const [page, setPage] = useState(pageQueryParam);

  useEffect(() => {
    if (pageQueryParam !== page) {
      setPage(pageQueryParam);
    }
  }, [pageQueryParam, page]);

  return { page, setSearchParams };
};
