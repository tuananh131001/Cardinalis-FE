import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query';
import { registerUser, signIn, updateProfile, getUserInfo } from '@/api/User';

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
    mutationFn: (user) => signIn(user),
    onSuccess: () => {
      reset();
    },
    onError: (error) => {
      console.log(error);
    }
  });

const useUpdateProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (user) => updateProfile(user),
    onSuccess: (data) => queryClient.setQueryData(['todo', { id: data.id }], data),
    onError: (error) => console.log(error)
  });
};

const useGetUserInfo = (username) => {
  console.log(username);
  return useQuery({
    queryKey: ['user', username],
    queryFn: () => getUserInfo(username),
    enabled: Boolean(username)
  });
};

export { useSignIn, useRegister, useUpdateProfile, useGetUserInfo };
