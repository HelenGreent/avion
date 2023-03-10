import { router } from '@/router'
import { routeNames } from '@/router/route-names'
export const useAuthStore = defineStore('authStore', () => {
  const accessToken = ref(localStorage.getItem('si-token'))
  const refreshToken = ref(localStorage.getItem('ref-token'))
  const userId = ref(localStorage.getItem('user-id'))
  const user = ref<IUser>()

  function setToken (token: string) {
    accessToken.value = token
    localStorage.setItem('si-token', token)
  }

  function setRefreshToken (token: string) {
    refreshToken.value = token
    localStorage.setItem('ref-token', token)
  }

  function setUserId (id: string) {
    userId.value = id
    localStorage.setItem('user-id', id)
  }

  function setUser () {
    return authService.getUser(userId.value)
      .then(data => {
        user.value = data[0]
      })
  }

  function login (payload: ILoginPayload) {
    return authService.login(payload)
      .then((res) => {
        setToken(res.access_token)
        setRefreshToken(res.refresh_token)
        setUserId(res.user.id)
        setUser()
      })
  }

  function register (payload: ILoginPayload) {
    return authService.register(payload)
  }

  function forgotPassword (payload: IForgotPayload) {
    return authService.forgotPassword(payload)
  }

  function logout () {
    localStorage.removeItem('si-token')
    localStorage.removeItem('ref-token')
    localStorage.removeItem('user-id')
    window.location.href = router.resolve({ name: routeNames.home }).href
  }

  return {
    accessToken,
    refreshToken,
    userId,
    user,
    login,
    register,
    logout,
    forgotPassword,
    setRefreshToken,
    setToken,
    setUserId,
    setUser
  }
})
