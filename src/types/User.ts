import { Models } from "appwrite";


export interface User extends Models.Document {
  id: string;
  name: string;
  email: string;
  imageUrl: string;
};