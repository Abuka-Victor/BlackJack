import { createFileRoute, Outlet } from '@tanstack/react-router';

import Navbar from '../components/Navbar';

export const Route = createFileRoute('/_layout')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-purple-900">
      <Navbar />

      <Outlet />
    </div>
  );
}
