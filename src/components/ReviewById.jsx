import { useState, useEffect } from 'react';
import {
  getReviewById,
  getReviewComments,
  patchReviewMinus,
  patchReviewPlus
} from '../utils/api';
import { useParams } from 'react-router';
import Comments from './Comments';

const ReviewById = () => {
  const { review_id } = useParams();
  const [review, setReview] = useState({});
  const [comments, setComments] = useState([]);
  const [newVote, setNewVote] = useState(0);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    getReviewById(review_id).then((response) => {
      setReview(response);
    });
  }, []);

  useEffect(() => {
    getReviewComments(review_id).then((response) => {
      setComments(response);
    });
  }, []);

  const incVotes = () => {
    setHasError(false);
    setNewVote((currVotes) => {
      return currVotes + 1;
    });

    patchReviewPlus(review_id)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        setHasError(true);
        setNewVote(0);
      });
  };

  const decVotes = () => {
    setHasError(false);
    setNewVote((currVotes) => {
      return currVotes + 1;
    });
    patchReviewMinus(review_id)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        setHasError(true);
        setNewVote(0);
      });
  };

  if (review === {}) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{review.title}</h1>
      <p>{review.designer}</p>
      <p>{review.owner}</p>
      <img
        src={review.review_img_url}
        alt={review.title}
        className='Review__img'
      ></img>
      <p>{review.review_body}</p>
      <p>Votes: {review.votes + newVote}</p>
      {hasError && <p>Oh no! Something's gone wrong!</p>}
      <button disabled={newVote > 0} onClick={incVotes}>
        +1
      </button>
      <button disabled={newVote > 0} onClick={decVotes}>
        -1
      </button>

      <Comments comments={comments}></Comments>
    </div>
  );
};

export default ReviewById;
