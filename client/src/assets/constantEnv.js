export const API_ORIGIN = import.meta.env.VITE_REACT_APP_API_ORIGIN || 'http://cardinalis-be.live/';
export const LOGIN_ENDPOINT = import.meta.env.VITE_REACT_APP_LOGIN_ENDPOINT || 'user/login';
export const REGISTER_ENDPOINT =
  import.meta.env.VITE_REACT_APP_REGISTER_ENDPOINT || 'user/register';
export const LOGOUT_ENDPOINT = import.meta.env.VITE_REACT_APP_LOGOUT_ENDPOINT || 'user/logout';
export const FACEBOOK_LOGIN_ENDPOINT = '/oauth2/authorization/facebook';
export const GOOGLE_LOGIN_ENDPOINT = '/oauth2/authorization/google';

export const USER_ENDPOINT = import.meta.env.VITE_REACT_APP_USER_ENDPOINT || 'user';
export const GET_USER_ENDPOINT = import.meta.env.VITE_REACT_APP_GET_USER_ENDPOINT || 'user/fetch/';
export const GET_USER_BY_EMAIL_ENDPOINT =
  import.meta.env.VITE_REACT_APP_GET_USER_ENDPOINT || 'user/fetch';
export const TWEET_ENDPOINT = import.meta.env.VITE_REACT_APP_TWEET_ENDPOINT || 'tweets/';
export const TWEET_DETAIL_ENDPOINT =
  import.meta.env.VITE_REACT_APP_TWEET_DETAIL_ENDPOINT || 'tweet';
export const USER_FOLLOW_ENDPOINT =
  import.meta.env.VITE_REACT_APP_USER_FOLLOW_ENDPOINT || 'user/follow';
export const USER_FOLLOWERS_ENDPOINT = 'user/followers/';
export const USER_FOLLOWING_ENDPOINT = 'user/following/';
export const USER_SEARCH_ENDPOINT =
  import.meta.env.VITE_REACT_APP_SEARCH_USER_ENDPOINT || 'user/search';
export const TWEET_EXPLORE_ENDPOINT =
  import.meta.env.VITE_REACT_APP_EXPLORE_TWEET_ENDPOINT_EXPLORE || 'tweets';
export const TWEET_FAVORITE_ENDPOINT =
  import.meta.env.VITE_REACT_APP_FAVORITE_TWEET_ENDPOINT_FAVORITE || 'favoritetweets';
export const TWEET_REPLY_ENDPOINT =
  import.meta.env.VITE_REACT_APP_REPLY_TWEET_ENDPOINT_REPLY || 'replies';
