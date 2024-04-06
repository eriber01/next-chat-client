import { api } from "@/utils";
import { createUserI, resAuthUser } from "./interface";

interface loginI {
  email: string
  pass: string
}

interface registerI {
  email: string
  name: string
  nickName?: string
  pass: string
}

export const loginUser = async ({ email, pass }: loginI) => {
  const payload: createUserI = {
    email,
    pass,
    type: 'login'
  }

  const { data } = await api.post<resAuthUser>('authenticate-user', payload)

  console.log({ data });

  if (!data.authorize) {
    throw new Error(data.error);
  }

  const user = {
    ...data.user,
    id: String(data.user.id),
  }

  return user
}

export const createUser = async ({ email, name, pass, nickName }: registerI) => {
  const payload: createUserI = {
    email,
    name,
    nickName,
    pass,
    type: 'register'
  }

  const { data } = await api.post<resAuthUser>('authenticate-user', payload)

  console.log({ data });
  if (!data.authorize) {
    throw new Error(data.error);
  }

  const user = {
    ...data.user,
    id: String(data.user.id)
  }

  return user

}