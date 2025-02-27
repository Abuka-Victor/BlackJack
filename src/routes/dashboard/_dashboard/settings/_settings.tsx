import {
  createFileRoute,
  Outlet,
  Link,
  useMatchRoute,
} from '@tanstack/react-router';
import { motion } from 'framer-motion';
import {
  Bell,
  Globe,
  Lock,
  UserCircle,
  Gear,
  PaintBrush,
} from '@phosphor-icons/react';
import { useState } from 'react';

const settingsNavItems = [
  {
    icon: <UserCircle size={20} />,
    label: 'Profile',
    path: '/dashboard/settings/',
  },
  {
    icon: <Bell size={20} />,
    label: 'Notifications',
    path: '/dashboard/settings/notifications',
  },
  {
    icon: <Lock size={20} />,
    label: 'Security',
    path: '/dashboard/settings/security',
  },
  {
    icon: <Globe size={20} />,
    label: 'Language',
    path: '/dashboard/settings/language',
  },
  {
    icon: <PaintBrush size={20} />,
    label: 'Appearance',
    path: '/dashboard/settings/appearance',
  },
  {
    icon: <Gear size={20} />,
    label: 'Advanced',
    path: '/dashboard/settings/advanced',
  },
];

export const Route = createFileRoute(
  '/dashboard/_dashboard/settings/_settings'
)({
  component: RouteComponent,
});

function RouteComponent() {
  const matchRoute = useMatchRoute();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        {/* Header with Mobile Menu Button */}
        <div className="flex flex-col mb-8 md:mb-12">
          <div className="flex items-center justify-between mb-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl md:text-4xl font-bold text-white"
            >
              Settings
            </motion.h1>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white hover:bg-purple-900/20 rounded-lg"
            >
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
          <p className="text-gray-400">
            Manage your account preferences and configurations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Settings Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`${
              isMobileMenuOpen ? 'block' : 'hidden'
            } lg:block lg:col-span-1 fixed lg:relative inset-0 z-50 bg-black lg:bg-transparent p-4 lg:p-0`}
          >
            <div className="bg-black rounded-xl border border-purple-800/30 p-6">
              <nav className="space-y-2">
                {settingsNavItems.map((item, index) => {
                  const isActive = matchRoute({ to: item.path });
                  return (
                    <Link
                      key={index}
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                        isActive
                          ? 'text-white bg-purple-600/20 border border-purple-500/30'
                          : 'text-gray-400 hover:text-white hover:bg-purple-900/20'
                      }`}
                    >
                      <div
                        className={
                          isActive ? 'text-purple-400' : 'text-gray-400'
                        }
                      >
                        {item.icon}
                      </div>
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>
          </motion.div>

          <div className="lg:col-span-2">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
