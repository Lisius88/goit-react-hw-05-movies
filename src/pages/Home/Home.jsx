import { Navigation } from 'components/Navigation/Navigation';
import { useState, useEffect, lazy, Suspense } from 'react';
import { TrendingTitle } from './Home.styled';
import { Loader } from 'components/Loader/Loader';
import toast, { Toaster } from 'react-hot-toast';

const HomeMovies = lazy(() => import('../../components/HomeMovies/HomeMovies'));

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/trending/movie/day?api_key=1db4141403b8f52722dd71f31d913046'
    )
      .then(resp => {
        if (resp.ok) {
          return resp.json();
        }
        Promise.reject(new Error('Sorry, something is not OK. Try again'));
      })
      .then(data => {
        setMovies(data.results);
      })
      .catch(error => setError(error));
  }, []);

  return (
    <>
      {error && toast.error('Sorry, something is not OK. Try again')}
      <Navigation />
      <TrendingTitle>Trending today</TrendingTitle>
      <Suspense fallback={<Loader />}>
        <HomeMovies movies={movies} />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default Home;
