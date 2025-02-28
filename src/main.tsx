import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './index.css';
import { ToastProvider } from './components/ui/Toast';

// Import the generated route tree
import { routeTree } from './routeTree.gen';

import { ConnectModalProvider } from './context/ConnectModalContext';
import { AuthProvider } from './context/AuthContext';

export const queryClient = new QueryClient();

// Create a new router instance
const router = createRouter({
  routeTree,
  context: { queryClient },
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

// Render the app
const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <ConnectModalProvider>
            <RouterProvider router={router} />
          </ConnectModalProvider>
        </AuthProvider>
      </QueryClientProvider>
      <ToastProvider />
    </StrictMode>
  );
}
