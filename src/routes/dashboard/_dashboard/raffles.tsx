import { createFileRoute } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Ticket } from '@phosphor-icons/react';

import { CreateRaffleModal } from '../../../components/ui/CreateRaffleModal';

export const Route = createFileRoute('/dashboard/_dashboard/raffles')({
  component: RafflesPage,
});

function RafflesPage() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white">Raffle Management</h1>
          <p className="text-gray-400 text-sm mt-1">Create and manage your raffle campaigns</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={() => setIsCreateModalOpen(true)}
          className="w-full sm:w-auto px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2"
        >
          <Ticket size={20} />
          <span>Create Raffle</span>
        </motion.button>
      </div>

      {/* Raffle Filters */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {['All', 'Active', 'Ended', 'Draft'].map((filter) => (
          <button
            key={filter}
            className="px-4 py-2 rounded-lg bg-purple-900/20 border border-purple-800/30 text-gray-400 hover:text-white hover:border-purple-600 transition-colors"
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Raffles List */}
      <div className="space-y-4">
        {[
          {
            name: 'NFT Whitelist Spots',
            entries: '1.2k',
            status: 'Active',
            endDate: '2024-03-01',
            requirements: ['Discord', 'Twitter'],
          },
          {
            name: 'Community Token Drop',
            entries: '856',
            status: 'Ended',
            endDate: '2024-02-28',
            requirements: ['Discord', 'NFT Holder'],
          },
          {
            name: 'Early Access Passes',
            entries: '2.1k',
            status: 'Active',
            endDate: '2024-03-05',
            requirements: ['Discord', 'Twitter', 'Wallet'],
          },
        ].map((raffle, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-6 rounded-lg bg-black border border-purple-800/30 hover:border-purple-600/50 transition-all"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {raffle.name}
                </h3>
                <div className="flex items-center space-x-4 text-sm">
                  <span className="text-gray-400">
                    {raffle.entries} entries
                  </span>
                  <span className="text-gray-400">Ends: {raffle.endDate}</span>
                </div>
                <div className="flex items-center space-x-2 mt-3">
                  {raffle.requirements.map((req, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded-full bg-purple-900/20 text-purple-400"
                    >
                      {req}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    raffle.status === 'Active'
                      ? 'bg-green-900/20 text-green-400'
                      : 'bg-gray-800 text-gray-400'
                  }`}
                >
                  {raffle.status}
                </span>
                <button className="p-2 text-gray-400 hover:text-white">
                  <span>⋮</span>
                </button>
              </div>
            </div>
          </motion.div>
        ))}

        <CreateRaffleModal
          isOpen={isCreateModalOpen}
          onClose={() => setIsCreateModalOpen(false)}
        />
      </div>
    </div>
  );
}
