import axios from 'axios';
import { API_ORIGIN, TWEET_ENDPOINT, TWEET_DETAIL_ENDPOINT } from '@/assets/constantEnv';
const tweetApi = axios.create({
  baseURL: API_ORIGIN,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('userToken')}`
  }
});

const postTweet = (tweet) => tweetApi.post(TWEET_ENDPOINT, tweet).then((res) => res.data);