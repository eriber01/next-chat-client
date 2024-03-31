import { UserI } from "@/components/SideBar/interface";
import NextAuth, { DefaultSession } from "next-auth/next";

declare module "next-auth" {
  interface Session extends UserI {
    user: DefaultSession['user']
  }
}