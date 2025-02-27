import { createFileRoute, Outlet, useMatchRoute } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { Link } from '@tanstack/react-router';
import { useState } from 'react';

export const Route = createFileRoute('/dashboard/_dashboard')({
  component: RouteComponent,
});

const sidebarItems = [
  { name: 'Overview', path: '/dashboard', icon: '📊' },
  { name: 'Raffles', path: '/dashboard/raffles', icon: '🎲' },
  { name: 'Communities', path: '/dashboard/communities', icon: '👥' },
  { name: 'Analytics', path: '/dashboard/analytics', icon: '📈' },
  { name: 'Settings', path: '/dashboard/settings', icon: '⚙️' },
];

function RouteComponent() {
  const matchRoute = useMatchRoute();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black flex flex-col md:flex-row">
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
        } md:block w-full md:w-64 border-r border-purple-800/30 p-6 bg-black md:relative fixed inset-0 z-50`}
      >
        <Link to="/" className="hidden md:block text-2xl font-bold text-white mb-8">
          BLACKJACK
        </Link>
        <ul className="space-y-2">
          {sidebarItems.map((item) => {
            const isActive = item.path === '/dashboard/settings'
              ? matchRoute({ to: item.path, fuzzy: true })
              : matchRoute({ to: item.path });
            return (
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
          })}
        </ul>
      </motion.nav>

      <main className="flex-1 p-4 md:p-8">
        <Outlet />
      </main>
    </div>
  );
}
