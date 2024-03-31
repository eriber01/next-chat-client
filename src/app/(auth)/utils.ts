import { signIn } from "next-auth/react";
import { LoginI } from "./interface";

export type authType = 'login' | 'register'

export const Authentication = async (values: LoginI, type: authType) => {
  console.log(values);
  values.type = type
  const login = await signIn('credentials', {
    ...values,
    redirect: false
  })

  console.log(login);

  if (login?.ok) {

  }

}