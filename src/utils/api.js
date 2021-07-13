import axios from 'axios';

const gamesApi = axios.create({
  baseURL: 'https://emi-games.herokuapp.com/api'
});

export const getCategories = async () => {
  const { data } = await gamesApi.get('/categories');
  return data.categories;
};

export const getReviews = async () => {
  const { data } = await gamesApi.get('/reviews');
  return data.reviews;
};

export const getReviewById = async (reviewId) => {
  const { data } = await gamesApi.get(`/reviews/${reviewId}`);
  return data.review;
};

export const getReviewComments = async (reviewId) => {
  const { data } = await gamesApi.get(`/reviews/${reviewId}/comments`);
  return data.comments;
};

export const getReviewsByCategory = async (category) => {
  const { data } = await gamesApi.get(`/reviews?category=${category}`);
  return data.reviews;
};
