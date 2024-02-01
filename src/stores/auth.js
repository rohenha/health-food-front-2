import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

import { signIn, signUp, resetPassword, forgotPassword } from '@libs/strapi'

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
        resetPassword: async (form) => {
          const data = await resetPassword(form)
          if (data.jwt) {
            set({ user: data.user, token: data.jwt, isLoggedIn: true })
            return data
          } else {
            return data
          }
        },
        forgotPassword: async (form) => {
          const data = await forgotPassword(form)
          return data.ok
        },
        signUp: async (form) => {
          const data = await signUp(form)
          if (data.jwt) {
            set({ user: data.user, token: data.jwt, isLoggedIn: true })
            return data
          } else {
            return data
          }
        },
        login: async (form) => {
          const data = await signIn(form)
          if (data.jwt) {
            set({ user: data.user, token: data.jwt, isLoggedIn: true })
            return data
          } else {
            return data
          }
        },
        logout: () => {
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
