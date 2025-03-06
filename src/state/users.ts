import { queryOptions, useMutation } from '@tanstack/react-query'
import { toast } from 'sonner';

import { ConnectWithDiscord, LogoutUser, getUserDetails, getUserSessionDetails } from '../appwriteConfig'

import { queryClient } from '../main'

export const getUserData = queryOptions({
  queryKey: ['user'],
  queryFn: getUserDetails,
})

export const getSessionData = (enabled: boolean) => {
  return queryOptions({
    queryKey: ['session'],
    queryFn: getUserSessionDetails,
    enabled
  });

}


export const useConnectUserWithDiscord = () => {
  return useMutation({
    mutationKey: ['user_login_discord'],
    mutationFn: async () => {
      return await ConnectWithDiscord()
    },
    onSuccess: (data) => {
      console.log(data)
      queryClient.setQueryData(['user'], data);
    },
    onError: (error) => {
      toast.error('Failed to connect with Discord');
      console.log(error)
    }
  })
}

export const useLogoutUser = () => {
  return useMutation({
    mutationKey: ['user_logout'],
    mutationFn: LogoutUser,
    onSuccess: () => {
      queryClient.setQueryData(['user'], null)
      queryClient.setQueryData(['session'], null)
      queryClient.invalidateQueries({ queryKey: ['users'] })
      queryClient.invalidateQueries({ queryKey: ['session'] })
    },
  })
}


