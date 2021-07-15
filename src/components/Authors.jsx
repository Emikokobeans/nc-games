import { Link } from 'react-router-dom';

const Authors = ({ reviews }) => {
  return (
    <section className='Authors'>
      <ul>
        {reviews.map((review) => {
          return (
            <li key={review.owner}>
              <Link to={`/authors/${review.owner}`} key={review / review.owner}>
                {review.owner}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Authors;

//how to list the users/owners without repeating?
//Link to the reviews each owner has written.
