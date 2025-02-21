import { createFileRoute } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import {
  Robot,
  ChartLineUp,
  Link as ChainLink,
  Users,
  Trophy,
  Crown,
} from '@phosphor-icons/react';

import { DiscordButton } from '../components/ui/DiscordButton';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black pointer-events-none" />

      <main className="relative container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl font-bold text-white mb-6 leading-tight"
          >
            The Ultimate Discord <br />
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Raffle Management
            </span>{' '}
            Platform
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 mb-12"
          >
            Streamline your community raffles with automated winner selection,
            multi-platform verification, and powerful analytics.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center space-x-4"
          >
            <DiscordButton />
            <motion.a
              href="/demo"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-2 rounded-lg border border-purple-500 text-purple-400 hover:bg-purple-500/10"
            >
              View Demo
            </motion.a>
          </motion.div>
        </div>

        {/* Feature Grid with Gradient Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-32">
          {[
            {
              title: 'Automated Raffles',
              description:
                'Set up once, run infinitely. Automatic winner selection and announcement.',
              icon: (
                <Robot size={32} weight="duotone" className="text-purple-400" />
              ),
            },
            {
              title: 'Multi-Chain Support',
              description:
                'Verify entries across Discord, Twitter, and blockchain wallets.',
              icon: (
                <ChainLink
                  size={32}
                  weight="duotone"
                  className="text-purple-400"
                />
              ),
            },
            {
              title: 'Real-time Analytics',
              description:
                'Track engagement, participation rates, and community growth.',
              icon: (
                <ChartLineUp
                  size={32}
                  weight="duotone"
                  className="text-purple-400"
                />
              ),
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-900 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000" />
              <div className="relative p-8 bg-black rounded-lg border border-purple-800/50">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              number: '12k',
              label: 'Discord servers',
              icon: (
                <Users size={32} weight="duotone" className="text-purple-400" />
              ),
            },
            {
              number: '36m+',
              label: 'Whitelisted',
              icon: (
                <Trophy size={32} weight="duotone" className="text-purple-400" />
              ),
            },
            {
              number: '180m+',
              label: 'Raffle entries',
              icon: (
                <Crown size={32} weight="duotone" className="text-purple-400" />
              ),
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-900 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000" />
              <div className="relative p-8 bg-black rounded-lg border border-purple-800/50">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <p className="text-3xl font-bold text-white">{stat.number}</p>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
