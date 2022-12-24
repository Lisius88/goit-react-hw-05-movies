import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CastList, Castitem, CastCard, NoCast } from './Cast.styled';

//`https://api.themoviedb.org/3/movie/{movieId}/credits?api_key=1db4141403b8f52722dd71f31d913046&language=en-US`

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=1db4141403b8f52722dd71f31d913046&language=en-US`
    )
      .then(resp => resp.json())
      .then(data => {
        setMovieCast(data.cast.slice(0, 9));
      });
  }, [movieId]);

  return (
    <div>
      {movieCast.length === 0 && (
        <NoCast>Sorry, there are no actors info</NoCast>
      )}
      {movieCast.length !== 0 && (
        <CastList>
          {movieCast.map(cast => (
            <Castitem key={cast.id}>
              {cast.profile_path !== null && (
                <CastCard
                  src={`https://image.tmdb.org/t/p/w200${cast.profile_path}`}
                  alt=""
                />
              )}
              {cast.profile_path === null && (
                <CastCard
                  src={`https://www.jaipuriaschoolpatna.in/wp-content/uploads/2016/11/blank-img.jpg`}
                  alt=""
                />
              )}
              <p>Character: {cast.character}</p>
              <p>Name: {cast.name}</p>
            </Castitem>
          ))}
        </CastList>
      )}
    </div>
  );
};

export default Cast;
