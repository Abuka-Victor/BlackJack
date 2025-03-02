import { Client, Databases, Account, OAuthProvider, ID, Permission, Role } from "appwrite";
import { toast } from "sonner";

import { User } from "./types/User";
import { RaffleFormData, Raffle } from "./types/Raffle";


const client: Client = new Client();

client
  .setEndpoint('https://api.megameboy.xyz/v1')
  .setProject('67c07cd70009721ee1c7');

export const account: Account = new Account(client);
export const database: Databases = new Databases(client);

export async function ConnectWithDiscord() {
  try {
    await account.createOAuth2Session(OAuthProvider.Discord, window.location.origin + '/dashboard', window.location.origin, ["email", "identify"]);
  } catch (error) {
    console.log("This is the error from ConnectWithDiscord", error);
    throw new Error('Failed to connect with Discord');
  }
}



export async function LogoutUser() {
  return account.deleteSession('current')
}

export async function getUserDetails() {
  let existingUser;
  let authUser;
  try {
    authUser = await account.get();
  } catch (error) {
    console.log("This is the error from getUserDetails", error);
    return null;
  }
  if (!authUser) {
    return null;
  }
  try {
    existingUser = await database.getDocument(
      "67c0b589003a754a2fb3",
      "67c0b5ac00063dfbbf7f",
      authUser.$id
    );

  } catch (error) {
    console.log("This is the error from CreateUser", error);
  }
  if (existingUser) {
    return existingUser as User;
  } else {
    const newUser = await database.createDocument("67c0b589003a754a2fb3",
      "67c0b5ac00063dfbbf7f", authUser.$id, {
      id: authUser.$id,
      name: authUser.name,
      email: authUser.email,
      imageUrl: null,
      createdAt: authUser.$createdAt,
      updatedAt: authUser.$updatedAt,
    })
    toast.success("Successfully connected")
    return newUser as User;
  }
}

export async function createRaffle(raffleData: RaffleFormData) {
  try {
    const raffle = await database.createDocument("67c0b589003a754a2fb3", "67c0b5b5002b2af8ab03", ID.unique(), raffleData, [Permission.update(Role.user(raffleData.userId)), Permission.delete(Role.user(raffleData.userId))])
    // console.log("This is the raffle", raffle);
    return raffle as Raffle
  } catch (error) {
    console.log("This is the error from createRaffle", error);
    throw new Error(error as string)
  }
}

// You then use the imported type definitions like this
// const authUser: Models.Session = await account.createEmailPasswordSession(email, password);
