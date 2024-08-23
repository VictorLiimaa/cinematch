import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs"; 

const prisma = new PrismaClient();

export default NextAuth({
  providers: [
    // Provedor do Google
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // Provedor de credenciais para login manual
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // tabela ManualUser
        const user = await prisma.manualUser.findUnique({
          where: { email: credentials.email },
        });

        if (user) {
          // verificar se senha está correta
          const isValidPassword = bcrypt.compareSync(credentials.password, user.password);
          
          if (isValidPassword) {
            return { id: user.id, email: user.email, name: user.name };
          } else {
            throw new Error("Senha incorreta");
          }
        } else {
          // Usuário não encontrado
          throw new Error("Usuário não cadastrado");
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      // Verificar se o usuário está na tabela ManualUser ou User (Google)
      let dbUser = await prisma.manualUser.findUnique({
        where: { email: session.user.email },
      });

      if (!dbUser) {
        dbUser = await prisma.user.findUnique({
          where: { email: session.user.email },
        });
      }

      if (dbUser) {
        session.user.id = dbUser.id;
      }

      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",  // Página de login personalizada
    error: "/auth/signin",   // Redirecionar para a página de login em caso de erro
  },
});
