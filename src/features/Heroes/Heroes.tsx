import { Link } from 'react-router-dom';

import { Hero } from '../../api/heroes/types';
import Loader from '../Loader/Loader';

import './Heroes.scss';

const Heroes = ({
  heroes,
  isLoading,
}: {
  heroes: Hero[] | undefined;
  isLoading: boolean;
}) => {
  if (isLoading) {
    return <Loader />;
  }

  if (!heroes || heroes.length === 0) {
    return <p>No results found :(</p>;
  }
  return (
    <div className='row g-3 mt-0 mb-3'>
      {heroes.map((hero) => (
        <div key={hero.id} className='col'>
          <div className='card h-100 heroes__card'>
            <img
              src={
                Object.keys(hero.thumbnail || {}).length
                  ? `${hero.thumbnail?.path}.${hero.thumbnail?.extension}`
                  : 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'
              }
              alt={hero.name}
              className='card-img-top'
            />
            <div className='card-body'>
              <h5 className='card-title'>{hero.name}</h5>
              <p>{hero.description}</p>
            </div>
            <div className='card-footer border-top-0'>
              <Link to={`/heroes/${hero.id}`}>Details</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Heroes;
