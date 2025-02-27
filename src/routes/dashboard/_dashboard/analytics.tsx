import { createFileRoute } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import {
  Users,
  Trophy,
  Crown,
  ArrowUp,
  ArrowDown,
  Clock,
  Target,
} from '@phosphor-icons/react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from 'recharts';

// Dummy data for charts
const raffleData = [
  { name: 'Mon', raffles: 4, entries: 150 },
  { name: 'Tue', raffles: 3, entries: 230 },
  { name: 'Wed', raffles: 7, entries: 450 },
  { name: 'Thu', raffles: 5, entries: 280 },
  { name: 'Fri', raffles: 8, entries: 390 },
  { name: 'Sat', raffles: 12, entries: 580 },
  { name: 'Sun', raffles: 9, entries: 470 },
];

const growthData = [
  { name: 'Week 1', users: 1200 },
  { name: 'Week 2', users: 1900 },
  { name: 'Week 3', users: 2400 },
  { name: 'Week 4', users: 3100 },
];

export const Route = createFileRoute('/dashboard/_dashboard/analytics')({
  component: Analytics,
});

function Analytics() {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Analytics Dashboard
          </motion.h1>
          <p className="text-gray-400">
            Track your community's performance and engagement
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            {
              title: 'Total Users',
              value: '12,345',
              change: '+12.3%',
              isPositive: true,
              icon: (
                <Users size={24} className="text-purple-400" weight="duotone" />
              ),
            },
            {
              title: 'Active Raffles',
              value: '23',
              change: '+5.2%',
              isPositive: true,
              icon: (
                <Trophy
                  size={24}
                  className="text-purple-400"
                  weight="duotone"
                />
              ),
            },
            {
              title: 'Total Entries',
              value: '45.2k',
              change: '-2.4%',
              isPositive: false,
              icon: (
                <Target
                  size={24}
                  className="text-purple-400"
                  weight="duotone"
                />
              ),
            },
            {
              title: 'Completion Rate',
              value: '94.8%',
              change: '+1.2%',
              isPositive: true,
              icon: (
                <Crown size={24} className="text-purple-400" weight="duotone" />
              ),
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-black rounded-xl border border-purple-800/30 hover:border-purple-600/50 transition-colors"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-purple-900/20 rounded-lg">
                  {stat.icon}
                </div>
                <div
                  className={`flex items-center ${stat.isPositive ? 'text-green-400' : 'text-red-400'}`}
                >
                  {stat.isPositive ? (
                    <ArrowUp size={16} />
                  ) : (
                    <ArrowDown size={16} />
                  )}
                  <span className="ml-1 text-sm">{stat.change}</span>
                </div>
              </div>
              <h3 className="text-gray-400 text-sm mb-1">{stat.title}</h3>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 bg-black rounded-xl border border-purple-800/30"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-white">Raffle Activity</h3>
              <div className="flex items-center text-gray-400 text-sm">
                <Clock size={16} className="mr-2" />
                <span>Last 7 days</span>
              </div>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={raffleData}>
                  <defs>
                    <linearGradient id="colorRaffles" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#9333EA" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#9333EA" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="name" stroke="#666" />
                  <YAxis stroke="#666" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#000', 
                      border: '1px solid #4B5563',
                      borderRadius: '8px'
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="entries"
                    stroke="#9333EA"
                    fillOpacity={1}
                    fill="url(#colorRaffles)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-6 bg-black rounded-xl border border-purple-800/30"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-white">User Growth</h3>
              <div className="flex items-center text-gray-400 text-sm">
                <Clock size={16} className="mr-2" />
                <span>Last 30 days</span>
              </div>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={growthData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="name" stroke="#666" />
                  <YAxis stroke="#666" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#000', 
                      border: '1px solid #4B5563',
                      borderRadius: '8px'
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="users"
                    stroke="#9333EA"
                    strokeWidth={2}
                    dot={{ fill: '#9333EA', strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-6 bg-black rounded-xl border border-purple-800/30"
        >
          <h3 className="text-lg font-semibold text-white mb-6">
            Recent Activity
          </h3>
          <div className="space-y-4">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 rounded-lg bg-purple-900/10 border border-purple-800/20"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-purple-900/20 rounded-lg">
                    <Trophy size={20} className="text-purple-400" />
                  </div>
                  <div>
                    <p className="text-white">New Raffle Created</p>
                    <p className="text-sm text-gray-400">2 minutes ago</p>
                  </div>
                </div>
                <button className="text-purple-400 hover:text-purple-300">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
