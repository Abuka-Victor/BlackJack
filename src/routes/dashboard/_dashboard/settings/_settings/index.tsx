import { createFileRoute } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import {
  Bell,
  UserCircle,
  TwitterLogo,
  Moon,
  Sun,
  DiscordLogo,
} from '@phosphor-icons/react';
import { useState } from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';

import { getUserData } from '../../../../../state/users';

export const Route = createFileRoute(
  '/dashboard/_dashboard/settings/_settings/'
)({
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(getUserData),
  component: Settings,
});

function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const { data } = useSuspenseQuery(getUserData);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="lg:col-span-2 space-y-8"
    >
      {/* Profile Section */}
      <div className="bg-black rounded-xl border border-purple-800/30 p-6">
        <h2 className="text-xl font-semibold text-white mb-6">
          Profile Settings
        </h2>
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 rounded-full bg-purple-900/30 flex items-center justify-center">
              {data?.imageUrl !== '' ? (
                <img
                  src={data?.imageUrl}
                  alt="Profile picture"
                  className="w-20 h-20 rounded-full"
                />
              ) : (
                <UserCircle size={48} className="text-purple-400" />
              )}
            </div>
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              Change Avatar
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Display Name"
              value={data?.discordData.username}
              disabled={true}
              className="bg-purple-900/10 border border-purple-800/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
            />
            <input
              type="email"
              placeholder="Email"
              value={data?.email}
              disabled={true}
              className="bg-purple-900/10 border border-purple-800/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
            />
          </div>
        </div>
      </div>

      {/* Connected Accounts */}
      <div className="bg-black rounded-xl border border-purple-800/30 p-6">
        <h2 className="text-xl font-semibold text-white mb-6">
          Connected Accounts
        </h2>
        <div className="space-y-4">
          {[
            {
              icon: <DiscordLogo size={24} />,
              name: 'Discord',
              connected: data?.discordVerified,
            },
            {
              icon: <TwitterLogo size={24} />,
              name: 'Twitter',
              connected: false,
            },
          ].map((account, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 rounded-lg bg-purple-900/10 border border-purple-800/20"
            >
              <div className="flex items-center space-x-4">
                <div className="text-purple-400">{account.icon}</div>
                <span className="text-white">{account.name}</span>
              </div>
              <button
                className={`px-4 py-2 rounded-lg ${
                  account.connected
                    ? 'bg-purple-900/20 text-purple-400'
                    : 'bg-purple-600 text-white hover:bg-purple-700'
                } transition-colors`}
              >
                {account.connected ? 'Connected' : 'Connect'}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Preferences */}
      <div className="bg-black rounded-xl border border-purple-800/30 p-6">
        <h2 className="text-xl font-semibold text-white mb-6">Preferences</h2>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Bell size={20} className="text-purple-400" />
              <span className="text-white">Notifications</span>
            </div>
            <button
              onClick={() => setNotifications(!notifications)}
              className={`w-12 h-6 rounded-full transition-colors ${
                notifications ? 'bg-purple-600' : 'bg-gray-600'
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full bg-white transition-transform ${
                  notifications ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {darkMode ? (
                <Moon size={20} className="text-purple-400" />
              ) : (
                <Sun size={20} className="text-purple-400" />
              )}
              <span className="text-white">Dark Mode</span>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`w-12 h-6 rounded-full transition-colors ${
                darkMode ? 'bg-purple-600' : 'bg-gray-600'
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full bg-white transition-transform ${
                  darkMode ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
