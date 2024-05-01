import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';
import type { User } from '@/app/lib/definitions';
import axios, { AxiosResponse } from 'axios';

async function getUser(
  username: string,
  password: string,
): Promise<User | undefined> {
  const apiEndpoint = `${process.env.API_ENDPOINT}/loginbidan_endpoint/login`;
  try {
    const response: AxiosResponse<any> = await axios.get(
      `${apiEndpoint}?username=${username}&password=${password}`,
    );

    if (response.status === 200) {
      const userData = response.data;
      return userData;
    } else {
      console.error('Failed to fetch user:', response.statusText);
    }
  } catch (error) {
    console.error('Failed to fetch user:', error);
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ username: z.string(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { username, password } = parsedCredentials.data;
          const user = await getUser(username, password);
          if (user) {
            console.log(user);
            return user.data;
          }
        }
        return null;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      user && (token.user = user);
      return token;
    },
    // FIXME: This ts error
    async session({ session, token }: any) {
      // Send properties to the client, like an access_token and user id from a provider.
      session.user = token.user;
      return session;
    },
  },
});
