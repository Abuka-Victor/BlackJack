import { Models } from "appwrite";

export interface Raffle extends Models.Document {
  userId: string;
  title: string;
  description: string;
  endDate: string;
  entryType: 'free' | 'token' | 'invite';
  twitterRequirements: {
    followAccounts: string[];
    posts: {
      url: string;
      requireLike: boolean;
      requireRetweet: boolean;
    }[];
  };
}

export interface RaffleFormData {
  userId: string;
  title: string;
  description: string;
  endDate: string;
  entryType: 'free' | 'token' | 'invite';
  twitterRequirements: {
    followAccounts: string[];
    posts: {
      url: string;
      requireLike: boolean;
      requireRetweet: boolean;
    }[];
  };
}