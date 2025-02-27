import { createFileRoute } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { Book, ArrowLeft, Code, Terminal, PuzzlePiece } from '@phosphor-icons/react';
import { Link } from '@tanstack/react-router';

export const Route = createFileRoute('/_layout/docs')({
  component: Docs,
});

function Docs() {
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
            rotateY: [0, 180, 360],
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="inline-block mb-8"
        >
          <Book size={64} className="text-purple-400" weight="duotone" />
        </motion.div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Documentation
          <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            {' '}in Progress
          </span>
        </h1>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          We're crafting comprehensive guides and API documentation to help you get the most out of our platform.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
          {[
            {
              icon: <Code size={32} className="text-purple-400" />,
              title: 'API Reference',
              description: 'Complete API documentation with examples'
            },
            {
              icon: <Terminal size={32} className="text-purple-400" />,
              title: 'CLI Tools',
              description: 'Command-line interface documentation'
            },
            {
              icon: <PuzzlePiece size={32} className="text-purple-400" />,
              title: 'Integration Guides',
              description: 'Step-by-step integration tutorials'
            }
          ].map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="p-6 bg-purple-900/10 rounded-lg border border-purple-800/30"
            >
              <div className="mb-4">{section.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{section.title}</h3>
              <p className="text-gray-400 text-sm">{section.description}</p>
            </motion.div>
          ))}
        </div>
        
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Homepage</span>
        </Link>
      </motion.div>
    </div>
  );
}
