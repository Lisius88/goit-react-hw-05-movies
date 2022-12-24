import {
  TrendingList,
  TrendingCard,
  TrendingItem,
} from './TrendingMovies.styled';
import { Link, useLocation } from 'react-router-dom';

const TrendingMovies = ({ movies }) => {
  const location = useLocation();
  return (
    <section>
      <TrendingList>
        {movies.map(
          ({ id, name, title, poster_path, release_date, first_air_date }) => (
            <TrendingItem key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                {poster_path !== null && (
                  <TrendingCard
                    src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                    alt={name}
                  />
                )}
                {poster_path === null && (
                  <TrendingCard
                    src={`https://www.jaipuriaschoolpatna.in/wp-content/uploads/2016/11/blank-img.jpg`}
                    alt={name}
                  />
                )}
                <h3>{name ?? title}</h3>
                <p>{release_date ?? first_air_date}</p>
              </Link>
            </TrendingItem>
          )
        )}
      </TrendingList>
    </section>
  );
};

export default TrendingMovies;
