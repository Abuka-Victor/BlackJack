import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { QueryClient } from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';

import './index.css';
import { ToastProvider } from './components/ui/Toast';

// Import the generated route tree
import { routeTree } from './routeTree.gen';

import { ConnectModalProvider } from './context/ConnectModalContext';
import { AuthProvider, useAuthContext } from './context/AuthContext';

export const queryClient = new QueryClient();

const persister = createSyncStoragePersister({
  storage: window.localStorage,
});

// Create a new router instance
const router = createRouter({
  routeTree,
  context: { queryClient, auth: undefined! },
  defaultPreload: 'intent',
  defaultPreloadStaleTime: 0,
  scrollRestoration: true,
});

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

function InnerApp() {
  const auth = useAuthContext();
  return <RouterProvider router={router} context={{ auth }} />;
}

// Render the app
const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <PersistQueryClientProvider
        client={queryClient}
        persistOptions={{ persister, maxAge: 1000 * 60 * 60 * 24 * 3 }}
      >
        <AuthProvider>
          <ConnectModalProvider>
            <InnerApp />
          </ConnectModalProvider>
        </AuthProvider>
      </PersistQueryClientProvider>
      <ToastProvider />
    </StrictMode>
  );
}
