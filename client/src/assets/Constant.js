export const SMALL_MOBILE_QUERY = '(max-width: 480px)';
export const MOBILE_QUERY = '(max-width: 766px)';
export const TABLET_QUERY = '(min-width: 766px)';
export const DESKTOP_QUERY = '(min-width: 1040px)';

export const FORGOT_PASSWORD_PATH = 'forgot-password';
export const LOGIN_PATH = '';
export const REGISTER_PATH = 'register';
export const HOME_PATH = 'home';
export const EXPLORE_PATH = 'explore';
export const BOOKMARK_PATH = 'bookmarks';
export const PROFILE_PATH = 'profile'; // check lai sau

// inside Profile
export const PROFILE_TWEET_PATH = '';
export const PROFILE_REPLIES_PATH = '/with_replies';
export const PROFILE_MEDIA_PATH = '/media';
export const PROFILE_FOLLOWERS_PATH = '/followers';
export const PROFILE_FOLLOWING_PATH = '/following';
export const PROFILE_NESTED_PATHS = [
  PROFILE_TWEET_PATH,
  PROFILE_REPLIES_PATH,
  PROFILE_MEDIA_PATH,
  PROFILE_FOLLOWERS_PATH,
  PROFILE_FOLLOWING_PATH
];

// Regex
export const urlRegex = /(https?:\/\/[^\s]+)/g;
// /https?:\/\/(?:www\.|[a-zA-Z]{2}\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\\+.~#?&//=]+)/g
