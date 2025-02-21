import { createContext, useContext, ReactNode, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

interface ConnectModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  platformStatuses: {
    discord: boolean;
    twitter: boolean;
    ethereum: boolean;
  };
}

const ConnectModalContext = createContext<ConnectModalContextType | undefined>(
  undefined
);

export function ConnectModalProvider({ children }: { children: ReactNode }) {
  const { data: platformStatuses } = useQuery({
    queryKey: ['platformConnections'],
    queryFn: async () => {
      // Replace with actual API call
      return {
        discord: false,
        twitter: false,
        ethereum: false,
      };
    },
  });

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ConnectModalContext.Provider
      value={{
        isOpen,
        openModal,
        closeModal,
        platformStatuses: platformStatuses || {
          discord: false,
          twitter: false,
          ethereum: false,
        },
      }}
    >
      {children}
    </ConnectModalContext.Provider>
  );
}

export function useConnectModal() {
  const context = useContext(ConnectModalContext);
  if (context === undefined) {
    throw new Error(
      'useConnectModal must be used within a ConnectModalProvider'
    );
  }
  return context;
}
