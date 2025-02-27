import { motion, AnimatePresence } from 'framer-motion';
import { X } from '@phosphor-icons/react';

interface CreateRaffleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CreateRaffleModal({ isOpen, onClose }: CreateRaffleModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-black border border-purple-800/30 rounded-xl p-6 z-50"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Create New Raffle</h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            <form className="space-y-6">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Title</label>
                <input
                  type="text"
                  className="w-full bg-purple-900/10 border border-purple-800/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                  placeholder="Enter raffle title"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Prize Description</label>
                <textarea
                  className="w-full bg-purple-900/10 border border-purple-800/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500 h-24"
                  placeholder="Describe the prize"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">End Date</label>
                  <input
                    type="datetime-local"
                    className="w-full bg-purple-900/10 border border-purple-800/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Entry Type</label>
                  <select className="w-full bg-purple-900/10 border border-purple-800/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500">
                    <option value="free">Free Entry</option>
                    <option value="token">Token Gated</option>
                    <option value="invite">Invite Only</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end space-x-4 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Create Raffle
                </button>
              </div>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}