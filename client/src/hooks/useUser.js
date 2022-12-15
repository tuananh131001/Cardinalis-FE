import { useMutation, useQueryClient } from '@tanstack/react-query';
import { registerUser, signUp, updateProfile } from '@/api/User';

const useRegister = () =>
  useMutation({
    mutationFn: (user) => registerUser(user),
    onSuccess: (data) => console.log(data),
    onError: (error, data) => console.log(error, data)
  });

const useSignUp = () =>
  useMutation({
    mutationFn: (user) => signUp(user),
    onSuccess: (data) => console.log(data),
    onError: (error) => console.log(error)
  });

const useUpdateProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (user) => updateProfile(user),
    onSuccess: (data) => queryClient.setQueryData(['todo', { id: data.id }], data),
    onError: (error) => console.log(error)
  });
};

export { useSignUp, useRegister, useUpdateProfile };
