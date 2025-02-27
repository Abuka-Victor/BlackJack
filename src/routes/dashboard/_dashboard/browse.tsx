import { createFileRoute } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { MagnifyingGlass, FunnelSimple, CaretDown } from '@phosphor-icons/react';
import { useState } from 'react';

export const Route = createFileRoute('/dashboard/_dashboard/browse')({
  component: Browse,
});

function Browse() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    status: 'all',
    timeFrame: 'all',
    entryType: 'all',
  });

  const filters = {
    status: ['All', 'Active', 'Ending Soon', 'New'],
    timeFrame: ['All Time', 'Today', 'This Week', 'This Month'],
    entryType: ['All Types', 'Free', 'Token Gated', 'Invite Only'],
  };

  // Dummy data for raffles
  const raffles = [
    {
      id: 1,
      title: 'NFT Collection Giveaway',
      community: 'CryptoHub',
      entries: 1234,
      endsIn: '2 days',
      prize: '3 NFTs',
    },
    {
      id: 2,
      title: 'Gaming Bundle',
      community: 'GamersUnite',
      entries: 567,
      endsIn: '5 hours',
      prize: 'PS5 + Games',
    },
    {
      id: 3,
      title: 'Exclusive Sneaker Drop',
      community: 'SneakerHeads',
      entries: 2891,
      endsIn: '1 day',
      prize: 'Limited Edition Nikes',
    },
    {
      id: 4,
      title: 'Tech Gadget Bundle',
      community: 'TechLovers',
      entries: 1567,
      endsIn: '3 days',
      prize: 'iPhone 15 Pro',
    },
    {
      id: 5,
      title: 'Crypto Token Giveaway',
      community: 'Web3Gang',
      entries: 4532,
      endsIn: '12 hours',
      prize: '1000 USDT',
    },
    {
      id: 6,
      title: 'Gaming PC Setup',
      community: 'PCMasterRace',
      entries: 3421,
      endsIn: '4 days',
      prize: 'RTX 4090 Build',
    },
    {
      id: 7,
      title: 'Art Commission',
      community: 'DigitalArtists',
      entries: 892,
      endsIn: '6 hours',
      prize: 'Custom Artwork',
    },
    {
      id: 8,
      title: 'Music Production Pack',
      community: 'BeatMakers',
      entries: 743,
      endsIn: '1 day',
      prize: 'Studio Equipment',
    },
    {
      id: 9,
      title: 'Streaming Setup',
      community: 'StreamersUnited',
      entries: 1876,
      endsIn: '2 days',
      prize: 'Full Stream Kit',
    },
    {
      id: 10,
      title: 'Designer Bag',
      community: 'FashionHub',
      entries: 2143,
      endsIn: '8 hours',
      prize: 'Limited Edition Bag',
    },
    {
      id: 11,
      title: 'Photography Kit',
      community: 'PhotoPros',
      entries: 967,
      endsIn: '5 days',
      prize: 'DSLR Camera Kit',
    },
    {
      id: 12,
      title: 'Fitness Package',
      community: 'FitFam',
      entries: 1432,
      endsIn: '3 days',
      prize: 'Home Gym Set',
    },
    {
      id: 13,
      title: 'Manga Collection',
      community: 'AnimeLovers',
      entries: 2567,
      endsIn: '1 day',
      prize: 'Complete Series Set',
    },
    {
      id: 14,
      title: 'Smart Home Bundle',
      community: 'TechHome',
      entries: 1789,
      endsIn: '4 days',
      prize: 'IoT Device Pack',
    },
    {
      id: 15,
      title: 'Cooking Master Set',
      community: 'ChefLife',
      entries: 891,
      endsIn: '2 days',
      prize: 'Pro Kitchen Kit',
    },
    {
      id: 16,
      title: 'Travel Package',
      community: 'Wanderlust',
      entries: 3245,
      endsIn: '6 days',
      prize: 'Luxury Vacation',
    },
    {
      id: 17,
      title: 'Board Game Collection',
      community: 'TableTopGaming',
      entries: 678,
      endsIn: '3 days',
      prize: 'Premium Games Set',
    },
    {
      id: 18,
      title: 'Crypto Mining Rig',
      community: 'MinerSquad',
      entries: 2134,
      endsIn: '5 days',
      prize: 'Mining Setup',
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-white mb-4">Browse Raffles</h1>
          <p className="text-gray-400">Discover and participate in public raffles</p>
        </motion.div>

        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <MagnifyingGlass size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search raffles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-purple-900/10 border border-purple-800/30 rounded-lg pl-10 pr-4 py-2 text-white focus:outline-none focus:border-purple-500"
            />
          </div>
          <div className="relative">
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center space-x-2 px-4 py-2 bg-purple-900/20 border border-purple-800/30 rounded-lg text-purple-400 hover:bg-purple-900/30 transition-colors"
            >
              <FunnelSimple size={20} />
              <span>Filter</span>
              <CaretDown 
                size={16} 
                className={`transform transition-transform ${isFilterOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {/* Filter Dropdown */}
            {isFilterOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 mt-2 w-64 bg-black border border-purple-800/30 rounded-xl shadow-lg z-50"
              >
                <div className="p-4 space-y-4">
                  {/* Status Filter */}
                  <div>
                    <label className="text-sm text-gray-400 mb-2 block">Status</label>
                    <select
                      value={selectedFilters.status}
                      onChange={(e) => setSelectedFilters({...selectedFilters, status: e.target.value})}
                      className="w-full bg-purple-900/10 border border-purple-800/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-purple-500"
                    >
                      {filters.status.map((status) => (
                        <option key={status} value={status.toLowerCase()}>{status}</option>
                      ))}
                    </select>
                  </div>

                  {/* Time Frame Filter */}
                  <div>
                    <label className="text-sm text-gray-400 mb-2 block">Time Frame</label>
                    <select
                      value={selectedFilters.timeFrame}
                      onChange={(e) => setSelectedFilters({...selectedFilters, timeFrame: e.target.value})}
                      className="w-full bg-purple-900/10 border border-purple-800/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-purple-500"
                    >
                      {filters.timeFrame.map((time) => (
                        <option key={time} value={time.toLowerCase()}>{time}</option>
                      ))}
                    </select>
                  </div>

                  {/* Entry Type Filter */}
                  <div>
                    <label className="text-sm text-gray-400 mb-2 block">Entry Type</label>
                    <select
                      value={selectedFilters.entryType}
                      onChange={(e) => setSelectedFilters({...selectedFilters, entryType: e.target.value})}
                      className="w-full bg-purple-900/10 border border-purple-800/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-purple-500"
                    >
                      {filters.entryType.map((type) => (
                        <option key={type} value={type.toLowerCase()}>{type}</option>
                      ))}
                    </select>
                  </div>

                  {/* Apply/Reset Buttons */}
                  <div className="flex space-x-3 pt-2">
                    <button
                      onClick={() => setIsFilterOpen(false)}
                      className="flex-1 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      Apply
                    </button>
                    <button
                      onClick={() => {
                        setSelectedFilters({
                          status: 'all',
                          timeFrame: 'all',
                          entryType: 'all',
                        });
                        setIsFilterOpen(false);
                      }}
                      className="flex-1 py-2 bg-purple-900/20 text-purple-400 rounded-lg hover:bg-purple-900/30 transition-colors"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Raffles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {raffles.map((raffle) => (
            <motion.div
              key={raffle.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-black border border-purple-800/30 rounded-xl p-6 hover:border-purple-600/50 transition-colors"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-white">{raffle.title}</h3>
                <span className="px-3 py-1 bg-purple-900/20 text-purple-400 rounded-full text-sm">
                  {raffle.entries} entries
                </span>
              </div>
              <div className="space-y-2 mb-6">
                <p className="text-gray-400">By {raffle.community}</p>
                <p className="text-purple-400">Prize: {raffle.prize}</p>
                <p className="text-gray-400">Ends in {raffle.endsIn}</p>
              </div>
              <button className="w-full py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                Enter Raffle
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
