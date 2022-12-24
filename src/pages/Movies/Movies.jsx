import { Navigation } from 'components/Navigation/Navigation';
import { Loader } from 'components/Loader/Loader';
import { useState, useEffect, lazy, Suspense } from 'react';
import { useSearchParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const TrendingMovies = lazy(() =>
  import('../../components/TrendingMovies/TrendingMovies')
);
const SearchBar = lazy(() => import('../../components/SearchBar/SearchBar'));

// `https://api.themoviedb.org/3/search/movie?api_key=1db4141403b8f52722dd71f31d913046&language=en-US&query=${word}&page=1&include_adult=true`

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const onSubmitClick = value => {
    if (query !== value) {
      setMovies([]);
    }

    if (query === value) {
      return;
    }

    setSearchParams({ query: value });
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=1db4141403b8f52722dd71f31d913046&language=en-US&query=${query}&page=1&include_adult=true`
    )
      .then(resp => {
        if (resp.ok) {
          return resp.json();
        }
        Promise.reject(new Error('Sorry, something is not OK. Try again'));
      })
      .then(data => {
        if (query === null) {
          return;
        }
        if (data.results.length > 0) {
          setMovies(data.results);
        }
        if (data.total_results === 0) {
          toast.error('Try something else');
        }
      })
      .catch(error => {
        setError(error);
      });
  }, [query]);

  return (
    <>
      {error && toast.error('Sorry, something is not OK. Try again')}
      <Navigation />
      <Suspense fallback={<Loader />}>
        <SearchBar onSubmit={onSubmitClick} />
        <TrendingMovies movies={movies} />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default Movies;
