import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { setDoc, doc, collection, getDoc } from "firebase/firestore";
import { db } from "../../../lib/firebase";
import { v4 } from "uuid";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      try {
        const usersCollectionRef = collection(db, "users");
        await setDoc(doc(usersCollectionRef, String(user.id)), {
          id: user.id,
          name: user.name,
          email: user.email,
          avatar: user.image,
          createdAt: new Date().toISOString(),
        });
      } catch (error) {
        console.error(error);
      }

      return true;
    },

    async session({ user, session }) {
      session.id = user.id;

      return session;
    },
  },
});
