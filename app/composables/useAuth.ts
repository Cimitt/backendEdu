export const useAuth = () => {
    const config = useRuntimeConfig()
    const api = config.public.apiBase
    const user = useState<User | null>('user', () => null)
    const csrf = () => $fetch('http://127.0.0.1:8000/sanctum/csrf-cookie', {
    credentials: 'include'
  })
  
    interface User {
    id: number
    name: string
    email: string
    }
    interface register{
      name: string,
      email: string,
      password: string
    }

    interface login{
      email: string,
      password: string
    }

    const register = async (payload: register) => {
      try {
        const res = await $fetch(`${api}/register`, {
            method: 'POST',
            body: payload,
            credentials: 'include'
        })
        return res
      }

      catch (err : any) {
        return err?.data || err
      }
    }

    const login = async (payload: login) => {
      await csrf()
      try {
        const res = await $fetch(`${api}/login`, {
            method: 'POST',
            body: payload,
            credentials: 'include'
        })

        await getUser()
        return res
      }

      catch (err : any) {
        return err?.data || err
      }
    }

    const getUser = async () => {
    try {
      const res = await $fetch<User>(`${api}/user`, {
        credentials: 'include'
      })
      user.value = res
      return res
    } catch (_) {
      user.value = null
      return null
    }
  }
  return { user, csrf, register, getUser, login }
}