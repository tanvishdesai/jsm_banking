"use server"

import { ID } from "node-appwrite"
import { createAdminClient, createSessionClient } from "../appwrite"
import { cookies } from "next/headers"
import { parseStringify } from "../utils"

export const SignIn = async({email, password}: signInProps) => {
  try {
    // Create the Admin client
    const { account } = await createAdminClient();
    
    // Create a session using email and password
    const session = await account.createEmailPasswordSession(email, password);
  
    // Set the session cookie securely
    const cookieStore = cookies();
    (await cookieStore).set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });
  
    // Return the response in a structured format
    return parseStringify(session);
  } catch (error: any) {
    console.error("Error creating session:", error.message || error);
    throw new Error("Failed to create a session. Please check the credentials and try again.");
  }
}

export const SignUp = async (userdata: SignUpParams) => {
    const {email, password, firstName, lastName} = userdata
    try {
        const { account } = await createAdminClient();

        const newUserAccount= await account.create(ID.unique(), email, password, `${firstName} ${lastName}`);
        const session = await account.createEmailPasswordSession(email, password);
      
        (await cookies()).set("appwrite-session", session.secret, {
          path: "/",
          httpOnly: true,
          sameSite: "strict",
          secure: true,
        });
        return parseStringify(newUserAccount)
    } catch (error: any) {
        console.error('Error', error.message || error);
    }
}

export async function getLoggedInUser() {
    try {
      const { account } = await createSessionClient();
      return await account.get();
    } catch (error: any) {
      console.error('Error getting logged in user:', error.message || error);
      return null;
    }
}

export const logoutAccount =  async () => {
    try {
      const {account}= await createSessionClient()
      ;(await cookies()).delete('appwrite-session')
      await account.deleteSession('current')
    } catch (error: any) {
      console.error('Error logging out:', error.message || error);
      return null;
    }
}