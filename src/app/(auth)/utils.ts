import { signIn } from "next-auth/react";
import { LoginI } from "./interface";

export type authType = 'login' | 'register'

export const Authentication = async (values: LoginI, type: authType) => {
  values.type = type
  const auth = await signIn('credentials', {
    ...values,
    redirect: false
  })

  return auth
}