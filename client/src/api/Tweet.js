import axios from 'axios';
import {
  API_ORIGIN,
  TWEET_ENDPOINT,
  TWEET_DETAIL_ENDPOINT,
  TWEET_EXPLORE_ENDPOINT,
  TWEET_FAVORITE_ENDPOINT,
  TWEET_REPLY_ENDPOINT
} from '@/assets/constantEnv';
const tweetApi = axios.create({
  baseURL: API_ORIGIN,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('userToken')}`
  }
});

const headerConfig = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('userToken')}`,
    'Content-Type': 'application/json'
  }
};
const getTweetsByPage = async ({ paramPage = 0 }) =>
  tweetApi
    .get(`${TWEET_DETAIL_ENDPOINT}?page=${paramPage}`, { headers: headerConfig })
    .then((res) => res.data);

const postTweet = (tweet) => tweetApi.post(TWEET_DETAIL_ENDPOINT, tweet).then((res) => res.data);

const getExploreTweets = ({ pageParam = 0 }) => {
  return tweetApi.get(`${TWEET_EXPLORE_ENDPOINT}?pageNo=${pageParam}`).then((res) => res.data);
};
const getFavoriteTweets = ({ pageParam = 0 }) => {
  return tweetApi.get(`${TWEET_FAVORITE_ENDPOINT}?pageNo=${pageParam}`).then((res) => res.data);
};
const getReplyTweets = ({ pageParam = 0 }) => {
  return tweetApi.get(`${TWEET_REPLY_ENDPOINT}?pageNo=${pageParam}`).then((res) => res.data);
};

const getUserTweets = ({ queryKey, pageParam = 0 }) => {
  console.log(pageParam);
  return tweetApi
    .get(`${TWEET_ENDPOINT}?usermail=${queryKey[1]}&pageNo=${pageParam}`)
    .then((res) => res.data);
};

const deleteTweet = (id) =>
  tweetApi.delete(`${TWEET_DETAIL_ENDPOINT}/${id}`).then((res) => res.data);

const updateTweet = ({ data, id }) =>
  tweetApi.put(`${TWEET_DETAIL_ENDPOINT}/${id}`, { data, id }).then((res) => res.data);

const getFollowingTweets = () => tweetApi.get(TWEET_ENDPOINT).then((res) => res.data);

const getTweet = (id) => tweetApi.get(`${TWEET_DETAIL_ENDPOINT}?id=${id}`).then((res) => res.data);

export {
  getFollowingTweets,
  getFavoriteTweets,
  getReplyTweets,
  updateTweet,
  deleteTweet,
  postTweet,
  getTweet,
  getTweetsByPage,
  getExploreTweets,
  getUserTweets
};
