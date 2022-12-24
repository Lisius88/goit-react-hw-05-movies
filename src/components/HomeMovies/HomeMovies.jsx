import { HomeCard, HomeList, HomeItem } from './HomeMovies.styled';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const HomeMovies = ({ movies }) => {
  const location = useLocation();
  return (
    <section>
      <HomeList>
        {movies.map(
          ({ id, name, title, poster_path, release_date, first_air_date }) => (
            <HomeItem key={id}>
              <Link to={`movies/${id}`} state={{ from: location }}>
                <HomeCard
                  src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                  alt={name}
                />
                <h3>{name ?? title}</h3>
                <p>{release_date ?? first_air_date}</p>
              </Link>
            </HomeItem>
          )
        )}
      </HomeList>
    </section>
  );
};

HomeMovies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
    })
  ),
};

export default HomeMovies;
