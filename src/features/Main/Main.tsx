import CreateHero from '../CreateHero/CreateHero';
import Heroes from '../Heroes/Heroes';
import Layout from '../Layout/Layout';
import { HeroesPagination } from '../Pagination/Pagination';
import Search from '../Search/Search';

import { useHeroesList } from './useHeroesList';
import { usePagination } from './usePagination';
import { useSearch } from './useSearch';

const Main = () => {
  const { debouncedSearchTerm, searchTerm, setSearchTerm } = useSearch();
  const { page, setSearchParams } = usePagination();

  const { isLoading, data } = useHeroesList(page, debouncedSearchTerm);

  const handleSearch = (value: string) => {
    if (value && page !== 1) {
      setSearchParams({ page: '1' });
      setSearchTerm(value);
    }
    setSearchTerm(value);
  };

  return (
    <Layout>
      <Search searchTerm={searchTerm} setSearchTerm={handleSearch} />
      <CreateHero />
      <Heroes heroes={data} isLoading={isLoading} />
      <HeroesPagination page={page} />
    </Layout>
  );
};

export default Main;
