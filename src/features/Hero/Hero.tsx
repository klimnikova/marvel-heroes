import Category from '../Category/Category';
import Layout from '../Layout/Layout';
import Loader from '../Loader/Loader';
import { useHero } from './useHero';

const Hero = () => {
  const { isLoading, data: hero } = useHero();

  if (isLoading) {
    return <Loader />;
  }

  if (!hero) {
    return <p>NOT FOUND</p>;
  }

  return (
    <Layout>
      <section className='hero'>
        <img
          src={
            Object.keys(hero.thumbnail || {}).length
              ? `${hero.thumbnail?.path}.${hero.thumbnail?.extension}`
              : 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'
          }
          alt={hero.name}
          className='img-fluid'
        />
        <h1>{hero.name}</h1>
        <p>{hero.description}</p>
        {hero.comics.items[0].name && (
          <>
            <h6>Comics</h6>
            <Category category={hero.comics} />
          </>
        )}
        {hero.series.items[0].name && (
          <>
            <h6>Series</h6>
            <Category category={hero.series} />
          </>
        )}

        {hero.stories.items[0].name && (
          <>
            <h6>Stories</h6>
            <Category category={hero.stories} />
          </>
        )}
      </section>
    </Layout>
  );
};

export default Hero;
