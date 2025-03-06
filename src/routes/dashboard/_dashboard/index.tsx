import { createFileRoute } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { XLogo, DiscordLogo, Wallet } from '@phosphor-icons/react';

export const Route = createFileRoute('/dashboard/_dashboard/')({
  component: Dashboard,
});

function Dashboard() {
  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
      >
        {[
          { label: 'Active Raffles', value: '12', trend: '+2 this week' },
          {
            label: 'Total Participants',
            value: '2.4k',
            trend: '+18% vs last week',
          },
          { label: 'Success Rate', value: '98%', trend: '+5% vs last month' },
        ].map((stat, index) => (
          <div
            key={index}
            className="p-6 rounded-lg bg-purple-900/20 border border-purple-800/30"
          >
            <h3 className="text-gray-400 text-sm">{stat.label}</h3>
            <p className="text-3xl font-bold text-white mt-2">{stat.value}</p>
            <p className="text-green-400 text-sm mt-1">{stat.trend}</p>
          </div>
        ))}
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-6 rounded-lg bg-black border border-purple-800/30"
        >
          <h2 className="text-xl font-bold text-white mb-4">Recent Raffles</h2>
          <div className="space-y-4">
            {[
              {
                name: 'NFT Whitelist Spots',
                entries: '1.2k',
                status: 'Active',
              },
              {
                name: 'Community Token Drop',
                entries: '856',
                status: 'Ended',
              },
              {
                name: 'Early Access Passes',
                entries: '2.1k',
                status: 'Active',
              },
            ].map((raffle, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 rounded-lg bg-purple-900/10"
              >
                <div>
                  <h3 className="text-white font-medium">{raffle.name}</h3>
                  <p className="text-gray-400 text-sm">
                    {raffle.entries} entries
                  </p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    raffle.status === 'Active'
                      ? 'bg-green-900/20 text-green-400'
                      : 'bg-gray-800 text-gray-400'
                  }`}
                >
                  {raffle.status}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="p-6 rounded-lg bg-black border border-purple-800/30"
        >
          <h2 className="text-xl font-bold text-white mb-4">
            Connected Platforms
          </h2>
          <div className="space-y-4">
            {[
              {
                platform: 'Discord',
                status: 'Connected',
                icon: <DiscordLogo size={24} className="text-purple-600" />,
              },
              {
                platform: 'X(Twitter)',
                status: 'Not Connected',
                icon: <XLogo size={24} className="text-purple-600" />,
              },
              {
                platform: 'Ethereum Wallet',
                status: 'Not Connected',
                icon: <Wallet size={24} className="text-purple-600" />,
              },
            ].map((platform, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 rounded-lg bg-purple-900/10"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{platform.icon}</span>
                  <span className="text-white">{platform.platform}</span>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    platform.status === 'Connected'
                      ? 'bg-green-900/20 text-green-400'
                      : 'bg-gray-800 text-gray-400'
                  }`}
                >
                  {platform.status}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
