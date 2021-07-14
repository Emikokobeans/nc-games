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
      <ul>
        {reviews.map((review) => {
          return (
            <li key={review.review_id}>
              <Link to={`/review/${review.review_id}`} key={review.review_id}>
                {review.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Reviews;
