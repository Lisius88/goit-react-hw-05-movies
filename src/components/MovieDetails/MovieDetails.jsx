import { Navigation } from 'components/Navigation/Navigation';
import { NavLink, Outlet, useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Descr } from './MovieDetails.styled';
import { BackLink } from 'components/BackLink/BackLink';
import { Loader } from 'components/Loader/Loader';
import styled from '@emotion/styled';

const StyledLink = styled(NavLink)`
  display: block;
  padding: 12px;
  font-size: 18px;
  color: #ffffff;

  &.active {
    color: orange;
  }
`;

const MovieDetails = () => {
  const [
    {
      poster_path,
      backdrop_path,
      genres,
      overview,
      title,
      release_date,
      vote_average,
    },
    setFilm,
  ] = useState({});
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=1db4141403b8f52722dd71f31d913046&language=en-US`
    )
      .then(resp => resp.json())
      .then(data => {
        setFilm(data);
      })
      .catch()
      .finally(() => {
        setLoading(false);
      });
  }, [movieId]);

  const genresList = genres?.map(genre => genre.name).join(', ');
  const release = release_date?.slice(0, 4);

  return (
    <>
      {loading && <Loader />}
      <Navigation />
      <BackLink to={backLinkHref}>Back to movies</BackLink>
      <div
        style={{
          display: 'flex',
          marginTop: '-19px',
          marginLeft: 'auto',
          marginRight: 'auto',
          justifyContent: 'center',
        }}
      >
        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" />
        {loading === false && (
          <Descr
            style={{
              backgroundImage: `linear-gradient(rgba(2,0,36,0.5) 0%, rgba(0,0,0,0.5) 100%), url(https://image.tmdb.org/t/p/original${backdrop_path})`,
              backgroundSize: 'cover',
            }}
          >
            <h2 style={{ marginBottom: '15px' }}>
              {title}({release})
            </h2>
            <h3>Genres</h3>
            <p style={{ marginBottom: '15px' }}>{genresList}</p>
            <h3>Rating</h3>
            <p style={{ marginBottom: '15px' }}>{vote_average}</p>
            <h3>Overview</h3>
            <p>{overview}</p>
          </Descr>
        )}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <StyledLink
          to={'cast'}
          state={{ from: location.state ? location.state.from : '/' }}
        >
          Cast
        </StyledLink>
        <StyledLink
          to={'reviews'}
          state={{ from: location.state ? location.state.from : '/' }}
        >
          Reviews
        </StyledLink>
      </div>
      <Outlet />
    </>
  );
};

export default MovieDetails;
