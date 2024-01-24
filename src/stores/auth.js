import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

import { signIn } from '@libs/strapi'

const createSelectors = (_store) => {
  let store = _store
  store.use = {}
  for (let k of Object.keys(store.getState())) {
    store.use[k] = () => store((s) => s[k])
  }

  return store
}

export const useUserStore = createSelectors(
  create(
    persist(
      (set) => ({
        user: null,
        token: null,
        isLoggedIn: false,
        login: async (form) => {
          const data = await signIn(form)
          console.log(data)
          if (data.jwt) {
            set({ user: data.user, token: data.jwt, isLoggedIn: true })
            return data
          } else {
            return null
          }
        },
        logout: () => {
          // Cookies.remove('user')
          // sessionStorage.removeItem('user')
          set({ user: null, token: null, isLoggedIn: false })
          return true
        },
      }),
      {
        name: 'health-food-auth',
        storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
      },
    ),
  ),
)
