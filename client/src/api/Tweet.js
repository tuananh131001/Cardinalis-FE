import axios from 'axios';
import { API_ORIGIN, TWEET_ENDPOINT, TWEET_DETAIL_ENDPOINT } from '@/assets/constantEnv';
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

const postTweet = (tweet) => tweetApi.post(TWEET_ENDPOINT, tweet).then((res) => res.data);

const deleteTweet = (id) =>
  tweetApi.delete(`${TWEET_DETAIL_ENDPOINT}/${id}`).then((res) => res.data);

const updateTweet = ({ data, id }) =>
  tweetApi.put(`${TWEET_DETAIL_ENDPOINT}/${id}`, { data, id }).then((res) => res.data);

const getFollowingTweets = () => tweetApi.get(TWEET_ENDPOINT).then((res) => res.data);

const getTweet = (id) => tweetApi.get(`${TWEET_DETAIL_ENDPOINT}/${id}`).then((res) => res.data);

export { getFollowingTweets, updateTweet, deleteTweet, postTweet, getTweet, getTweetsByPage };
