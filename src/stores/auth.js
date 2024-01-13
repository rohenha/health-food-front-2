import { signal, computed } from '@preact/signals-react'
import Cookies from 'js-cookie'

import { signIn } from '@libs/strapi'

// Check if user is Auth on start
const getAuth = () => {
  const userCookie = Cookies.get('user')
  const userSession = sessionStorage.getItem('user')
  const userData = userCookie || userSession
  if (userData === null) {
    return null
  }
  return JSON.parse(userData)
}

// User state
export const user = signal(getAuth())

// Check if user is auth
export const isLoggedIn = computed(() => {
  return !!user.value
})

// Update user state on login
export const onLogin = async (form) => {
  const data = await signIn(form)

  if (data.jwt) {
    const userData = { ...data.user, token: data.jwt }
    const userDataString = JSON.stringify(userData)
    if (form.remember === 'true') {
      Cookies.set('user', userDataString, { expires: 30 })
    }
    sessionStorage.setItem('user', userDataString)
    user.value = data
    return data
    // success login
  } else {
    return null
    // error
  }
}

// Update user state on logout
export const onLogout = async () => {
  Cookies.remove('user')
  sessionStorage.removeItem('user')
  user.value = null
  return true
  // Success logout
}
