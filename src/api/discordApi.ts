import axios from 'axios';

const BASE_URL = "https://discord.com/api"

const discordClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  withCredentials: true,
  timeout: 30000, // Increased to 30 seconds
});

// Add a response interceptor
discordClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // TODO: Throw toast notification
    return Promise.reject(error);
  }
);

export async function getDiscordUserDetails() {
  return await discordClient.get('/v10/users/@me');
}

export default discordClient;
