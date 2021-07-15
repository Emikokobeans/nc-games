import { useState, useEffect } from 'react';
import { getReviewComments } from '../utils/api';

const Comments = (review_id) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getReviewComments(review_id).then((response) => {
      setComments(response);
    });
  }, []);
  console.log(comments);

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
    </section>
  );
};

export default Comments;

//Failed to load resource - 400 bad request error
