import { createFileRoute } from '@tanstack/react-router';
import { motion } from 'framer-motion';

export const Route = createFileRoute('/demo')({
  component: Demo,
});

function Demo() {
  return (
    <div className="min-h-screen bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black pointer-events-none" />

      <main className="relative container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-white mb-8">
            Interactive Demo
          </h1>

          {/* Demo Raffle Creation */}
          <div className="bg-purple-900/20 rounded-lg p-8 mb-12 border border-purple-800/30">
            <h2 className="text-2xl font-bold text-white mb-6">
              Create a Raffle
            </h2>
            <div className="space-y-6">
              <div>
                <label className="block text-gray-400 mb-2">Raffle Name</label>
                <input
                  type="text"
                  placeholder="NFT Whitelist Spots"
                  className="w-full px-4 py-2 rounded-lg bg-black border border-purple-800/50 text-white focus:outline-none focus:border-purple-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-400 mb-2">Start Date</label>
                  <input
                    type="datetime-local"
                    className="w-full px-4 py-2 rounded-lg bg-black border border-purple-800/50 text-white focus:outline-none focus:border-purple-600"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">End Date</label>
                  <input
                    type="datetime-local"
                    className="w-full px-4 py-2 rounded-lg bg-black border border-purple-800/50 text-white focus:outline-none focus:border-purple-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-400 mb-2">
                  Entry Requirements
                </label>
                <div className="space-y-3">
                  {[
                    { label: 'Must be in Discord server', checked: true },
                    { label: 'Must follow on Twitter', checked: false },
                    { label: 'Must hold NFT', checked: false },
                  ].map((requirement, index) => (
                    <label key={index} className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        defaultChecked={requirement.checked}
                        className="w-5 h-5 rounded border-purple-800 text-purple-600 focus:ring-purple-600 focus:ring-offset-black"
                      />
                      <span className="text-white">{requirement.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Create Demo Raffle
              </motion.button>
            </div>
          </div>

          {/* Demo Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-lg bg-black border border-purple-800/30"
            >
              <h3 className="text-xl font-bold text-white mb-4">
                Winner Selection
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg bg-purple-900/10">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">👤</span>
                    <div>
                      <p className="text-white">Random Selection</p>
                      <p className="text-sm text-gray-400">Fair & verifiable</p>
                    </div>
                  </div>
                  <button className="px-4 py-1 rounded-full bg-purple-600 text-white text-sm">
                    Try Demo
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="p-6 rounded-lg bg-black border border-purple-800/30"
            >
              <h3 className="text-xl font-bold text-white mb-4">
                Entry Verification
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg bg-purple-900/10">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">✅</span>
                    <div>
                      <p className="text-white">Multi-Platform Check</p>
                      <p className="text-sm text-gray-400">
                        Automated verification
                      </p>
                    </div>
                  </div>
                  <button className="px-4 py-1 rounded-full bg-purple-600 text-white text-sm">
                    Try Demo
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
