import {
  createFileRoute,
  Outlet,
  redirect,
  useMatchRoute,
  useNavigate,
} from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { Link } from '@tanstack/react-router';
import { useState } from 'react';
import {
  House,
  Ticket,
  Users,
  ChartLineUp,
  Gear,
  MagnifyingGlass,
  SignOut,
} from '@phosphor-icons/react';
import { useSuspenseQuery } from '@tanstack/react-query';

import { getUserData, useLogoutUser } from '../../state/users';
import { toast } from 'sonner';

export const Route = createFileRoute('/dashboard/_dashboard')({
  component: RouteComponent,
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(getUserData),
  onError: (error) => {
    console.error('Error fetching user data:', error);
    redirect({ to: '/' });
  },
});

const sidebarItems = [
  {
    name: 'Overview',
    path: '/dashboard',
    icon: <House size={20} weight="duotone" />,
  },
  {
    name: 'Raffles',
    path: '/dashboard/raffles',
    icon: <Ticket size={20} weight="duotone" />,
  },
  {
    name: 'Browse',
    path: '/dashboard/browse',
    icon: <MagnifyingGlass size={20} weight="duotone" />,
  },
  {
    name: 'Communities',
    path: '/dashboard/communities',
    icon: <Users size={20} weight="duotone" />,
  },
  {
    name: 'Analytics',
    path: '/dashboard/analytics',
    icon: <ChartLineUp size={20} weight="duotone" />,
  },
  {
    name: 'Settings',
    path: '/dashboard/settings',
    icon: <Gear size={20} weight="duotone" />,
  },
  {
    name: 'Logout',
    path: '/',
    icon: <SignOut size={20} weight="duotone" />,
  },
];

function RouteComponent() {
  const matchRoute = useMatchRoute();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { mutate: Logout } = useLogoutUser();
  const navigate = useNavigate();
  const userQuery = useSuspenseQuery(getUserData);
  const user = userQuery.data;

  if (user === null || user === undefined) {
    toast.error('User not authenticated');
    navigate({ to: '/' });
  }

  return (
    <div className="h-screen bg-black flex flex-col md:flex-row overflow-hidden">
      {/* Mobile Menu Button */}
      <div className="md:hidden p-4 border-b border-purple-800/30">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-white">
            BLACKJACK
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-white hover:bg-purple-900/20 rounded-lg"
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Sidebar Navigation */}
      <motion.nav
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        className={`${
          isMobileMenuOpen ? 'block' : 'hidden'
        } md:block w-full md:w-64 border-r border-purple-800/30 p-6 bg-black md:relative fixed inset-0 z-50 flex-shrink-0`}
      >
        <Link
          to="/"
          className="hidden md:block text-2xl font-bold text-white mb-8"
        >
          BLACKJACK
        </Link>
        <ul className="space-y-2">
          {sidebarItems.map((item) => {
            const isActive =
              item.path === '/dashboard/settings'
                ? matchRoute({ to: item.path, fuzzy: true })
                : matchRoute({ to: item.path });

            const RETURNABLE =
              item.name === 'Logout' ? (
                <li key={item.name}>
                  <button
                    onClick={() => {
                      Logout();
                      setIsMobileMenuOpen(false);
                    }}
                    className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors cursor-pointer ${
                      isActive
                        ? 'text-white bg-purple-600/20 border border-purple-500/30'
                        : 'text-gray-400 hover:text-white hover:bg-purple-900/20'
                    }`}
                  >
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                  </button>
                </li>
              ) : (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                      isActive
                        ? 'text-white bg-purple-600/20 border border-purple-500/30'
                        : 'text-gray-400 hover:text-white hover:bg-purple-900/20'
                    }`}
                  >
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              );
            return RETURNABLE;
          })}
        </ul>
      </motion.nav>

      <main className="flex-1 overflow-auto">
        <div className="p-4 md:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
