import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

import { queryClient } from '../main';

import { createRaffle } from '../appwriteConfig';

export const useCreateRaffle = () => {
  return useMutation({
    mutationKey: ['create_raffle'],
    mutationFn: createRaffle,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['raffle', data?.$id] })
      toast.success('Raffle created successfully')
    },
    onError: (error) => {
      toast.error('Error creating raffle')
      console.log("The error creating raffle", error)
    },
  })
}