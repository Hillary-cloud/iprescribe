import { useMutation } from '@tanstack/react-query';
import apiService from '../services/api';

const useLogin = () => {
  return useMutation({
    mutationFn: apiService.login,
    onSuccess: (data) => {
      localStorage.setItem('token', data.data.token);
      localStorage.setItem('user', JSON.stringify(data.data.user));
    },
  });
};

export default useLogin;
