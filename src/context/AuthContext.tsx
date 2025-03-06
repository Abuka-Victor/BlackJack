import { createContext, ReactNode, useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Models } from 'appwrite';

import { getUserDetails, getUserSessionDetails } from '../appwriteConfig';
import { User } from '../types/User';

export interface AuthContextType {
  user: User | null | undefined;
  session: Models.Session | null | undefined;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>({
  user: null,
  session: null,
  isAuthenticated: false,
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { data: user } = useQuery({
    queryKey: ['user'],
    queryFn: getUserDetails,
  });

  const { data: session } = useQuery({
    queryKey: ['session'],
    queryFn: getUserSessionDetails,
    enabled: !!user,
  });

  const isAuthenticated = !!user && !!session;

  return (
    <AuthContext.Provider value={{ user, session, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthContext must be used within a AuthContextProvider');
  }
  return context;
}
