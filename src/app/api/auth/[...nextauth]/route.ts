import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { api } from "@/utils";
import { createUserI, resAuthUser } from "./interface";
import { createUser, loginUser } from "./utils";

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
        name: { label: 'Full Name', type: 'text', placeholder: 'Enter the full name' },
        nickName: { label: 'Nick Name', type: 'text', placeholder: 'Enter the Nick name' }
      },
      async authorize(credentials) {
        const { email, password, type, name, nickName } = credentials!
        if (type === 'login') {
          const user = await loginUser({ email, pass: password })
          return user
        } else if (type === 'register') {
          const user = await createUser({ email, pass: password, name, nickName })
          return user
        }
        return null

      },
    })
  ],
  // session: {
  //   strategy: 'jwt',
  // },
  callbacks: {
    async signIn({ account, profile }) {
      console.log('llego al singIn');
      console.log({ account });

      if (account?.provider === 'google' || account?.provider === 'github') {
        try {
          console.log('*******************************entro al flujo por sociallll ************************************');

          const payload: createUserI = {
            email: profile?.email!,
            name: profile?.name!,
            pass: account.providerAccountId,
            provider: account.provider
          }

          const { data } = await api.post('authenticate-user-socials', payload)
          // console.log('valido con red social');
          console.log({ data });

          if (!data.authorize) {
            throw new Error(data.error);
          }

          return data.authorize
        } catch (error) {
          console.log('***************************el nuevo mensaje de error *************************************');

          console.log({ error });
          throw new Error(String(error));

        }
      } else if (account?.provider === 'credentials') {
        console.log('**************************entro al flujo por credenciales************************');

        console.log({ account, profile });

        return true
      }
    },
    session: async ({ session, token }) => {
      console.log({ session, token });
      let { data: user } = await api.get(`/get-user-by-email?email=${token.email}`)
      console.log(user.user);

      if (!user.user && user.status !== 201) {
        console.log('entro aqui');
        // session.expires = new Date().toString()
        session.user = null
      }

      user.user.image = token.picture
      session.user = user.user
      return session
    },
    jwt({ token, user, account, profile, session }) {
      console.log('con credenciales');
      console.log({ account, user, profile, session });
      if (user) token.user = user

      return token
    }
  },
})

export { handler as GET, handler as POST }