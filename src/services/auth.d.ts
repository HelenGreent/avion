interface ILoginPayload {
  email: string
  password: string
}

interface IForgotPayload {
  email: string
}

interface IUser {
  id: string
  updated_at: null
  user_name: string
  full_name: string
  avatar_url: string
  user_role: string
}
