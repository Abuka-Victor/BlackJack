import { createFileRoute } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { ChartLineUp, ArrowLeft } from '@phosphor-icons/react';
import { Link } from '@tanstack/react-router';

export const Route = createFileRoute('/analytics')({
  component: Analytics,
});

function Analytics() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative text-center px-6"
      >
        <motion.div
          animate={{ 
            y: [-4, 4, -4],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="inline-block mb-8"
        >
          <ChartLineUp size={64} className="text-purple-400" weight="duotone" />
        </motion.div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Analytics Dashboard
          <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            {' '}Coming Soon
          </span>
        </h1>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          We're building powerful analytics tools to help you track your raffle performance,
          community engagement, and growth metrics. Stay tuned for the launch!
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8"
        >
          {[
            'Real-time Tracking',
            'Community Insights',
            'Performance Metrics'
          ].map((feature, index) => (
            <div 
              key={index}
              className="px-6 py-3 bg-purple-900/20 rounded-lg border border-purple-500/20"
            >
              <p className="text-purple-400">{feature}</p>
            </div>
          ))}
        </motion.div>
        
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Return to Homepage</span>
        </Link>
      </motion.div>
    </div>
  );
}
