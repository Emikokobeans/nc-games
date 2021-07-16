import { useParams } from 'react-router-dom';
import Reviews from './Reviews';

const CategoryReviews = ({ reviews, setReviews }) => {
  const { category } = useParams();

  return (
    <div>
      <h2>{category} Reviews</h2>
      <Reviews
        category={category}
        reviews={reviews}
        setReviews={setReviews}
      ></Reviews>
    </div>
  );
};

export default CategoryReviews;

//Getting an unhandle rejection(typeerror): setreviews is not a function error - confused.
