import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Reviews from './Reviews';
import { getReviewsByCategory } from '../utils/api';

const CategoryReviews = ({ reviews, setReviews }) => {
  const { category } = useParams();

  useEffect(() => {
    getReviewsByCategory(category).then((response) => {
      setReviews(response);
    });
  }, [category]);

  return (
    <div>
      <h2>{category} Reviews</h2>
      <Reviews reviews={reviews}></Reviews>
    </div>
  );
};

export default CategoryReviews;
