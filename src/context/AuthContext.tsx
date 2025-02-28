import { createContext, ReactNode, useContext } from 'react';
import { useQuery } from '@tanstack/react-query';

import { getUserDetails } from '../appwriteConfig';
import { User } from '../types/User';

interface AuthContextType {
  user: User | null | undefined;
}

const AuthContext = createContext<AuthContextType | undefined>({
  user: null,
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { data: user } = useQuery({
    queryKey: ['user'],
    queryFn: getUserDetails,
  });

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthContext must be used within a AuthContextProvider');
  }
  return context;
}
