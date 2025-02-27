import { createFileRoute } from '@tanstack/react-router';
import { motion } from 'framer-motion';

export const Route = createFileRoute('/dashboard/_dashboard/communities')({
  component: CommunitiesPage,
});

function CommunitiesPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-white">Communities</h1>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
        >
          Add Server
        </motion.button>
      </div>

      {/* Connected Servers */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            name: 'Crypto Alpha',
            members: '12.5k',
            activeRaffles: 3,
            icon: '🎮',
          },
          {
            name: 'NFT Collectors',
            members: '8.2k',
            activeRaffles: 1,
            icon: '🎨',
          },
          {
            name: 'DeFi Hub',
            members: '15.3k',
            activeRaffles: 2,
            icon: '💎',
          },
        ].map((server, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-6 rounded-lg bg-black border border-purple-800/30 hover:border-purple-600/50 transition-all"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-purple-900/20 flex items-center justify-center text-2xl">
                  {server.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {server.name}
                  </h3>
                  <p className="text-gray-400">{server.members} members</p>
                </div>
              </div>
              <button className="p-2 text-gray-400 hover:text-white">
                <span>⋮</span>
              </button>
            </div>

            <div className="mt-4 pt-4 border-t border-purple-800/30">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Active Raffles</span>
                <span className="text-purple-400">{server.activeRaffles}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
