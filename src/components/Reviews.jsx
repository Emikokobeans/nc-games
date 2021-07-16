import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getReviews } from '../utils/api';
import OrderSelector from './OrderSelector';

const Reviews = ({ reviews, setReviews }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    getReviews(query).then((reviewsFromApi) => {
      setReviews(reviewsFromApi);
    });
  }, [query]);

  return (
    <div className='Reviews'>
      <OrderSelector setQuery={setQuery}></OrderSelector>
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
