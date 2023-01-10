import { Link } from 'react-router-dom';

export function HeroesPagination({ page }: { page: number }) {
  return (
    <div className='text-center'>
      {page === 0 ? (
        <button type='button' className='btn btn-primary me-2' disabled>
          ‹ Previous
        </button>
      ) : (
        <Link to={`?page=${page - 1}`} className='btn btn-primary me-2'>
          ‹ Previous
        </Link>
      )}
      <Link to={`?page=${page + 1}`} className='btn btn-primary'>
        Next ›
      </Link>
    </div>
  );
}
