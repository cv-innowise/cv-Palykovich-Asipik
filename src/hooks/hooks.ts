import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from '../store';
import { useQuery } from '@apollo/client';
import { GET_CURRENT_EMPLOYE } from '../services/user/query';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useCurrentUser = () => {
  const userId = localStorage.getItem('user_id');

  const { data, loading, error } = useQuery(GET_CURRENT_EMPLOYE, {
    variables: { userId: userId },
  });

  return {
    user: data?.user,
    loading,
    error,
  };
};
