import { motion } from 'framer-motion';
import { Link } from '@tanstack/react-router';

const sidebarItems = [
  { name: 'Overview', path: '/dashboard', icon: '📊' },
  { name: 'Raffles', path: '/dashboard/raffles', icon: '🎲' },
  { name: 'Communities', path: '/dashboard/communities', icon: '👥' },
  { name: 'Analytics', path: '/dashboard/analytics', icon: '📈' },
  { name: 'Settings', path: '/dashboard/settings', icon: '⚙️' },
];

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-black flex">
      <motion.nav 
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        className="w-64 border-r border-purple-800/30 p-6"
      >
        <Link to="/" className="text-2xl font-bold text-white mb-8 block">BLACKJACK</Link>
        <ul className="space-y-2">
          {sidebarItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className="flex items-center space-x-3 px-4 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-purple-900/20 transition-colors"
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </motion.nav>
      
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}