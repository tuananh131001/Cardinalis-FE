//  user
export const defaultUser = {
  name: 'Hello',
  username: 'Matsuri',
  avatar:
    'https://images.unsplash.com/photo-1633531008092-055a03a8ea0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  background:
    'https://images.unsplash.com/photo-1610296669228-602fa827fc1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1550&q=80',
  numTweets: 1_00,
  followers: 3,
  following: 4,
  website: 'https://github.com/Puppychan',
  createdAt: '2021-11-02T21:33:45.249967',
  isYou: true,
  isHotUser: true,
  tweets: 1 // defaultTweetList
};
export const defaultUser2 = {
  name: 'Anya Folger',
  username: 'anya__folger',
  avatar:
    'https://images.unsplash.com/photo-1508280756091-9bdd7ef1f463?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2116&q=80',
  background:
    'https://images.unsplash.com/photo-1599623560574-39d485900c95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  numTweets: 1_00,
  followers: 3,
  following: 4,
  createdAt: '2022-11-02T21:33:45.249967',
  isYou: false,
  isFollowing: false,
  isHotUser: true
};
export const defaultUser3 = {
  name: 'Huhu',
  username: 'susei',
  avatar:
    'https://images.unsplash.com/photo-1672394423014-e0354d75b123?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
  background:
    'https://plus.unsplash.com/premium_photo-1669386062266-5b20b994f7cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
  numTweets: 1_00,
  followers: 3,
  following: 4,
  createdAt: '2022-11-02T21:33:45.249967',
  isYou: false,
  isFollowing: true
};
export const defaultUser4 = {
  name: 'Meowww',
  username: 'nyannyan',
  avatar:
    'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80',
  background:
    'https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2129&q=80',
  numTweets: 1_00,
  followers: 3,
  following: 4,
  createdAt: '2022-11-02T21:33:45.249967',
  isYou: false,
  isFollowing: true
};
export const defaultUser5 = {
  name: 'Puppy Chwan',
  username: 'wanwan',
  avatar:
    'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80',
  background:
    'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80',
  numTweets: 1_00,
  followers: 3,
  following: 4,
  createdAt: '2022-11-02T21:33:45.249967',
  isYou: false,
  isFollowing: true
};
export const youUser = defaultUser;
export const defaultFollowerList = [defaultUser2, defaultUser3];
export const defaultFollowingList = [defaultUser4, defaultUser5];

export const defaultUserList = [defaultUser, defaultUser2, defaultUser3];
export const getUserByUsername = (username) => {
  return defaultUserList.find((user) => user.username === username);
};
