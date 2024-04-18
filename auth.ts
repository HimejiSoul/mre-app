import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';
import type { User } from '@/app/lib/definitions';
import axios, { AxiosResponse } from 'axios';
import { use } from 'react';

// async function getUser(email: string): Promise<User | undefined> {
//   try {
//     const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
//     return user.rows[0];
//   } catch (error) {
//     console.error('Failed to fetch user:', error);
//     throw new Error('Failed to fetch user.');
//   }
// }

async function getUser(
  email: string,
  password: string,
): Promise<User | undefined> {
  const apiEndpoint = `${process.env.API_ENDPOINT}/loginbidan_endpoint/login`;
  try {
    const response: AxiosResponse<any> = await axios.get(
      `${apiEndpoint}?username=${email}&password=${password}`,
    );

    if (response.status === 200) {
      const userData = response.data;
      return userData;
    } else {
      console.error('Failed to fetch user:', response.statusText);
      throw new Error('Failed to fetch user.');
    }
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email, password);
          if (user) {
            console.log(user);
            return user;
          }
        }
        return null;
      },
    }),
  ],
});
