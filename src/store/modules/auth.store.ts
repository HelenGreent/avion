import { router } from '@/router'
import { routeNames } from '@/router/route-names'
export const useAuthStore = defineStore('authStore', () => {
  const accessToken = ref(localStorage.getItem('si-token'))
  const refreshToken = ref(localStorage.getItem('ref-token'))

  function setToken (token: string) {
    accessToken.value = token
    localStorage.setItem('si-token', token)
  }

  function setRefreshToken (token: string) {
    refreshToken.value = token
    localStorage.setItem('ref-token', token)
  }

  function login (payload: ILoginPayload) {
    return authService.login(payload)
      .then((res) => {
        setToken(res.access_token)
        setRefreshToken(res.refresh_token)
      })
  }

  function register (payload: ILoginPayload) {
    return authService.register(payload)
  }

  function logout () {
    localStorage.removeItem('si-token')
    localStorage.removeItem('ref-token')
    window.location.href = router.resolve({ name: routeNames.login }).href
  }

  return {
    accessToken,
    refreshToken,
    login,
    register,
    logout,
    setRefreshToken,
    setToken
  }
})
