class AuthService {
  login (payload: ILoginPayload) {
    return useHttp.post('auth/v1/token?grant_type=password', payload)
  }

  register (payload: ILoginPayload) {
    return useHttp.post('auth/v1/signup', payload)
  }

  forgotPassword (payload: IForgotPayload) {
    return useHttp.post('auth/v1/recover', payload)
  }

  // need another endpoint?
  resetPassword (payload: IResetPayload) {
    return useHttp.post('auth/v1/recover', payload)
  }

  refreshToken (refreshToken: string) {
    return useHttp.post('auth/v1/token?grant_type=refresh_token', { refresh_token: refreshToken })
  }
}

export const authService = new AuthService()
