import { createFileRoute } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { Users, User, Check } from '@phosphor-icons/react';

export const Route = createFileRoute('/pricing')({
  component: Pricing,
});

function Pricing() {
  return (
    <div className="min-h-screen bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black pointer-events-none" />

      <div className="relative container mx-auto px-6 py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Simple, Transparent Pricing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400"
          >
            Choose the plan that works best for you or your community
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Community Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-purple-900/20 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000" />
            <div className="relative p-8 bg-black rounded-xl border border-purple-800/50">
              <div className="flex items-center gap-4 mb-6">
                <Users size={32} weight="duotone" className="text-purple-400" />
                <h3 className="text-2xl font-bold text-white">Communities</h3>
              </div>
              <div className="mb-6">
                <p className="text-4xl font-bold text-white mb-2">Free</p>
                <p className="text-gray-400">Forever</p>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  'Unlimited raffles',
                  'Discord integration',
                  'Winner verification',
                  'Basic analytics',
                  'Community dashboard',
                  'Standard support',
                ].map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <Check
                      size={20}
                      className="text-purple-400"
                      weight="bold"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 px-6 rounded-lg bg-purple-600/20 text-purple-400 border border-purple-500/50 hover:bg-purple-600/30 transition-colors"
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>

          {/* Individual Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-900 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000" />
            <div className="relative p-8 bg-black rounded-xl border border-purple-800/50">
              <div className="absolute -top-4 -right-4">
                <span className="px-3 py-1 bg-purple-600 text-white text-sm rounded-full">
                  Popular
                </span>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <User size={32} weight="duotone" className="text-purple-400" />
                <h3 className="text-2xl font-bold text-white">
                  Individual Users
                </h3>
              </div>
              <div className="mb-6">
                <p className="text-4xl font-bold text-white mb-2">$2</p>
                <p className="text-gray-400">per month</p>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  'Priority entry verification',
                  'Enhanced winning chances',
                  'Custom profile badge',
                  'Early access to raffles',
                  'Premium support',
                  'No ads experience',
                ].map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <Check
                      size={20}
                      className="text-purple-400"
                      weight="bold"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 px-6 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors"
              >
                Subscribe Now
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "What's included in the free community plan?",
                a: 'Communities get unlimited raffles, basic analytics, and all essential tools needed to run successful giveaways.',
              },
              {
                q: 'Can I upgrade or downgrade at any time?',
                a: 'Yes, you can change your subscription plan at any time. Changes take effect at the start of the next billing cycle.',
              },
              {
                q: 'Is there a limit to how many raffles I can enter?',
                a: 'No, individual subscribers can enter unlimited raffles across all communities.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="p-6 bg-purple-900/10 rounded-lg border border-purple-800/30"
              >
                <h3 className="text-lg font-semibold text-white mb-2">
                  {faq.q}
                </h3>
                <p className="text-gray-400">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
