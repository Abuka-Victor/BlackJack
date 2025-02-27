import { createFileRoute } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { Hammer, ArrowLeft } from '@phosphor-icons/react';
import { Link } from '@tanstack/react-router';

export const Route = createFileRoute('/_layout/blog')({
  component: Blog,
});

function Blog() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative text-center px-6"
      >
        <motion.div
          animate={{ rotate: [0, -20, 20, -20, 20, 0] }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1
          }}
          className="inline-block mb-8"
        >
          <Hammer size={64} className="text-purple-400" weight="duotone" />
        </motion.div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Blog Coming Soon
        </h1>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl">
          We're crafting amazing content about raffles, community building, and Web3 insights. 
          Stay tuned!
        </p>
        
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </Link>
      </motion.div>
    </div>
  );
}
