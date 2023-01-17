interface ILoginPayload {
  email: string
  password: string
}

interface IForgotPayload {
  email: string
}

interface IResetPayload {
  password: string
  newPassword: string
  // token: string
}
