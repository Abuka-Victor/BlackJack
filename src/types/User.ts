import { Models } from "appwrite";


export interface User extends Models.Document {
  id: string;
  name: string;
  email: string;
  imageUrl: string;
  discordVerified: boolean;
  discordData: {
    id: string,
    username: string,
    avatar: string,
    servers: string[]
  };
};