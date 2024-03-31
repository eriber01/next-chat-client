import { authType } from "@/app/(auth)/utils"

export interface createUserI {
  id?: number
  name?: string
  email: string
  provider?: string
  pass: string
  nickName?: string
  type?: authType
}

export interface resAuthUser {
  authorize: boolean
  user: createUserI
  error: string
  status: boolean
}