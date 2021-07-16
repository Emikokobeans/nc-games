import axios from 'axios';

const gamesApi = axios.create({
  baseURL: 'https://emi-games.herokuapp.com/api'
});

export const getCategories = async () => {
  const { data } = await gamesApi.get('/categories');
  return data.categories;
};

export const getReviews = async (query) => {
  const { data } = await gamesApi.get('/reviews', {
    params: query
  });
  return data.reviews;
};

export const getReviewById = async (reviewId) => {
  const { data } = await gamesApi.get(`/reviews/${reviewId}`);
  return data.review[0];
};

export const getReviewComments = async (reviewId) => {
  const { data } = await gamesApi.get(`/reviews/${reviewId}/comments`);
  return data.comments;
};

export const patchReviewPlus = async (reviewId) => {
  const { data } = await gamesApi.patch(`/reviews/${reviewId}`, {
    inc_votes: 1
  });
  return data.review;
};

export const patchReviewMinus = async (reviewId) => {
  const { data } = await gamesApi.patch(`/reviews/${reviewId}`, {
    inc_votes: -1
  });
  return data.review;
};

export const postReview = async (reviewId, newReview) => {
  const { data } = await gamesApi.post(
    `/reviews/${reviewId}/comments`,
    newReview
  );
  return data.review;
};

export const getUsers = async () => {
  const { data } = await gamesApi.get('/users');
  return data.users;
};
