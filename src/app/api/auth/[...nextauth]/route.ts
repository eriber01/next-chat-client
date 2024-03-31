import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { api } from "@/utils";
import { createUserI, resAuthUser } from "./interface";

const handler = NextAuth({
  pages: {
    signIn: '/login',
    error: '/login'
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'Enter the email' },
        password: { label: 'Password', type: 'password', placeholder: '******' },
        type: {},
      },
      async authorize(credentials) {
        const { email, password, type } = credentials!
        console.log('entes de ');
        // console.log(credentials, req);

        if (type === 'login') {
          const payload: createUserI = {
            email,
            pass: password,
            type: 'login'
          }

          const { data } = await api.post<resAuthUser>('create-user', payload)

          console.log({ data });

          if (!data.authorize) {
            console.log(data);
            console.log('entro mal');

            throw new Error(data.error);
          }

          // console.log('salio');

          const user = {
            id: String(data.user.id),
            name: data.user.name,
            email: data.user.email,
          }

          return user
        }

        return null

      },
    })
  ],
  callbacks: {
    async signIn({ account, profile }) {
      console.log('llego al singIn');
      if (account?.provider === 'google' || account?.provider === 'github') {
        try {
          const payload: createUserI = {
            email: profile?.email!,
            name: profile?.name!,
            pass: account.providerAccountId,
            provider: account.provider
          }
          const { data } = await api.post('create-user-socials', payload)
          console.log(data);

          return data.authorize
        } catch (error) {
          return false
        }
      }

      return true
    },
    jwt({ token, user, account, profile, session }) {
      console.log('con credenciales');
      console.log(account, profile, user);
      if (user) token.user = user

      // throw new Error("hola mundo");

      return token
    }
  },
})

export { handler as GET, handler as POST }