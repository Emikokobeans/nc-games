import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getReviews } from '../utils/api';

const Reviews = ({ reviews, setReviews }) => {
  useEffect(() => {
    getReviews().then((reviewsFromApi) => {
      setReviews(reviewsFromApi);
    });
  }, []);

  return (
    <div className='Reviews'>
      {reviews.map((review) => {
        return (
          <Link to={`/reviews/${review.review_id}`} key={review.review_id}>
            {review.title}
          </Link>
        );
      })}
    </div>
  );
};

export default Reviews;
