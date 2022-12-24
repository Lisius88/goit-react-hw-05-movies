import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ReviewsList, ReviewsItem, NoReviews } from './Reviews.styled';

//https://api.themoviedb.org/3/movie/${movieID}/reviews?api_key=1db4141403b8f52722dd71f31d913046&language=en-US&page=1

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=1db4141403b8f52722dd71f31d913046&language=en-US&page=1`
    )
      .then(resp => resp.json())
      .then(data => {
        setReviews(data.results.slice(0, 10));
      });
  }, [movieId]);
  return (
    <div>
      <ReviewsList>
        {reviews.length === 0 && (
          <NoReviews>Sorry, there are no reviews</NoReviews>
        )}
        {reviews.length > 0 &&
          reviews.map(review => (
            <ReviewsItem key={review.id}>
              <h4>{review.author}</h4>
              <p>{review.content}</p>
              <p>{review.created_at}</p>
            </ReviewsItem>
          ))}
      </ReviewsList>
    </div>
  );
};

export default Reviews;
