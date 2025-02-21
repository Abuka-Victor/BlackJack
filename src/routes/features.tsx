import { createFileRoute } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import {
  Robot,
  ChartLineUp,
  Shield,
  Users,
  Lightning,
  Crown,
  Target,
} from '@phosphor-icons/react';

export const Route = createFileRoute('/features')({
  component: Features,
});

// Add these new imports

import { useRef } from 'react';

function Features() {
  const containerRef = useRef(null);

  return (
    <div className="bg-black" ref={containerRef}>
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Power Up Your{' '}
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Community
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-12">
              Everything you need to manage, grow, and engage your Discord
              community with automated raffles and rewards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Sections */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {/* Feature 1 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center gap-12 mb-32"
          >
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4">
                  <Robot
                    size={32}
                    className="text-purple-400"
                    weight="duotone"
                  />
                  <h2 className="text-3xl font-bold text-white">
                    Automated Raffle System
                  </h2>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Set up sophisticated raffles in minutes with our intuitive
                  interface. Define entry requirements, duration, and let our
                  system handle the rest - from verification to winner
                  selection.
                </p>
                <ul className="space-y-4">
                  {[
                    'Multi-platform entry verification',
                    'Customizable requirements',
                    'Automated winner selection',
                    'Real-time entry tracking',
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Lightning
                        size={20}
                        className="text-purple-400"
                        weight="fill"
                      />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-900 rounded-xl blur opacity-30" />
                <img
                  src="https://placehold.co/600x400/1a1a1a/purple"
                  alt="Raffle Dashboard"
                  className="relative rounded-xl border border-purple-800/30"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row-reverse items-center gap-12 mb-32"
          >
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4">
                  <ChartLineUp
                    size={32}
                    className="text-purple-400"
                    weight="duotone"
                  />
                  <h2 className="text-3xl font-bold text-white">
                    Advanced Analytics
                  </h2>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Make data-driven decisions with comprehensive analytics. Track
                  engagement, monitor growth, and identify your most successful
                  campaigns.
                </p>
                <ul className="space-y-4">
                  {[
                    'Real-time participation metrics',
                    'Community growth tracking',
                    'Campaign performance analysis',
                    'Custom report generation',
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Target
                        size={20}
                        className="text-purple-400"
                        weight="fill"
                      />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-900 rounded-xl blur opacity-30" />
                <img
                  src="https://placehold.co/600x400/1a1a1a/purple"
                  alt="Analytics Dashboard"
                  className="relative rounded-xl border border-purple-800/30"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
            {[
              {
                icon: <Shield size={32} weight="duotone" />,
                title: 'Anti-Bot Protection',
                description:
                  'Advanced security measures to ensure only real users participate in your raffles.',
              },
              {
                icon: <Users size={32} weight="duotone" />,
                title: 'Community Management',
                description:
                  'Powerful tools to manage roles, permissions, and user verification across platforms.',
              },
              {
                icon: <Crown size={32} weight="duotone" />,
                title: 'Premium Features',
                description:
                  'Unlock advanced customization, priority support, and exclusive tools with our Pro plan.',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-900 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000" />
                <div className="relative p-8 bg-black rounded-lg border border-purple-800/50">
                  <div className="text-purple-400 mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Community?
            </h2>
            <p className="text-gray-400 mb-8">
              Join thousands of communities already using our platform to engage
              and grow their audience.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Get Started Now
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
