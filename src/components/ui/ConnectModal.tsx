import { motion, AnimatePresence } from 'framer-motion';
import { useConnectModal } from '../../context/ConnectModalContext';
import { 
  DiscordLogo, 
  TwitterLogo, 
  Wallet,
  ArrowRight,
  Check,
  X
} from '@phosphor-icons/react';

export function ConnectModal() {
  const { isOpen, closeModal } = useConnectModal();

  const platforms = [
    {
      name: 'Discord',
      icon: <DiscordLogo size={24} weight="fill" className="text-[#5865F2]" />,
      connected: false,
      href: 'https://discord.com/api/oauth2/authorize?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=identify%20guilds',
    },
    {
      name: 'Twitter',
      icon: <TwitterLogo size={24} weight="fill" className="text-[#1DA1F2]" />,
      connected: false,
      href: '#',
    },
    {
      name: 'Ethereum Wallet',
      icon: <Wallet size={24} weight="fill" className="text-[#627EEA]" />,
      connected: false,
      href: '#',
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-full max-w-md p-6 bg-black border border-purple-800/30 rounded-xl shadow-2xl"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Connect Platform</h2>
              <button
                onClick={closeModal}
                className="p-2 text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="space-y-4">
              {platforms.map((platform) => (
                <motion.a
                  key={platform.name}
                  href={platform.href}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full p-4 flex items-center justify-between rounded-lg bg-purple-900/20 border border-purple-800/30 hover:border-purple-600/50 transition-all cursor-pointer"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-purple-900/30 flex items-center justify-center">
                      {platform.icon}
                    </div>
                    <div className="text-left">
                      <p className="text-white font-medium">{platform.name}</p>
                      <p className="text-sm text-gray-400">
                        {platform.connected ? 'Connected' : 'Not connected'}
                      </p>
                    </div>
                  </div>
                  <div className="text-purple-400">
                    {platform.connected ? (
                      <Check size={24} weight="bold" />
                    ) : (
                      <ArrowRight size={24} weight="bold" />
                    )}
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-purple-800/30">
              <p className="text-sm text-gray-400 text-center">
                By connecting, you agree to our Terms of Service and Privacy Policy
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}