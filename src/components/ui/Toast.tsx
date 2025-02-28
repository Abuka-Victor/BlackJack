import { Toaster } from 'sonner';

export function ToastProvider() {
  return (
    <Toaster
      theme="dark"
      position="top-right"
      toastOptions={{
        style: {
          background: 'rgb(17, 17, 17)',
          border: '1px solid rgba(147, 51, 234, 0.3)',
          color: 'white',
        },
      }}
    />
  );
}
