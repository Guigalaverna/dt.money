import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { client } from "../../../lib/fauna";
import { query as q } from "faunadb";

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
        const response = await client.query(
          q.If(
            q.Not(
              q.Exists(
                q.Match(q.Index("user_by_email"), q.Casefold(user.email))
              )
            ),
            q.Create(q.Collection("users"), {
              data: {
                name: user.name,
                email: user.email,
                avatar: user.image,
              },
            }),
            q.Get(q.Match(q.Index("user_by_email"), q.Casefold(user.email)))
          )
        );

        console.log(response);
      } catch (error) {
        console.error(error);
        return false;
      }

      return true;
    },
  },
});
