import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query';
import {
  registerUser,
  signIn,
  signInOauth2,
  updateProfile,
  getUserInfo,
  searchUsers,
  getUserFollowers,
  getUserFollowing,
  followUser,
  unfollowUser
} from '@/api/User';

const useRegister = (reset) =>
  useMutation({
    mutationFn: (user) => registerUser(user),
    onSuccess: (data) => {
      console.log(data);
      reset();
    },
    onError: (error, data) => console.log(error, data)
  });

const useSignIn = (reset) =>
  useMutation({
    mutationFn: (data) => signIn(data),
    onSuccess: () => {
      reset();
    },
    onError: (error) => {
      console.log(error);
    }
  });
const useSignInOauth2 = () =>
  // {type, token}
  useMutation({
    mutationFn: (dataToken) => signInOauth2(dataToken),
    onError: (error) => {
      console.log(error);
    }
  });

const useUpdateProfile = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (user) => updateProfile(user),
    onSuccess: (data) => queryClient.setQueryData(['user', { id: data.id }], data),
    onError: (error) => console.log(error)
  });
};

const useFollowUser = (users) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (users) => followUser(users),
    onSuccess: () => {
      queryClient.invalidateQueries(['followers', users.followingId]);
    }
  });
};

const useUnfollowUser = (users) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (users) => unfollowUser(users),
    onSuccess: () => {
      queryClient.invalidateQueries(['followers', users.followingId]);
    }
  });
};

const useGetUserInfo = (username) => {
  return useQuery({
    queryKey: ['user', username],
    queryFn: () => getUserInfo(username),
    enabled: Boolean(username)
  });
};

const useSearchUsers = (username) => {
  return useQuery({
    queryKey: ['search', username],
    queryFn: () => searchUsers(username),
    enabled: Boolean(username)
  });
};

const useGetUserFollowers = (userId) => {
  return useQuery({
    queryKey: ['followers', userId],
    queryFn: () => getUserFollowers(userId),
    enabled: Boolean(userId)
  });
};

const useGetUserFollowing = (userId) => {
  return useQuery({
    queryKey: ['following', userId],
    queryFn: () => getUserFollowing(userId),
    enabled: Boolean(userId)
  });
};

export {
  useSignIn,
  useSignInOauth2,
  useRegister,
  useUpdateProfile,
  useGetUserInfo,
  useSearchUsers,
  useGetUserFollowing,
  useGetUserFollowers,
  useFollowUser,
  useUnfollowUser
};
