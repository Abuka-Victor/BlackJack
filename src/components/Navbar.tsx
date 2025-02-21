import { Link } from '@tanstack/react-router';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useConnectModal } from '../context/ConnectModalContext';
import { ConnectModal } from './ui/ConnectModal';
import { 
  List, 
  X, 
  Rocket, 
  ChartLine, 
  Lightning,
  CurrencyCircleDollar,
  Article,
  Book,
  SignIn
} from '@phosphor-icons/react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openModal, closeModal } = useConnectModal();

  return (
    <nav className="p-6 relative">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <Link
            to="/"
            className="text-3xl font-bold text-white hover:text-purple-400 transition-colors"
          >
            BLACKJACK
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link to="/trading" className="text-gray-300 hover:text-white">
              Go Pro
            </Link>
            <Link to="/analytics" className="text-gray-300 hover:text-white">
              Analytics
            </Link>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white p-2"
        >
          {isMenuOpen ? (
            <X size={24} weight="bold" />
          ) : (
            <List size={24} weight="bold" />
          )}
        </button>

        <div className="hidden md:flex items-center space-x-6">
          <Link to="/features" className="text-gray-300 hover:text-white flex items-center space-x-2">
            <Lightning size={20} />
            <span>Features</span>
          </Link>
          <Link to="/pricing" className="text-gray-300 hover:text-white flex items-center space-x-2">
            <CurrencyCircleDollar size={20} />
            <span>Pricing</span>
          </Link>
          <Link to="/blog" className="text-gray-300 hover:text-white flex items-center space-x-2">
            <Article size={20} />
            <span>Blog</span>
          </Link>
          <Link to="/docs" className="text-gray-300 hover:text-white flex items-center space-x-2">
            <Book size={20} />
            <span>Docs</span>
          </Link>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={openModal}
            className="bg-purple-600 px-4 py-2 rounded-lg text-white hover:bg-purple-700 transition-colors flex items-center space-x-2"
          >
            <SignIn size={20} />
            <span>Sign In</span>
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 right-0 bg-black bg-opacity-95 md:hidden p-4 space-y-4"
          >
            <div className="flex flex-col space-y-4">
              <Link to="/trading" className="text-gray-300 hover:text-white">
                Trading
              </Link>
              <Link to="/analytics" className="text-gray-300 hover:text-white">
                Analytics
              </Link>
              <Link to="/features" className="text-gray-300 hover:text-white">
                Features
              </Link>
              <Link to="/pricing" className="text-gray-300 hover:text-white">
                Pricing
              </Link>
              <Link to="/blog" className="text-gray-300 hover:text-white">
                Blog
              </Link>
              <Link to="/docs" className="text-gray-300 hover:text-white">
                Docs
              </Link>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={openModal}
                className="bg-purple-600 px-4 py-2 rounded-lg text-white hover:bg-purple-700 w-full"
              >
                Sign In
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Add the ConnectModal component */}
      <ConnectModal onClose={closeModal} />
    </nav>
  );
}
