class AuthService {
  login (payload: ILoginPayload) {
    return useHttp.post('auth/v1/token?grant_type=password', payload)
  }

  register (payload: ILoginPayload) {
    return useHttp.post('auth/v1/signup', payload, {
      params: { redirect_to: `${window.location.origin}/login` }
    })
  }

  forgotPassword (payload: IForgotPayload) {
    return useHttp.post('auth/v1/recover', payload)
  }

  refreshToken (refreshToken: string) {
    return useHttp.post('auth/v1/token?grant_type=refresh_token', { refresh_token: refreshToken })
  }

  getUser (id: string | null) {
    return useHttp.get(`/rest/v1/profiles?id=eq.${id}&select=*`)
  }
}

export const authService = new AuthService()
