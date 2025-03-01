import { motion, AnimatePresence } from 'framer-motion';
import { X } from '@phosphor-icons/react';
import { useState } from 'react';
import { useAuthContext } from '../../context/AuthContext';
import { RaffleFormData } from '../../types/Raffle';
import { useCreateRaffle } from '../../state/raffles';

interface CreateRaffleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CreateRaffleModal({ isOpen, onClose }: CreateRaffleModalProps) {
  const { user } = useAuthContext();
  const { mutate: createRaffle, isPending } = useCreateRaffle();
  const [followAccounts, setFollowAccounts] = useState<string[]>(['']);
  const [posts, setPosts] = useState<
    Array<{
      url: string;
      requireLike: boolean;
      requireRetweet: boolean;
    }>
  >([{ url: '', requireLike: true, requireRetweet: true }]);

  const addPost = () =>
    setPosts([...posts, { url: '', requireLike: true, requireRetweet: true }]);

  const removePost = (index: number) => {
    setPosts(posts.filter((_, i) => i !== index));
  };

  const addFollowAccount = () => setFollowAccounts([...followAccounts, '']);

  const removeFollowAccount = (index: number) => {
    setFollowAccounts(followAccounts.filter((_, i) => i !== index));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const raffleData: RaffleFormData = {
      userId: user!.id,
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      endDate: formData.get('endDate') as string,
      entryType: formData.get('entryType') as 'free' | 'token' | 'invite',
      twitterRequirements: {
        followAccounts: followAccounts.filter(
          (account) => account.trim() !== ''
        ),
        posts: posts.filter((post) => post.url.trim() !== ''),
      },
    };
    // console.log('Raffle Form Data:', raffleData);
    createRaffle(raffleData);
  };

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
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-black border border-purple-800/30 rounded-xl p-6 z-50 max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">
                Create New Raffle
              </h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <form className="space-y-6" onSubmit={onSubmit}>
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  className="w-full bg-purple-900/10 border border-purple-800/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                  placeholder="Enter raffle title"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Prize Description
                </label>
                <textarea
                  className="w-full bg-purple-900/10 border border-purple-800/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500 h-24"
                  placeholder="Describe the prize"
                  name="description"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    End Date
                  </label>
                  <input
                    type="datetime-local"
                    className="w-full bg-purple-900/10 border border-purple-800/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                    name="endDate"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Entry Type
                  </label>
                  <select
                    className="w-full bg-purple-900/10 border border-purple-800/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                    name="entryType"
                  >
                    <option value="free">Free Entry</option>
                    <option value="token">Token Gated</option>
                    <option value="invite">Invite Only</option>
                  </select>
                </div>
              </div>

              {/* Twitter Requirements Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">
                  Twitter Requirements
                </h3>

                {/* Follow Accounts */}
                <div className="space-y-2">
                  <label className="block text-sm text-gray-400">
                    Follow Accounts
                  </label>
                  {followAccounts.map((account, index) => (
                    <div key={index} className="flex gap-2">
                      <input
                        type="text"
                        value={account}
                        onChange={(e) => {
                          const newAccounts = [...followAccounts];
                          newAccounts[index] = e.target.value;
                          setFollowAccounts(newAccounts);
                        }}
                        placeholder="@username"
                        className="flex-1 bg-purple-900/10 border border-purple-800/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                      />
                      <button
                        type="button"
                        onClick={() => removeFollowAccount(index)}
                        className="px-3 py-2 text-gray-400 hover:text-white transition-colors"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addFollowAccount}
                    className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    + Add another account
                  </button>
                </div>

                {/* Like & Retweet Posts */}
                <div className="space-y-2">
                  <label className="block text-sm text-gray-400">
                    Posts Requirements
                  </label>
                  {posts.map((post, index) => (
                    <div
                      key={index}
                      className="space-y-2 border border-purple-800/30 rounded-lg p-3 mb-3"
                    >
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={post.url}
                          onChange={(e) => {
                            const newPosts = [...posts];
                            newPosts[index].url = e.target.value;
                            setPosts(newPosts);
                          }}
                          placeholder="Tweet URL"
                          className="flex-1 bg-purple-900/10 border border-purple-800/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                        />
                        <button
                          type="button"
                          onClick={() => removePost(index)}
                          className="px-3 py-2 text-gray-400 hover:text-white transition-colors"
                        >
                          ✕
                        </button>
                      </div>
                      <div className="flex gap-4">
                        <label className="flex items-center space-x-2 text-sm text-gray-400">
                          <input
                            type="checkbox"
                            checked={post.requireLike}
                            onChange={(e) => {
                              const newPosts = [...posts];
                              newPosts[index].requireLike = e.target.checked;
                              setPosts(newPosts);
                            }}
                            className="form-checkbox h-4 w-4 bg-purple-900/10 border-purple-800/30 text-purple-600 rounded focus:ring-purple-500"
                          />
                          <span>Require Like</span>
                        </label>
                        <label className="flex items-center space-x-2 text-sm text-gray-400">
                          <input
                            type="checkbox"
                            checked={post.requireRetweet}
                            onChange={(e) => {
                              const newPosts = [...posts];
                              newPosts[index].requireRetweet = e.target.checked;
                              setPosts(newPosts);
                            }}
                            className="form-checkbox h-4 w-4 bg-purple-900/10 border-purple-800/30 text-purple-600 rounded focus:ring-purple-500"
                          />
                          <span>Require Retweet</span>
                        </label>
                      </div>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addPost}
                    className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    + Add another post
                  </button>
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
                  disabled={isPending}
                  className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  {isPending ? 'Loading' : 'Create Raffle'}
                </button>
              </div>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
