import { useState, useEffect } from 'react';
import { getReviewComments, postReview } from '../utils/api';
import { useParams } from 'react-router';

const Comments = ({ setReviews }) => {
  const [comments, setComments] = useState([]);
  const { review_id } = useParams();
  const [newCommentBody, setNewCommentBody] = useState('');

  useEffect(() => {
    getReviewComments(review_id).then((response) => {
      setComments(response);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newReview = {
      username: 'weegembump',
      body: newCommentBody
    };
    postReview(review_id, newReview).then((newReview) => {
      setReviews((currReviews) => {
        const newReviews = [newReview, ...currReviews];
        return newReviews;
      });
    });
  };

  return (
    <section className=''>
      <h2>Comments</h2>
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <p>{comment.created_at}</p>
              <p>{comment.body}</p>
              <p>Comment written by: {comment.author}</p>
            </li>
          );
        })}
      </ul>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <label htmlFor='comment'>
          Comment:
          <textarea
            value={newCommentBody}
            onChange={(event) => setNewCommentBody(event.target.value)}
          ></textarea>
        </label>
        <button>Submit</button>
      </form>
    </section>
  );
};

export default Comments;

//add confirmation that comment was posted and refresh when posted
